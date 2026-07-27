import type { Cell, Line } from './lines.ts';
import type { CourseEntry, CreditSource, Grade } from '../types.ts';
import { gradePoints, isGpaBearing, parseGrade } from '../grades.ts';

const SUBJECT_AND_NUMBER = /^([A-Z]{4})[-\s]?(\d{3}[A-Z]?)$/;
const SUBJECT_ONLY = /^[A-Z]{4}$/;
const NUMBER_ONLY = /^\d{3}[A-Z]?$/;
const NUMERIC = /^\d{1,3}(?:,\d{3})*(?:\.\d+)?$/;

/** Course ids that are really section headers, not courses. */
const NOT_A_COURSE = /^(TERM|CUMU|TOTA|PAGE)/;

export interface CourseLineResult {
  entry: CourseEntry | null;
  /** Set when the line looked like a course row but could not be read. */
  problem?: string;
}

function normalizeId(text: string): string {
  return text.replace(/\s+/g, '').toUpperCase();
}

/**
 * Locate the course id. It is normally one cell (`CMSC351`), but some layouts
 * split the subject and the number into adjacent columns.
 *
 * Returns the id plus the index of the last cell it consumed.
 */
function findCourseId(cells: Cell[]): { courseId: string; endIndex: number } | null {
  // Allow one leading column (level, term code) before the course id.
  const limit = Math.min(cells.length, 2);
  for (let i = 0; i < limit; i += 1) {
    const text = normalizeId(cells[i]!.text);
    const combined = SUBJECT_AND_NUMBER.exec(text);
    if (combined && !NOT_A_COURSE.test(combined[1]!)) {
      return { courseId: `${combined[1]}${combined[2]}`, endIndex: i };
    }
    const next = cells[i + 1];
    if (SUBJECT_ONLY.test(text) && !NOT_A_COURSE.test(text) && next && NUMBER_ONLY.test(normalizeId(next.text))) {
      return { courseId: `${text}${normalizeId(next.text)}`, endIndex: i + 1 };
    }
  }
  return null;
}

/**
 * Find the grade column.
 *
 * Scanning from the right matters: `Programming I` and `Statistics A` end in
 * tokens that look like grades. They survive as part of the title cell rather
 * than as standalone cells, because `groupIntoLines` glues title words
 * together — so a lone grade-shaped cell that sits past the title really is
 * the grade column.
 */
function findGrade(cells: Cell[], idEndIndex: number): { grade: Grade; index: number } | null {
  for (let i = cells.length - 1; i > idEndIndex + 1; i -= 1) {
    const text = cells[i]!.text;
    if (NUMERIC.test(text)) continue;
    const grade = parseGrade(text);
    if (grade) return { grade, index: i };
  }
  return null;
}

function toNumber(text: string): number {
  return Number(text.replace(/,/g, ''));
}

/**
 * Read one course row.
 *
 * Column order varies between transcript layouts, so nothing here is
 * index-based beyond the course id: the grade is found by shape and the
 * credits are found relative to the grade. The credits *attempted* column is
 * the first numeric on the row — taking the last one would read `0.000` earned
 * for every failed course and quietly deflate the GPA denominator.
 */
export function parseCourseLine(line: Line, source: CreditSource): CourseLineResult {
  const { cells } = line;
  if (cells.length < 3) return { entry: null };

  const id = findCourseId(cells);
  if (!id) return { entry: null };

  const found = findGrade(cells, id.endIndex);
  const gradeIndex = found ? found.index : cells.length;

  const numericsBefore: number[] = [];
  let titleEnd = gradeIndex;
  for (let i = id.endIndex + 1; i < gradeIndex; i += 1) {
    const text = cells[i]!.text;
    if (NUMERIC.test(text)) {
      if (numericsBefore.length === 0) titleEnd = i;
      numericsBefore.push(toNumber(text));
    }
  }

  const numericsAfter: number[] = [];
  for (let i = gradeIndex + 1; i < cells.length; i += 1) {
    const text = cells[i]!.text;
    if (NUMERIC.test(text)) numericsAfter.push(toNumber(text));
  }

  const attempted = numericsBefore[0] ?? numericsAfter[0];
  if (attempted === undefined) {
    return { entry: null, problem: `no credit hours on "${line.text}"` };
  }
  if (attempted > 24) {
    // A single course is never worth this much; the row is a totals line that
    // happens to lead with something course-shaped.
    return { entry: null, problem: `implausible credits (${attempted}) on "${line.text}"` };
  }

  const explicitEarned = numericsBefore.length >= 2 ? numericsBefore[1] : undefined;
  const title = cells
    .slice(id.endIndex + 1, titleEnd)
    .map((cell) => cell.text)
    .join(' ')
    .trim();

  if (!found) {
    // No grade column: either a course still in progress, or a transfer block,
    // which prints credits earned but never a grade.
    const entry: CourseEntry = {
      courseId: id.courseId,
      title,
      credits: attempted,
      grade: 'NG',
      gradePoints: null,
      countsTowardGpa: false,
      source,
    };
    if (explicitEarned !== undefined) entry.creditsEarned = explicitEarned;
    return { entry };
  }

  // Testudo prints a repeat column after the grade: `E` excluded, `I` included.
  // Only the exclusion matters, and only as a single-letter cell of its own.
  const repeatExcluded = cells
    .slice(found.index + 1)
    .some((cell) => cell.text === 'E' || /^\(?REPEAT.*EXCL/i.test(cell.text));

  const grade = found.grade;
  const countsTowardGpa = source === 'institution' && isGpaBearing(grade) && !repeatExcluded;

  const entry: CourseEntry = {
    courseId: id.courseId,
    title,
    credits: attempted,
    grade,
    gradePoints: gradePoints(grade),
    countsTowardGpa,
    source,
  };
  if (explicitEarned !== undefined) entry.creditsEarned = explicitEarned;
  if (repeatExcluded) entry.repeatExcluded = true;

  return { entry };
}
