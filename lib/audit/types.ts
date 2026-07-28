import type { CourseEntry, CreditSource, Grade } from '../types.ts';

/**
 * How a rule picks the courses it cares about.
 *
 * A real audit selects courses three ways: by name (`INST311`), by the Gen Ed
 * category UMD credited them with (`DSHU`), and by where the credit came from
 * (residency rules count only work done at UMD). All three live here so the
 * rule types stay at five rather than multiplying per selector.
 */
export interface Selector {
  /** Explicit course ids. */
  courses?: string[];
  /** Gen Ed codes; a course matches if it carries any of them. */
  genEd?: string[];
  /** Where the credit came from. */
  source?: CreditSource;
  /** Subject prefixes, e.g. `['BMGT']` for "business and management subjects". */
  prefixes?: string[];
  /** Subject prefixes to exclude, e.g. CMSC for "outside of CMSC". */
  excludePrefixes?: string[];
  /** Lowest course number that counts, e.g. 300 for "300- or 400-level". */
  minLevel?: number;
  /**
   * Every counted course must share one subject prefix, though which one is the
   * student's choice. Computer Science asks for "12 credits of 300-400 level
   * courses from one discipline outside of CMSC" — a list of eligible courses
   * cannot say that they all have to come from the same department.
   */
  sameDiscipline?: boolean;
}

interface Shared extends Selector {
  label: string;
  /**
   * Whether courses this rule uses are spent and unavailable to later rules.
   *
   * Defaults are what a UMD audit actually does, so most rules set nothing:
   * named rules share (INST201 satisfies both Benchmark II and the core), a
   * `credits` rule with a selector spends (the core cannot also pay for the
   * electives), and an unscoped `credits` rule measures everything and spends
   * nothing. Override it where a category deliberately double-counts —
   * Diversity and I-Series both do.
   */
  consumes?: boolean;
  /**
   * Which budget this rule draws on. Rules in the same pool compete for a
   * course; rules in different pools do not see each other.
   *
   * UMD lets a major course also satisfy a Gen Ed category, so those are two
   * separate budgets. With one global pool, INST201 counting toward the core
   * would stop it counting for DSHS, and the audit would report Gen Ed
   * categories unmet that the registrar shows complete.
   */
  pool?: string;
}

export type Rule =
  /** Every listed course. */
  | ({ type: 'all_of'; courses: string[] } & Shared)
  /** Any `n` matching courses. */
  | ({ type: 'n_of'; n: number } & Shared)
  /** Exactly one matching course. */
  | ({ type: 'one_of' } & Shared)
  /** A credit total over the matching courses. */
  | ({ type: 'credits'; credits: number } & Shared)
  /**
   * `n` courses drawn from named groups, spanning at least `minGroups` of them,
   * with each group contributing at most its own `max`.
   *
   * Degree requirements say this constantly and none of the other types can.
   * Computer Science: "Select five 400 level courses from at least three of the
   * following areas with no more than three courses in a given area". Finance
   * caps its special-topics list at one course; Information Systems asks for
   * "two courses from list A, or one course from A and one course from B",
   * which is the same shape with list B capped at one.
   */
  | ({
      type: 'distribute';
      n: number;
      minGroups?: number;
      groups: Array<{ label: string; courses: string[]; max?: number }>;
    } & Shared)
  /**
   * A grade point average. With no selector it is the cumulative GPA;
   * with one it is computed over just those courses, which is how a major GPA
   * differs from an overall one.
   */
  | ({ type: 'gpa'; minimum: number } & Shared);

export interface Requirements {
  id: string;
  major: string;
  degree: string;
  catalogYear: number;
  /** Catalog URL the rules were transcribed from. */
  source: string;
  /** A second source the transcription was checked against, when there is one. */
  crossChecked?: string;
  /** When a human last confirmed these rules against the source. */
  lastVerified: string;
  /** Lowest grade that counts toward the major, e.g. `C-`. */
  minGrade?: Grade;
  /** Optional grouping for display, e.g. `Gen Ed`. */
  sections?: Array<{ label: string; rules: number[] }>;
  rules: Rule[];
}

export interface RuleResult {
  rule: Rule;
  label: string;
  satisfied: boolean;
  /** Satisfied by a finished course with a good enough grade. */
  completed: CourseEntry[];
  /** Would satisfy it, but you are still taking it. */
  inProgress: CourseEntry[];
  /** Course ids still outstanding. Empty for open-ended rules. */
  missing: string[];
  /** Units the rule asks for. */
  needed: number;
  have: number;
  pending: number;
  unit: 'courses' | 'credits' | 'gpa';
  /** How many groups a `distribute` rule drew on, and how many it needed. */
  groupsUsed?: number;
  groupsNeeded?: number;
}

export interface AuditResult {
  requirements: Requirements;
  results: RuleResult[];
  satisfied: boolean;
  /** True once everything outstanding is already on your schedule. */
  satisfiedIfInProgressPass: boolean;
  /** Named courses you still have to take, across every rule. */
  remainingCourses: string[];
  /** Shortfalls where the rule names no specific course. */
  remainingCredits: Array<{ label: string; credits: number }>;
}
