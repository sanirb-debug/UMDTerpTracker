import type { Grade, LetterGrade } from './types.ts';

/**
 * UMD quality points per credit.
 * Source: UMD Undergraduate Catalog, "Grades and Marks".
 * A+ and A are both 4.0 — A+ is recognition, not extra weight.
 */
const QUALITY_POINTS: Record<LetterGrade, number> = {
  'A+': 4.0,
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  'D+': 1.3,
  D: 1.0,
  'D-': 0.7,
  F: 0.0,
  // Failure for academic dishonesty. Carries the same 0.0 as an F.
  XF: 0.0,
};

/** Marks that appear on the transcript but never touch the GPA. */
const NON_GPA_MARKS = ['P', 'S', 'W', 'I', 'AU', 'NG'] as const;

const ALL_GRADES: Grade[] = [
  ...(Object.keys(QUALITY_POINTS) as LetterGrade[]),
  ...NON_GPA_MARKS,
];

/**
 * Letter grades a student can realistically plan for, best first.
 * F is omitted — nobody plans an F, and including it makes the solver
 * enumerate combinations that are never useful advice.
 */
export const PLANNABLE_GRADES: LetterGrade[] = [
  'A+',
  'A',
  'A-',
  'B+',
  'B',
  'B-',
  'C+',
  'C',
  'C-',
  'D+',
  'D',
  'D-',
];

export function isGrade(value: string): value is Grade {
  return (ALL_GRADES as string[]).includes(value);
}

export function isLetterGrade(grade: Grade): grade is LetterGrade {
  return grade in QUALITY_POINTS;
}

/** Quality points per credit, or `null` for marks that are excluded from the GPA. */
export function gradePoints(grade: Grade): number | null {
  return isLetterGrade(grade) ? QUALITY_POINTS[grade] : null;
}

/**
 * Whether a grade moves the GPA. Note this is only half the question — transfer
 * and exam credit carry letter grades on some transcripts but still never count.
 * See `CourseEntry.countsTowardGpa`.
 */
export function isGpaBearing(grade: Grade): boolean {
  return isLetterGrade(grade);
}

/**
 * Parse a grade token off a transcript line. Handles the lowercase and
 * whitespace-padded forms that show up in extracted PDF text.
 */
export function parseGrade(token: string): Grade | null {
  const normalized = token.trim().toUpperCase().replace(/\s+/g, '');
  if (!normalized) return null;
  return isGrade(normalized) ? normalized : null;
}

/** Rank a letter grade, 0 = A+. Used to step grades up and down in the solver. */
export function gradeRank(grade: LetterGrade): number {
  const index = PLANNABLE_GRADES.indexOf(grade);
  // F / XF sit below every plannable grade.
  return index === -1 ? PLANNABLE_GRADES.length : index;
}

/** All letter grades at least as good as `grade`, best first. */
export function gradesAtLeast(grade: LetterGrade): LetterGrade[] {
  return PLANNABLE_GRADES.slice(0, gradeRank(grade) + 1);
}
