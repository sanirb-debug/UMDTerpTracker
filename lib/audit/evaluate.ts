import type { CourseEntry, Transcript } from '../types.ts';
import { gradePoints } from '../grades.ts';
import type { AuditResult, Requirements, Rule, RuleResult } from './types.ts';

/**
 * Evaluate a transcript against a set of degree requirements.
 *
 * ## How a course gets spent
 *
 * Named rules (`all_of`, `n_of`, `one_of`) ask a question — did you take this
 * course? — and several of them can legitimately point at the same course.
 * INST201 is listed under both Benchmark II and the Information Science core,
 * and it satisfies both; an audit that let the first rule swallow it would
 * report the core short by a course the student passed with an A.
 *
 * Credit pools are different. They are budgets, and a course can only be spent
 * once, so a scoped `credits` rule draws only from courses no named rule
 * claimed. Otherwise the ten core courses would also pay for the fifteen
 * elective credits.
 *
 * An unscoped `credits` rule — total credits for the degree — measures the
 * whole transcript and consumes nothing.
 *
 * In-progress work is never counted as done. It is reported separately so the
 * audit can say "covered if you pass what you are taking" without claiming you
 * already have.
 */

/** Grades that earn credit without earning quality points. */
const PASSING_MARKS = new Set(['P', 'S']);

const NAMED_RULES = new Set(['all_of', 'n_of', 'one_of']);

function minPointsFor(requirements: Requirements): number {
  const points = requirements.minGrade ? gradePoints(requirements.minGrade) : null;
  return points ?? 0;
}

/**
 * Whether a finished course is good enough to satisfy a requirement.
 *
 * Transfer and exam credit counts on acceptance — it carries no UMD quality
 * points, so there is nothing to compare a minimum grade against, and the
 * registrar already decided it was worth credit.
 */
function counts(entry: CourseEntry, minPoints: number): boolean {
  if (entry.grade === 'NG') return false;
  if (entry.source !== 'institution') return entry.credits > 0;
  if (PASSING_MARKS.has(entry.grade)) return true;
  return entry.gradePoints !== null && entry.gradePoints >= minPoints - 1e-9;
}

function matches(courseId: string, wanted: readonly string[]): boolean {
  return wanted.includes(courseId.toUpperCase());
}

/** Credits a finished course contributed. An F occupies credits but earns none. */
function creditFor(entry: CourseEntry): number {
  return entry.creditsEarned ?? entry.credits;
}

function neededFor(rule: Rule): number {
  switch (rule.type) {
    case 'all_of':
      return rule.courses.length;
    case 'one_of':
      return 1;
    case 'n_of':
      return rule.n;
    case 'credits':
      return rule.credits;
  }
}

export function evaluate(transcript: Transcript, requirements: Requirements): AuditResult {
  const minPoints = minPointsFor(requirements);
  const allCompleted = [
    ...transcript.terms.flatMap((term) => term.courses),
    ...transcript.nonGpaCredits,
  ].filter((entry) => counts(entry, minPoints));
  const allInProgress = [...transcript.inProgress];

  const results = new Map<number, RuleResult>();
  const claimedCompleted = new Set<CourseEntry>();
  const claimedInProgress = new Set<CourseEntry>();

  // --- pass 1: named rules, which may share courses with one another --------
  requirements.rules.forEach((rule, index) => {
    if (!NAMED_RULES.has(rule.type) || rule.type === 'credits') return;
    const wanted = rule.courses.map((id) => id.toUpperCase());
    const needed = neededFor(rule);

    const completed = allCompleted.filter((entry) => matches(entry.courseId, wanted));
    const inProgress = allInProgress.filter((entry) => matches(entry.courseId, wanted));

    // Only as many as the rule actually asks for are spent. A student with all
    // three options for a "two of three" rule keeps the third for electives.
    completed.slice(0, needed).forEach((entry) => claimedCompleted.add(entry));
    inProgress
      .slice(0, Math.max(0, needed - completed.length))
      .forEach((entry) => claimedInProgress.add(entry));

    const covered = new Set(
      [...completed, ...inProgress].map((entry) => entry.courseId.toUpperCase()),
    );
    const satisfied = completed.length >= needed;

    results.set(index, {
      rule,
      label: rule.label,
      satisfied,
      completed,
      inProgress,
      missing: satisfied ? [] : wanted.filter((id) => !covered.has(id)),
      needed,
      have: completed.length,
      pending: inProgress.length,
      unit: 'courses',
    });
  });

  // --- pass 2: credit pools, drawing on what no named rule claimed ----------
  const poolCompleted = allCompleted.filter((entry) => !claimedCompleted.has(entry));
  const poolInProgress = allInProgress.filter((entry) => !claimedInProgress.has(entry));

  requirements.rules.forEach((rule, index) => {
    if (rule.type !== 'credits') return;
    const wanted = rule.from?.map((id) => id.toUpperCase());

    let completed: CourseEntry[];
    let inProgress: CourseEntry[];

    if (wanted) {
      completed = drain(poolCompleted, (entry) => matches(entry.courseId, wanted));
      inProgress = drain(poolInProgress, (entry) => matches(entry.courseId, wanted));
    } else {
      // Total-degree rules measure everything and spend nothing.
      completed = allCompleted;
      inProgress = allInProgress;
    }

    const have = completed.reduce((sum, entry) => sum + creditFor(entry), 0);
    const pending = inProgress.reduce((sum, entry) => sum + entry.credits, 0);

    results.set(index, {
      rule,
      label: rule.label,
      satisfied: have >= rule.credits,
      completed,
      inProgress,
      missing: [],
      needed: rule.credits,
      have,
      pending,
      unit: 'credits',
    });
  });

  const ordered = requirements.rules.map((_, index) => results.get(index)!);

  const remainingCourses: string[] = [];
  const remainingCredits: Array<{ label: string; credits: number }> = [];
  for (const result of ordered) {
    if (result.satisfied) continue;
    if (result.rule.type === 'all_of') {
      for (const id of result.missing) {
        if (!remainingCourses.includes(id)) remainingCourses.push(id);
      }
    } else if (result.rule.type === 'credits') {
      const short = result.needed - result.have - result.pending;
      if (short > 0) remainingCredits.push({ label: result.label, credits: short });
    }
  }

  return {
    requirements,
    results: ordered,
    satisfied: ordered.every((result) => result.satisfied),
    satisfiedIfInProgressPass: ordered.every(
      (result) => result.have + result.pending >= result.needed,
    ),
    remainingCourses,
    remainingCredits,
  };
}

/** Remove and return every matching entry, so a later pool cannot reuse it. */
function drain(pool: CourseEntry[], predicate: (entry: CourseEntry) => boolean): CourseEntry[] {
  const taken: CourseEntry[] = [];
  for (let i = pool.length - 1; i >= 0; i -= 1) {
    if (predicate(pool[i]!)) {
      taken.unshift(pool[i]!);
      pool.splice(i, 1);
    }
  }
  return taken;
}
