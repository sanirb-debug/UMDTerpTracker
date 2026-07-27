import { describe, expect, it } from 'vitest';
import { allLines } from './lines.ts';
import { parseTranscriptLines } from './parseTranscript.ts';
import { withSelfCheck } from './selfCheck.ts';
import { pagesFromText } from '../../fixtures/support/layout.ts';

function parse(layout: string) {
  return parseTranscriptLines(allLines(pagesFromText(layout)));
}

const HEADER = [
  'Student, Sample T',
  'E-Mail: sample@terpmail.umd.edu',
  'Major: Computer Science',
].join('\n');

const ONE_TERM = [
  HEADER,
  'Historic Course Information is listed in the order:',
  'Course, Title, Grade, Credits Attempted, Earned and Quality Points',
  'Fall 2024',
  'CMSC131  OBJECT-ORIENT PROGRAM I     A   4.00  4.00  16.00',
  'MATH141  CALCULUS II                 B   4.00  4.00  12.00',
  'Semester: Attempted 8.00; Earned 8.00; QPoints 28.00; GPA 3.500',
  'UG Cumulative: 8.00; 8.00; 28.00; 3.500',
].join('\n');

describe('parseTranscriptLines', () => {
  it('groups courses under the term heading above them', () => {
    const transcript = parse(ONE_TERM);
    expect(transcript.terms).toHaveLength(1);
    expect(transcript.terms[0]).toMatchObject({
      id: '2024-Fall',
      season: 'Fall',
      year: 2024,
      statedTermGpa: 3.5,
      statedTermCredits: 8,
    });
    expect(transcript.terms[0]!.courses.map((c) => c.courseId)).toEqual(['CMSC131', 'MATH141']);
  });

  it('reads the major but never the name or email', () => {
    const transcript = parse(ONE_TERM);
    expect(transcript.major).toBe('Computer Science');
    const serialized = JSON.stringify(transcript);
    expect(serialized).not.toMatch(/Sample/);
    expect(serialized).not.toMatch(/terpmail/);
  });

  it('keeps the two summer sessions apart', () => {
    const transcript = parse(
      [
        'Historic Course Information is listed in the order:',
        'Summer I 2026',
        'AMST203  POP CULTURE IN AMER         A   3.00  3.00  12.00',
        'Summer II 2026',
        'INST366  PRIV SEC ETHICS BIG DATA    A   3.00  3.00  12.00',
      ].join('\n'),
    );
    expect(transcript.terms.map((term) => term.id)).toEqual(['2026-Summer I', '2026-Summer II']);
  });

  it('prefers the final cumulative totals over the running ones', () => {
    // The running rows are institution-only; the final lines add transfer.
    const transcript = parse(
      [ONE_TERM, 'UG Cumulative Credit    : 38.00', 'UG Cumulative GPA       : 3.500'].join('\n'),
    );
    expect(transcript.statedCumulativeCredits).toBe(38);
    expect(transcript.statedCumulativeGpa).toBe(3.5);
  });

  it('keeps transfer credit out of the terms', () => {
    const transcript = parse(
      [
        '** Transfer Credit Information **            ** Equivalences **',
        'Advanced Placement Exam',
        '2401  CALCULUS AB/SCR 4       P   4.00 MATH140   FSMA',
        ONE_TERM,
      ].join('\n'),
    );
    expect(transcript.nonGpaCredits).toHaveLength(1);
    expect(transcript.nonGpaCredits[0]).toMatchObject({ courseId: 'MATH140', source: 'exam' });
    expect(transcript.terms.flatMap((term) => term.courses)).toHaveLength(2);
  });

  it('takes registered courses but not dropped ones', () => {
    const transcript = parse(
      [
        ONE_TERM,
        '** Current Course Information **',
        'Fall 2025 Course    Sec Credits Grd/ Drop',
        '======== ==== ======= ==== ==== ========',
        'CMSC351  0101  3.00 REG A  05/28/25  05/28/25',
        'CMSC216  0301  4.00 REG D  05/20/25  05/26/25',
      ].join('\n'),
    );
    expect(transcript.inProgress.map((c) => c.courseId)).toEqual(['CMSC351']);
    // The dropped course must not turn into a term either.
    expect(transcript.terms).toHaveLength(1);
  });

  it('warns when no semesters are found', () => {
    expect(parse('UNIVERSITY OF MARYLAND\nUNOFFICIAL TRANSCRIPT').warnings.map((w) => w.code)).toContain(
      'no_terms_found',
    );
  });

  it('warns when there is no printed GPA to check against', () => {
    const transcript = parse(
      [
        'Historic Course Information is listed in the order:',
        'Fall 2024',
        'CMSC131  OBJECT-ORIENT PROGRAM I     A   4.00  4.00  16.00',
      ].join('\n'),
    );
    expect(transcript.warnings.map((w) => w.code)).toContain('missing_stated_gpa');
  });
});

describe('withSelfCheck', () => {
  it('stays quiet when the computed GPA matches the printed one', () => {
    expect(withSelfCheck(parse(ONE_TERM)).warnings).toEqual([]);
  });

  it('raises a mismatch when the parse disagrees with the printed GPA', () => {
    // Same two courses, but the transcript claims a 4.0 cumulative.
    const wrong = parse(
      ONE_TERM.replace('UG Cumulative: 8.00; 8.00; 28.00; 3.500', 'UG Cumulative: 8.00; 8.00; 32.00; 4.000'),
    );
    expect(withSelfCheck(wrong).warnings.map((w) => w.code)).toContain('gpa_mismatch');
  });

  it('raises a mismatch when the credit totals disagree', () => {
    const wrong = parse(`${ONE_TERM}\nUG Cumulative Credit    : 11.00`);
    const warning = withSelfCheck(wrong).warnings.find((w) => w.detail === 'credit total mismatch');
    expect(warning?.message).toMatch(/8 earned credits/);
  });
});
