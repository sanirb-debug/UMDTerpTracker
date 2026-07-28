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
  return Boolean(
    selector.courses ||
      selector.genEd ||
      selector.source ||
      selector.prefixes ||
      selector.excludePrefixes ||
      selector.minLevel !== undefined,
  );
}

/** `INST326` → `INST`. Empty for transfer rows that carry no course id. */
function prefixOf(courseId: string): string {
  return /^([A-Z]{4})/.exec(courseId.toUpperCase())?.[1] ?? '';
}

/** `INST326` → 326. Null when the id is not shaped like a course. */
function levelOf(courseId: string): number | null {
  const digits = /^[A-Z]{4}(\d{3})/.exec(courseId.toUpperCase())?.[1];
  return digits ? Number(digits) : null;
}

function selects(entry: CourseEntry, selector: Selector): boolean {
  if (selector.courses && !selector.courses.includes(entry.courseId.toUpperCase())) return false;
  if (selector.genEd) {
    const carried = entry.genEd ?? [];
    if (!selector.genEd.some((code) => carried.includes(code))) return false;
  }
  if (selector.source && entry.source !== selector.source) return false;
  if (selector.prefixes && !selector.prefixes.includes(prefixOf(entry.courseId))) return false;
  if (selector.excludePrefixes && selector.excludePrefixes.includes(prefixOf(entry.courseId))) {
    return false;
  }
  if (selector.minLevel !== undefined) {
    const level = levelOf(entry.courseId);
    if (level === null || level < selector.minLevel) return false;
  }
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
    ...(rule.prefixes ? { prefixes: rule.prefixes } : {}),
    ...(rule.excludePrefixes ? { excludePrefixes: rule.excludePrefixes } : {}),
    ...(rule.minLevel !== undefined ? { minLevel: rule.minLevel } : {}),
    ...(rule.sameDiscipline ? { sameDiscipline: rule.sameDiscipline } : {}),
  };
}

/**
 * Keep only the largest run of courses sharing one subject prefix.
 *
 * "12 credits from one discipline" is a choice the student makes by what they
 * took, so the audit credits them with the discipline they went furthest in.
 */
function largestDiscipline(entries: readonly CourseEntry[]): CourseEntry[] {
  const byPrefix = new Map<string, CourseEntry[]>();
  for (const entry of entries) {
    const prefix = prefixOf(entry.courseId);
    if (!prefix) continue;
    byPrefix.set(prefix, [...(byPrefix.get(prefix) ?? []), entry]);
  }
  let best: CourseEntry[] = [];
  let bestCredits = -1;
  for (const group of byPrefix.values()) {
    const credits = group.reduce((sum, entry) => sum + creditFor(entry), 0);
    if (credits > bestCredits) {
      best = group;
      bestCredits = credits;
    }
  }
  return best;
}

/**
 * Spread courses across groups, respecting each group's cap.
 *
 * Assigning to the emptiest eligible group matters: a course listed under two
 * areas (CMSC471 is in both Information Processing and Software Engineering)
 * should open a new area rather than pile onto one, because the rule asks for
 * breadth. Greedy is enough at the sizes real requirements use.
 */
function assignToGroups(
  entries: readonly CourseEntry[],
  groups: ReadonlyArray<{ label: string; courses: string[]; max?: number }>,
): { assigned: CourseEntry[]; groupsUsed: number } {
  const upper = groups.map((group) => ({
    ...group,
    ids: group.courses.map((id) => id.toUpperCase()),
    count: 0,
  }));

  const assigned: CourseEntry[] = [];
  for (const entry of entries) {
    const id = entry.courseId.toUpperCase();
    const eligible = upper.filter(
      (group) => group.ids.includes(id) && (group.max === undefined || group.count < group.max),
    );
    if (eligible.length === 0) continue;
    eligible.sort((a, b) => a.count - b.count);
    eligible[0]!.count += 1;
    assigned.push(entry);
  }

  return { assigned, groupsUsed: upper.filter((group) => group.count > 0).length };
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
  if (rule.type === 'distribute') return 'spend';
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

    if (rule.type === 'distribute') {
      // Groups do the selecting here, so an outer selector is not required.
      const pickable = scoped ? completed : availableDone;
      const pendingPickable = scoped ? inProgress : availablePending;
      const done = assignToGroups(pickable, rule.groups);
      const pending = assignToGroups(pendingPickable, rule.groups);

      const minGroups = rule.minGroups ?? 1;
      const satisfied = done.assigned.length >= rule.n && done.groupsUsed >= minGroups;
      if (mode !== 'ignore') {
        done.assigned.forEach((entry) => spent.add(entry));
        pending.assigned.forEach((entry) => spentPending.add(entry));
      }

      return {
        rule,
        label: rule.label,
        satisfied,
        completed: done.assigned,
        inProgress: pending.assigned,
        missing: [],
        needed: rule.n,
        have: done.assigned.length,
        pending: pending.assigned.length,
        unit: 'courses',
        groupsUsed: done.groupsUsed,
        groupsNeeded: minGroups,
      };
    }

    if (rule.type === 'credits') {
      // "From one discipline" is a constraint across the whole selection, not
      // on any single course, so it is applied after matching.
      if (rule.sameDiscipline) {
        const kept = new Set(largestDiscipline(completed));
        for (let i = completed.length - 1; i >= 0; i -= 1) {
          if (!kept.has(completed[i]!)) completed.splice(i, 1);
        }
      }
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
