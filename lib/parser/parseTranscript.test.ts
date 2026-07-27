import { describe, expect, it } from 'vitest';
import { allLines } from './lines.ts';
import { parseTranscriptLines } from './parseTranscript.ts';
import { withSelfCheck } from './selfCheck.ts';
import { pagesFromText } from '../../fixtures/support/layout.ts';

function parse(layout: string) {
  return parseTranscriptLines(allLines(pagesFromText(layout)));
}

const ONE_TERM = [
  'INSTITUTION CREDIT',
  '',
  'Fall 2023           Freshman',
  'CMSC131    Object-Oriented Programming I               4.000     4.000     A     16.000',
  'MATH141    Calculus II                                 4.000     4.000     B     12.000',
  '    Term GPA:  3.500                    Term Credits Earned:  8.000',
  '    Cumulative GPA:  3.500              Cumulative Credits Earned:  8.000',
].join('\n');

describe('parseTranscriptLines', () => {
  it('groups courses under the term heading above them', () => {
    const transcript = parse(ONE_TERM);
    expect(transcript.terms).toHaveLength(1);
    expect(transcript.terms[0]).toMatchObject({
      id: '2023-Fall',
      season: 'Fall',
      year: 2023,
      academicLevel: 'Freshman',
      statedTermGpa: 3.5,
      statedTermCredits: 8,
    });
    expect(transcript.terms[0]!.courses.map((course) => course.courseId)).toEqual([
      'CMSC131',
      'MATH141',
    ]);
  });

  it('takes the last cumulative GPA on the page, not the first', () => {
    const transcript = parse(
      [
        ONE_TERM,
        '',
        'Spring 2024         Freshman',
        'CMSC132    Object-Oriented Programming II              4.000     4.000     B     12.000',
        '    Cumulative GPA:  3.333              Cumulative Credits Earned:  12.000',
      ].join('\n'),
    );
    expect(transcript.statedCumulativeGpa).toBe(3.333);
    expect(transcript.statedCumulativeCredits).toBe(12);
  });

  it('keeps transfer credit out of the terms', () => {
    const transcript = parse(
      [
        'TRANSFER CREDIT ACCEPTED BY THE INSTITUTION',
        'MATH140    Calculus I                                  4.000     4.000     A',
        '',
        ONE_TERM,
      ].join('\n'),
    );
    expect(transcript.nonGpaCredits.map((course) => course.courseId)).toEqual(['MATH140']);
    expect(transcript.nonGpaCredits[0]!.countsTowardGpa).toBe(false);
    expect(transcript.terms.flatMap((term) => term.courses)).toHaveLength(2);
  });

  it('reads a term header written year-first', () => {
    const transcript = parse(
      ['INSTITUTION CREDIT', '2023 Fall           Freshman', 'CMSC131    Intro    4.000     4.000     A     16.000'].join('\n'),
    );
    expect(transcript.terms[0]?.id).toBe('2023-Fall');
  });

  it('warns when no semesters are found', () => {
    const transcript = parse('UNIVERSITY OF MARYLAND, COLLEGE PARK\nUNOFFICIAL TRANSCRIPT');
    expect(transcript.warnings.map((warning) => warning.code)).toContain('no_terms_found');
  });

  it('warns when the transcript prints no cumulative GPA to check against', () => {
    const transcript = parse(
      ['INSTITUTION CREDIT', 'Fall 2023', 'CMSC131    Intro    4.000     4.000     A     16.000'].join('\n'),
    );
    expect(transcript.warnings.map((warning) => warning.code)).toContain('missing_stated_gpa');
  });
});

describe('withSelfCheck', () => {
  it('stays quiet when the computed GPA matches the printed one', () => {
    expect(withSelfCheck(parse(ONE_TERM)).warnings).toEqual([]);
  });

  it('raises a mismatch when the parse disagrees with the printed GPA', () => {
    // Same courses, but the transcript claims a 4.0.
    const wrong = parse(ONE_TERM.replace('Cumulative GPA:  3.500', 'Cumulative GPA:  4.000'));
    const codes = withSelfCheck(wrong).warnings.map((warning) => warning.code);
    expect(codes).toContain('gpa_mismatch');
  });

  it('raises a mismatch when the credit totals disagree', () => {
    const wrong = parse(ONE_TERM.replace('Cumulative Credits Earned:  8.000', 'Cumulative Credits Earned:  11.000'));
    const warning = withSelfCheck(wrong).warnings.find((w) => w.detail === 'credit total mismatch');
    expect(warning?.message).toMatch(/8 earned credits/);
  });
});
