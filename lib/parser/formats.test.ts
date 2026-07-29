import { describe, expect, it } from 'vitest';
import { parseTranscriptText } from './fixedWidth.ts';
import { selfCheck } from './selfCheck.ts';
import { repeatedCourses } from './repeats.ts';
import { cumulativeTotals } from '../planner/gpa.ts';

/**
 * Transcripts that are not the one this parser was written against.
 *
 * The 52 sample fixtures are broad in majors and narrow in format: they all
 * come out of `tools/generate-samples.mjs`, so they cannot discover a layout
 * variation, because they *are* the layout. A parser that only ever meets its
 * own generator's output is untested in the way that matters.
 *
 * Each case below is a structural variation a real student would have and the
 * author does not: transfer credit from a college rather than an AP exam, two
 * feeder institutions, a major changed mid-degree, summer sessions, withdrawals
 * — and a repeated course, which is the one that does not work.
 *
 * Every case asserts against the transcript's own printed totals, so these are
 * checks on correctness, not snapshots of current behaviour.
 */

const HEADER = `                    UNIVERSITY OF MARYLAND
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Student, Sample T
Major: Computer Science
Undergraduate Degree Seeking
`;

const COLUMN_KEY = `
Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points
`;

describe('transfer credit', () => {
  it('reads graded coursework from another college without letting it touch the UMD GPA', () => {
    const transcript = parseTranscriptText(
      HEADER +
        `
Transcripts received from the following institutions:
Montgomery College            on 08/15/24

** Transfer Credit Information **            ** Equivalences **
Montgomery College
2401  ENGLISH COMP/SCR B      B   3.00 ENGL101   FSAW
      CALCULUS I/SCR A        A   4.00 MATH140   FSMA
      GENERAL CHEM/SCR C      C   4.00 CHEM131   DSNL
Acceptable UG Inst. Credits:     11.00
` +
        COLUMN_KEY +
        `
Fall 2024
MAJOR: COMPUTER SCIENCE       COLLEGE: COMPUTER MATH & NATURAL SCIENCES
CMSC131  OBJECT-ORIENT PROGRAM I  A  4.00  4.00 16.00
Semester:     Attempted 4.00; Earned 4.00; QPoints 16.00; GPA 4.000
UG Cumulative:            4.00;   4.00;    16.00;    4.000
UG Cumulative Credit          : 15.00
UG Cumulative GPA             :         4.000
`,
    );

    expect(transcript.nonGpaCredits.map((c) => c.courseId)).toEqual([
      'ENGL101',
      'MATH140',
      'CHEM131',
    ]);
    const totals = cumulativeTotals(transcript);
    // 11 transferred + 4 taken here.
    expect(totals.earnedCredits).toBe(15);
    // A transferred B and C must not drag the UMD GPA off 4.0.
    expect(totals.gpaCredits).toBe(4);
    expect(selfCheck(transcript).ok).toBe(true);
  });

  it('handles two feeder institutions in one block', () => {
    const transcript = parseTranscriptText(
      HEADER +
        `
Transcripts received from the following institutions:
Montgomery College            on 08/15/23
Advanced Placement Exam       on 09/01/22

** Transfer Credit Information **            ** Equivalences **
Montgomery College
2301  ENGLISH COMP/SCR B      B   3.00 ENGL101   FSAW
      CALCULUS I/SCR A        A   4.00 MATH140   FSMA
Advanced Placement Exam
2201  US HISTORY/SCR 4        P   3.00 HIST200   DSHS
Acceptable UG Inst. Credits:     10.00
` +
        COLUMN_KEY +
        `
Fall 2024
MAJOR: COMPUTER SCIENCE       COLLEGE: COMPUTER MATH & NATURAL SCIENCES
CMSC131  OBJECT-ORIENT PROGRAM I  A  4.00  4.00 16.00
Semester:     Attempted 4.00; Earned 4.00; QPoints 16.00; GPA 4.000
UG Cumulative:            4.00;   4.00;    16.00;    4.000
UG Cumulative Credit          : 14.00
UG Cumulative GPA             :         4.000
`,
    );

    // The second institution's heading must not be swallowed as a course row.
    expect(transcript.nonGpaCredits.map((c) => c.courseId)).toEqual([
      'ENGL101',
      'MATH140',
      'HIST200',
    ]);
    expect(cumulativeTotals(transcript).earnedCredits).toBe(14);
    expect(selfCheck(transcript).ok).toBe(true);
  });
});

