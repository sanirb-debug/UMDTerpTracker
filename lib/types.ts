/**
 * Shared data model for TerpTracker.
 *
 * Everything here is plain data. No React, no DOM, no I/O — see CLAUDE.md.
 */

/** Every grade symbol that can appear on a UMD transcript. */
export type Grade =
  | 'A+'
  | 'A'
  | 'A-'
  | 'B+'
  | 'B'
  | 'B-'
  | 'C+'
  | 'C'
  | 'C-'
  | 'D+'
  | 'D'
  | 'D-'
  | 'F'
  | 'XF'
  | 'P'
  | 'S'
  | 'U'
  | 'W'
  | 'I'
  | 'AU'
  // Transfer work that was accepted but carried no credit.
  | 'NC'
  | 'NG';

/** The subset of grades that carry quality points and move the GPA. */
export type LetterGrade = Extract<
  Grade,
  'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'D-' | 'F' | 'XF'
>;

export type Season = 'Winter' | 'Spring' | 'Summer' | 'Fall';

/** How a course got onto the transcript. */
export type CreditSource = 'institution' | 'transfer' | 'exam';

export interface CourseEntry {
  /** Normalized course id, e.g. `CMSC351`. Empty for transfer blocks with no UMD equivalent. */
  courseId: string;
  title: string;
  /** Credits attempted. This is the figure the GPA is weighted by. */
  credits: number;
  /**
   * Credits earned, when the transcript prints it as its own column. Left
   * undefined otherwise and derived from the grade — an F earns nothing.
   */
  creditsEarned?: number;
  grade: Grade;
  /** Quality points per credit for this grade, or `null` when the grade is not GPA-bearing. */
  gradePoints: number | null;
  /**
   * True when this row contributes to the UMD cumulative GPA. False for
   * `P S W I AU NG` and for every transfer/exam credit.
   */
  countsTowardGpa: boolean;
  source: CreditSource;
  /**
   * Which term this sits in, matching `Term.id`. Only set for courses you are
   * registered for — graded work already lives inside its `Term`.
   */
  termId?: string;
  /** Set when the transcript marks the attempt as excluded by the repeat policy. */
  repeatExcluded?: boolean;
}

export interface Term {
  /** Stable key, e.g. `2024-Fall`. */
  id: string;
  season: Season;
  /** `I` or `II` for the two summer sessions, which are separate terms. */
  session?: string;
  year: number;
  /** `Freshman`, `Sophomore`, ... when the transcript prints it. */
  academicLevel?: string;
  courses: CourseEntry[];
  /** GPA the transcript prints for this term, if any. Used for the self-check. */
  statedTermGpa: number | null;
  statedTermCredits: number | null;
}

export interface ParseWarning {
  code:
    | 'no_text_layer'
    | 'gpa_mismatch'
    | 'unparsed_line'
    | 'no_terms_found'
    | 'missing_stated_gpa'
    | 'unknown_grade';
  message: string;
  /** Page number the warning came from, when it is line-specific. */
  page?: number;
  detail?: string;
}

export interface Transcript {
  /**
   * Non-identifying header fields only. The parser deliberately never reads
   * the student's name, email or UID — nothing needs them, and not storing
   * them means there is nothing sensitive in localStorage beyond coursework.
   */
  major?: string;
  terms: Term[];
  /** Transfer and exam credit, which carries credits but no quality points. */
  nonGpaCredits: CourseEntry[];
  /** Courses with no grade yet. These seed the planner. */
  inProgress: CourseEntry[];
  statedCumulativeGpa: number | null;
  statedCumulativeCredits: number | null;
  warnings: ParseWarning[];
}

/** Result of `computeGpa` over any set of course entries. */
export interface GpaTotals {
  /** Credits attempted under a letter grade. */
  gpaCredits: number;
  /** Sum of credits x grade points. */
  qualityPoints: number;
  /** Credits earned, including P/S and transfer. */
  earnedCredits: number;
  gpa: number | null;
}

/** A course the student has not taken yet, used by the planner. */
export interface PlannedCourse {
  courseId: string;
  credits: number;
}

/** Aggregated PlanetTerp grade distribution for one course. */
export interface GradeDistribution {
  courseId: string;
  /** Raw student counts keyed by grade symbol. */
  counts: Partial<Record<Grade, number>>;
  /** Total students across all counted grades, including W/Other. */
  total: number;
  /** Number of sections the distribution was aggregated from. */
  sections: number;
}
