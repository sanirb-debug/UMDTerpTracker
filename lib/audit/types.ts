import type { CourseEntry, Grade } from '../types.ts';

/**
 * The four rule types, and only these four. A real requirement that does not
 * fit one of them is a reason to talk about the schema, not to add a fifth —
 * every rule type is a permanent branch in the evaluator.
 */
export type Rule =
  /** Every listed course. */
  | { type: 'all_of'; label: string; courses: string[] }
  /** Any `n` of the listed courses. */
  | { type: 'n_of'; label: string; n: number; courses: string[] }
  /** Exactly one of the listed courses. */
  | { type: 'one_of'; label: string; courses: string[] }
  /**
   * A credit total. `from` scopes it to a pool of courses; without it the rule
   * counts every credit on the transcript.
   *
   * The scoping is the one addition to the schema as SPEC.md originally wrote
   * it, and it is load-bearing: "15 credits of upper-level INST" cannot be an
   * `n_of` because 8 of the 65 eligible courses are 1-credit seminars, so five
   * of those would satisfy a five-course rule with a third of the credits.
   */
  | { type: 'credits'; label: string; credits: number; from?: string[] };

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
  /** Course ids still outstanding. Empty for open-ended credit rules. */
  missing: string[];
  /** Units the rule asks for — courses for the list rules, credits for `credits`. */
  needed: number;
  have: number;
  pending: number;
  unit: 'courses' | 'credits';
}

export interface AuditResult {
  requirements: Requirements;
  results: RuleResult[];
  satisfied: boolean;
  /** True once everything outstanding is already on your schedule. */
  satisfiedIfInProgressPass: boolean;
  /** Named courses you still have to take, across every rule. */
  remainingCourses: string[];
  /** Credits still to find where the rule names no specific course. */
  remainingCredits: Array<{ label: string; credits: number }>;
}