describe('a degree that did not run in a straight line', () => {
  it('reports the current major when it changed mid-degree, and keeps both terms', () => {
    const transcript = parseTranscriptText(
      `                    UNIVERSITY OF MARYLAND
                    UNOFFICIAL TRANSCRIPT

Student, Sample T
Major: Information Science
Undergraduate Degree Seeking
` +
        COLUMN_KEY +
        `
Fall 2024
MAJOR: LETTERS AND SCIENCES   COLLEGE: UNDERGRADUATE STUDIES
PSYC100  INTRO PSYCHOLOGY         A  3.00  3.00 12.00 DSSP
Semester:     Attempted 3.00; Earned 3.00; QPoints 12.00; GPA 4.000
UG Cumulative:            3.00;   3.00;    12.00;    4.000

Fall 2025
MAJOR: INFORMATION SCIENCE    COLLEGE: INFORMATION STUDIES
INST126  DEVELOPING INFO APPS     B  3.00  3.00 9.00
Semester:     Attempted 3.00; Earned 3.00; QPoints 9.00; GPA 3.000
UG Cumulative:            6.00;   6.00;    21.00;    3.500
UG Cumulative Credit          : 6.00
UG Cumulative GPA             :         3.500
`,
    );

    // The header names the major they are in now, not the one they started in.
    expect(transcript.major).toBe('Information Science');
    expect(transcript.terms).toHaveLength(2);
    // Work done under the old major still counts.
    expect(cumulativeTotals(transcript).earnedCredits).toBe(6);
    expect(selfCheck(transcript).ok).toBe(true);
  });

  it('keeps the two summer sessions as separate terms', () => {
    const transcript = parseTranscriptText(
      HEADER +
        COLUMN_KEY +
        `
Summer I 2025
MAJOR: COMPUTER SCIENCE       COLLEGE: COMPUTER MATH & NATURAL SCIENCES
CMSC131  OBJECT-ORIENT PROGRAM I  A  4.00  4.00 16.00
Semester:     Attempted 4.00; Earned 4.00; QPoints 16.00; GPA 4.000
UG Cumulative:            4.00;   4.00;    16.00;    4.000

Summer II 2025
MAJOR: COMPUTER SCIENCE       COLLEGE: COMPUTER MATH & NATURAL SCIENCES
MATH140  CALCULUS I               B  4.00  4.00 12.00
Semester:     Attempted 4.00; Earned 4.00; QPoints 12.00; GPA 3.000
UG Cumulative:            8.00;   8.00;    28.00;    3.500
UG Cumulative Credit          : 8.00
UG Cumulative GPA             :         3.500
`,
    );

    expect(transcript.terms).toHaveLength(2);
    expect(selfCheck(transcript).ok).toBe(true);
  });

  it('counts a withdrawal and an incomplete as attempted but not earned', () => {
    const transcript = parseTranscriptText(
      HEADER +
        COLUMN_KEY +
        `
Fall 2024
MAJOR: COMPUTER SCIENCE       COLLEGE: COMPUTER MATH & NATURAL SCIENCES
CMSC131  OBJECT-ORIENT PROGRAM I  A  4.00  4.00 16.00
MATH140  CALCULUS I               W  4.00  0.00 0.00
PHYS161  GENERAL PHYSICS          I  3.00  0.00 0.00
Semester:     Attempted 4.00; Earned 4.00; QPoints 16.00; GPA 4.000
UG Cumulative:            4.00;   4.00;    16.00;    4.000
UG Cumulative Credit          : 4.00
UG Cumulative GPA             :         4.000
`,
    );

    const totals = cumulativeTotals(transcript);
    expect(totals.earnedCredits).toBe(4);
    expect(totals.gpaCredits).toBe(4);
    expect(selfCheck(transcript).ok).toBe(true);
  });

  it('leaves registered courses out of earned credits and the GPA', () => {
    const transcript = parseTranscriptText(
      HEADER +
        COLUMN_KEY +
        `
Fall 2024
MAJOR: COMPUTER SCIENCE       COLLEGE: COMPUTER MATH & NATURAL SCIENCES
CMSC131  OBJECT-ORIENT PROGRAM I  A  4.00  4.00 16.00
Semester:     Attempted 4.00; Earned 4.00; QPoints 16.00; GPA 4.000
UG Cumulative:            4.00;   4.00;    16.00;    4.000
UG Cumulative Credit          : 4.00
UG Cumulative GPA             :         4.000

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
CMSC351 0101 3.00  REG A  05/28/25 05/28/25
CMSC330 0201 3.00  REG A  05/28/25 05/28/25          DSSP
`,
    );

    expect(transcript.inProgress).toHaveLength(2);
    const totals = cumulativeTotals(transcript);
    expect(totals.earnedCredits).toBe(4);
    expect(totals.gpaCredits).toBe(4);
    expect(selfCheck(transcript).ok).toBe(true);
  });
});

