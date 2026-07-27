import type { CourseEntry, CreditSource, Grade } from '../types.ts';
import { gradePoints, isGpaBearing, parseGrade } from '../grades.ts';

/**
 * Row readers for the Testudo unofficial transcript.
 *
 * ## Why these work on row text rather than on cells
 *
 * `groupIntoLines` recovers rows from y coordinates, and that part is
 * essential — the flat text stream interleaves the page unusably. Columns are
 * a different story. Testudo renders the transcript as fixed-width text, and
 * measured on a real PDF the gap between the course title and the grade is
 * 5.9pt against a character width of 5.87pt. One space. There is no geometric
 * signal separating those columns, so pdf.js hands the entire row over as a
 * single text run and no gap threshold can split it correctly.
 *
 * The row *text*, however, is identical whether pdf.js split the row into
 * cells or not. So columns are recovered by shape: each reader anchors on the
 * parts of a row that cannot be confused — the course id, the grade token, and
 * the `0.00`-style decimals — and lets the title absorb whatever sits between.
 */

/**
 * Grade tokens, longest first so `A+` is never read as `A` followed by junk,
 * and `XF` is never read as `F`.
 */
const GRADE = 'A\\+|A-|B\\+|B-|C\\+|C-|D\\+|D-|XF|NC|AU|NG|A|B|C|D|F|P|S|U|W|I';

/** Two decimal places, the way Testudo prints every credit and quality-point figure. */
const DECIMAL = '\\d+\\.\\d{2}';

const COURSE_ID = '[A-Z]{4}\\s?\\d{3}[A-Z]?';

/**
 * A graded UMD course:
 *
 *   INST126 INTRO TO PROGAM INFO SCI A 3.00 3.00 12.00
 *   AMST203 POP CULTUR IN AMER A+ 3.00 3.00 12.00 DSHU, DVUP
 *
 * Order is `course, title, grade, attempted, earned, quality points`, which
 * the transcript states outright above the first term. Anything after the
 * quality points is Gen Ed tagging.
 */
const HISTORIC_ROW = new RegExp(
  `^(${COURSE_ID})\\s+(.+?)\\s+(${GRADE})\\s+(${DECIMAL})\\s+(${DECIMAL})(?:\\s+(${DECIMAL}))?(?:\\s+(.*))?$`,
);

/**
 * A transfer or exam credit:
 *
 *   2308 INTRO TO BUSINESS B 3.00 BMGT110
 *   ELEMENTS STATISTICS C 3.00 STAT100 FSAR, FSMA
 *   2101 U.S. HISTORY/SCR 1 NC 0.00 No Credit
 *
 * The leading four-digit term code is only on the first row of each term. The
 * trailing course id is the UMD equivalent, and is absent when the credit came
 * in as an unnamed elective (`L1`) or was refused (`No Credit`).
 */
const TRANSFER_ROW = new RegExp(
  `^(?:(\\d{4})\\s+)?(.+?)\\s+(${GRADE})\\s+(${DECIMAL})(?:\\s+(${COURSE_ID}))?(?:\\s+(.*))?$`,
);

/**
 * A course you are registered for but have no grade in yet:
 *
 *   INST466 0101 3.00 REG A 05/28/26 05/28/26 DVCC
 *   INST352 0202 3.00 REG D 05/20/26 05/26/26 05/26/26
 *
 * The letter after the grading method is the add/drop status. `D` means you
 * dropped it — counting those as planned coursework would be wrong.
 */
const REGISTERED_ROW = new RegExp(
  `^(${COURSE_ID})\\s+([A-Z0-9]{4})\\s+(${DECIMAL})\\s+([A-Z]{2,4})\\s+([AD])\\b`,
);

function normalizeId(courseId: string): string {
  return courseId.replace(/\s+/g, '').toUpperCase();
}

function toNumber(value: string | undefined): number | undefined {
  if (value === undefined) return undefined;
  const parsed = Number(value.replace(/,/g, ''));
  return Number.isFinite(parsed) ? parsed : undefined;
}

/** Read a graded UMD course row. */
export function readHistoricCourse(text: string): CourseEntry | null {
  const match = HISTORIC_ROW.exec(text);
  if (!match) return null;

  const grade = parseGrade(match[3]!);
  const attempted = toNumber(match[4]);
  const earned = toNumber(match[5]);
  if (!grade || attempted === undefined) return null;
  // A single course is never worth this much; the row is a totals line that
  // happens to lead with something course-shaped.
  if (attempted > 24) return null;

  const entry: CourseEntry = {
    courseId: normalizeId(match[1]!),
    title: match[2]!.trim(),
    credits: attempted,
    grade,
    gradePoints: gradePoints(grade),
    countsTowardGpa: isGpaBearing(grade),
    source: 'institution',
  };
  if (earned !== undefined) entry.creditsEarned = earned;
  return entry;
}

/** Read a transfer or exam credit row. */
export function readTransferCourse(text: string, source: CreditSource): CourseEntry | null {
  const match = TRANSFER_ROW.exec(text);
  if (!match) return null;

  const grade = parseGrade(match[3]!);
  const credits = toNumber(match[4]);
  if (!grade || credits === undefined || credits > 24) return null;

  const equivalent = match[5];
  return {
    // Without a UMD equivalent there is no course id to give — the credit is
    // real but generic. The title is what identifies it.
    courseId: equivalent ? normalizeId(equivalent) : '',
    title: match[2]!.trim(),
    credits,
    creditsEarned: credits,
    grade,
    gradePoints: null,
    // Transfer and exam credit never touch the UMD GPA, whatever grade it carries.
    countsTowardGpa: false,
    source,
  };
}

export interface RegisteredCourse {
  entry: CourseEntry;
  /** True when the row records a course you dropped rather than one you are taking. */
  dropped: boolean;
}

/** Read a currently-registered course row. */
export function readRegisteredCourse(text: string): RegisteredCourse | null {
  const match = REGISTERED_ROW.exec(text);
  if (!match) return null;

  const credits = toNumber(match[3]);
  if (credits === undefined || credits > 24) return null;

  return {
    dropped: match[5] === 'D',
    entry: {
      courseId: normalizeId(match[1]!),
      title: '',
      credits,
      grade: 'NG' as Grade,
      gradePoints: null,
      countsTowardGpa: false,
      source: 'institution',
      // The section number is how a schedule finds your actual meeting times —
      // `WB21` and `0101` are different rooms at different hours.
      section: match[2]!.toUpperCase(),
    },
  };
}

/** True when a row leads with something course-shaped, used to spot rows we failed to read. */
export function looksLikeCourse(text: string): boolean {
  return new RegExp(`^${COURSE_ID}\\b`).test(text);
}
