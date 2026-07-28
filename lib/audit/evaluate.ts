import type { CourseEntry, Transcript } from '../types.ts';
import { gradePoints } from '../grades.ts';
import type { AuditResult, Requirements, Rule, RuleResult, Selector } from './types.ts';

/**
 * Evaluate a transcript against a set of degree requirements.
 *
 * ## How a course gets spent
 *
 * Named rules (`all_of`, `n_of`, `one_of`) ask whether you took something, and
 * several can point at the same course. INST201 is listed under both Benchmark
 * II and the InfoSci core and satisfies both; an audit that let the first rule
 * swallow it reports the core short by a course the student passed with an A.
 *
 * Credit pools are budgets, so a scoped `credits` rule spends what it uses.
 * Otherwise the ten core courses would also pay for the fifteen elective
 * credits, and one statistics course would fill both FSMA and FSAR.
 *
 * Categories that deliberately double-count set `consumes: false`. UMD lets a
 * Diversity or I-Series course also satisfy a Distributive Studies category,
 * and modelling that as sharing is the whole difference between an audit that
 * matches the registrar's and one that does not.
 *
 * In-progress work is never counted as done. It is reported separately so the
 * audit can say "covered if you pass what you are taking".
 */

/** Grades that earn credit without earning quality points. */
const PASSING_MARKS = new Set(['P', 'S']);

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

function hasSelector(selector: Selector): boolean {
  return Boolean(selector.courses || selector.genEd || selector.source);
}

function selects(entry: CourseEntry, selector: Selector): boolean {
  if (selector.courses && !selector.courses.includes(entry.courseId.toUpperCase())) return false;
  if (selector.genEd) {
    const carried = entry.genEd ?? [];
    if (!selector.genEd.some((code) => carried.includes(code))) return false;
  }
  if (selector.source && entry.source !== selector.source) return false;
  return hasSelector(selector);
}

/** Credits a finished course contributed. An F occupies credits but earns none. */
function creditFor(entry: CourseEntry): number {
  return entry.creditsEarned ?? entry.credits;
}

function normalizeSelector(rule: Rule): Selector {
  return {
    ...(rule.courses ? { courses: rule.courses.map((id) => id.toUpperCase()) } : {}),
    ...(rule.genEd ? { genEd: rule.genEd } : {}),
    ...(rule.source ? { source: rule.source } : {}),
  };
}

/**
 * How a rule interacts with its pool.
 *
 * - `ignore` — reads everything, reserves nothing. Categories that double-count.
 * - `mark` — reads everything, but reserves what it used against later rules.
 *   Named requirements do this: several can name the same course, yet a course
 *   spent on the core must not also pay for the electives.
 * - `spend` — reads only what is left, and reserves what it takes.
 */
type PoolMode = 'ignore' | 'mark' | 'spend';

function poolMode(rule: Rule, selector: Selector): PoolMode {
  if (rule.type === 'gpa') return 'ignore';
  if (rule.consumes === false) return 'ignore';
  if (rule.consumes === true) return 'spend';
  if (rule.type === 'credits') return hasSelector(selector) ? 'spend' : 'ignore';
  return 'mark';
}

export function evaluate(transcript: Transcript, requirements: Requirements): AuditResult {
  const minPoints = minPointsFor(requirements);
  const allCompleted = [
    ...transcript.terms.flatMap((term) => term.courses),
    ...transcript.nonGpaCredits,
  ].filter((entry) => counts(entry, minPoints));
  const allInProgress = [...transcript.inProgress];

  // One budget per pool name, so the major and Gen Ed do not compete.
  const pools = new Map<string, { done: Set<CourseEntry>; pending: Set<CourseEntry> }>();
  const poolFor = (name: string) => {
    let pool = pools.get(name);
    if (!pool) {
      pool = { done: new Set(), pending: new Set() };
      pools.set(name, pool);
    }
    return pool;
  };

  const results: RuleResult[] = requirements.rules.map((rule) => {
    const selector = normalizeSelector(rule);
    const scoped = hasSelector(selector);
    const mode = poolMode(rule, selector);
    const pool = poolFor(rule.pool ?? 'default');
    const spent = pool.done;
    const spentPending = pool.pending;

    // Only a spending rule is limited to leftovers.
    const availableDone = mode === 'spend' ? allCompleted.filter((e) => !spent.has(e)) : allCompleted;
    const availablePending =
      mode === 'spend' ? allInProgress.filter((e) => !spentPending.has(e)) : allInProgress;

    const completed = scoped ? availableDone.filter((e) => selects(e, selector)) : availableDone;
    const inProgress = scoped
      ? availablePending.filter((e) => selects(e, selector))
      : availablePending;

    if (rule.type === 'gpa') {
      const graded = completed.filter((e) => e.countsTowardGpa && e.gradePoints !== null);
      const credits = graded.reduce((sum, e) => sum + e.credits, 0);
      const points = graded.reduce((sum, e) => sum + e.credits * e.gradePoints!, 0);
      const gpa = credits > 0 ? points / credits : 0;
      return {
        rule,
        label: rule.label,
        satisfied: credits > 0 && gpa >= rule.minimum - 1e-9,
        completed: graded,
        inProgress: [],
        missing: [],
        needed: rule.minimum,
        have: Number(gpa.toFixed(3)),
        pending: 0,
        unit: 'gpa',
      };
    }

    if (rule.type === 'credits') {
      const have = completed.reduce((sum, e) => sum + creditFor(e), 0);
      const pending = inProgress.reduce((sum, e) => sum + e.credits, 0);
      if (mode !== 'ignore') {
        spendUpTo(completed, rule.credits, spent, creditFor);
        inProgress.forEach((e) => spentPending.add(e));
      }
      return {
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
      };
    }

    const needed = rule.type === 'all_of' ? rule.courses.length : rule.type === 'one_of' ? 1 : rule.n;
    if (mode !== 'ignore') {
      spendUpTo(completed, needed, spent, () => 1);
      inProgress.slice(0, Math.max(0, needed - completed.length)).forEach((e) => spentPending.add(e));
    }

    const satisfied = completed.length >= needed;
    let missing: string[] = [];
    if (!satisfied && rule.courses) {
      const covered = new Set(
        [...completed, ...inProgress].map((entry) => entry.courseId.toUpperCase()),
      );
      missing = rule.courses.map((id) => id.toUpperCase()).filter((id) => !covered.has(id));
    }

    return {
      rule,
      label: rule.label,
      satisfied,
      completed,
      inProgress,
      missing,
      needed,
      have: completed.length,
      pending: inProgress.length,
      unit: 'courses',
    };
  });

  const remainingCourses: string[] = [];
  const remainingCredits: Array<{ label: string; credits: number }> = [];
  for (const result of results) {
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
    results,
    satisfied: results.every((result) => result.satisfied),
    satisfiedIfInProgressPass: results.every(
      (result) => result.satisfied || result.have + result.pending >= result.needed,
    ),
    remainingCourses,
    remainingCredits,
  };
}

/**
 * Mark courses as spent until the rule's need is met.
 *
 * Only what the rule actually needs is spent: a student holding three options
 * for a two-of rule keeps the third for their electives.
 */
function spendUpTo(
  entries: readonly CourseEntry[],
  needed: number,
  spent: Set<CourseEntry>,
  weigh: (entry: CourseEntry) => number,
): void {
  let running = 0;
  for (const entry of entries) {
    if (running >= needed) break;
    spent.add(entry);
    running += weigh(entry);
  }
}