/**
 * The one that does not work.
 *
 * A repeated course is counted twice, so the GPA and the credit total are both
 * wrong. This is not a snapshot of a bug we intend to keep — it is a record of
 * a known, unfixed limitation, and it asserts the two things that make the
 * limitation survivable: the self-check catches it, and the reader is told why.
 *
 * When repeat handling lands, the first two expectations here flip to the
 * transcript's own 4.000 and 8 credits, and that is exactly the right way for
 * this test to fail.
 */
describe('a repeated course — known to be wrong', () => {
  // CMSC131 taken twice: D, then A. UMD's policy counts only the retake, so the
  // transcript prints 4.000 over 8 credits.
  const repeated = parseTranscriptText(
    HEADER +
      COLUMN_KEY +
      `
Fall 2024
MAJOR: COMPUTER SCIENCE       COLLEGE: COMPUTER MATH & NATURAL SCIENCES
CMSC131  OBJECT-ORIENT PROGRAM I  D  4.00  4.00 4.00
MATH140  CALCULUS I               A  4.00  4.00 16.00
Semester:     Attempted 8.00; Earned 8.00; QPoints 20.00; GPA 2.500
UG Cumulative:            8.00;   8.00;    20.00;    2.500

Spring 2025
MAJOR: COMPUTER SCIENCE       COLLEGE: COMPUTER MATH & NATURAL SCIENCES
CMSC131  OBJECT-ORIENT PROGRAM I  A  4.00  4.00 16.00
Semester:     Attempted 4.00; Earned 4.00; QPoints 16.00; GPA 4.000
UG Cumulative:            8.00;   8.00;    32.00;    4.000
UG Cumulative Credit          : 8.00
UG Cumulative GPA             :         4.000
`,
  );

  it('gets the GPA and the credits wrong, because it counts both attempts', () => {
    const totals = cumulativeTotals(repeated);
    expect(totals.gpa).toBeCloseTo(3.0, 3); // the transcript says 4.000
    expect(totals.earnedCredits).toBe(12); // the transcript says 8
    expect(repeated.statedCumulativeGpa).toBe(4);
    expect(repeated.statedCumulativeCredits).toBe(8);
  });

  it('does not present those numbers as trustworthy', () => {
    // This is what makes the limitation survivable rather than dangerous.
    expect(selfCheck(repeated).ok).toBe(false);
    expect(repeated.warnings.map((w) => w.code)).toContain('gpa_mismatch');
  });

  it('names the course and says the repeat accounts for all of the difference', () => {
    const warning = repeated.warnings.find((w) => w.code === 'repeated_course');
    expect(warning).toBeDefined();
    expect(warning!.message).toContain('CMSC131');
    expect(warning!.message).toContain('repeat policy');
    // Dropping the earlier attempt lands exactly on the printed 4.000, so the
    // message is allowed to be definite rather than hedging.
    expect(warning!.message).toContain('fully explains');
    expect(warning!.message).toContain('Trust your transcript');
  });

  it('finds the repeated course and every attempt', () => {
    const repeats = repeatedCourses(repeated);
    expect(repeats).toHaveLength(1);
    expect(repeats[0]!.courseId).toBe('CMSC131');
    expect(repeats[0]!.attempts.map((a) => a.grade)).toEqual(['D', 'A']);
  });

  it('says nothing about repeats when the numbers reconcile', () => {
    // A course legitimately repeatable for credit is not an error, and must
    // not produce a warning on a transcript that adds up.
    const clean = parseTranscriptText(
      HEADER +
        COLUMN_KEY +
        `
Fall 2024
MAJOR: COMPUTER SCIENCE       COLLEGE: COMPUTER MATH & NATURAL SCIENCES
CMSC131  OBJECT-ORIENT PROGRAM I  A  4.00  4.00 16.00
Semester:     Attempted 4.00; Earned 4.00; QPoints 16.00; GPA 4.000
UG Cumulative:            4.00;   4.00;    16.00;    4.000
UG Cumulative Credit          : 4.00
UG Cumulative GPA             :         4.000
`,
    );
    expect(clean.warnings.map((w) => w.code)).not.toContain('repeated_course');
  });
});
