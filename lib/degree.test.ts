import { describe, expect, it } from 'vitest';
import { DEGREE_CREDIT_MINIMUM, creditProgress, formatTermId, inProgressByTerm } from './degree.ts';
import type { CourseEntry, Transcript } from './types.ts';

function graded(courseId: string, credits: number): CourseEntry {
  return {
    courseId,
    title: courseId,
    credits,
    creditsEarned: credits,
    grade: 'A',
    gradePoints: 4,
    countsTowardGpa: true,
    source: 'institution',
  };
}

function registered(courseId: string, credits: number, termId?: string): CourseEntry {
  const entry: CourseEntry = {
    courseId,
    title: '',
    credits,
    grade: 'NG',
    gradePoints: null,
    countsTowardGpa: false,
    source: 'institution',
  };
  if (termId) entry.termId = termId;
  return entry;
}

function transcript(partial: Partial<Transcript> = {}): Transcript {
  return {
    terms: [],
    nonGpaCredits: [],
    inProgress: [],
    statedCumulativeGpa: null,
    statedCumulativeCredits: null,
    warnings: [],
    ...partial,
  };
}

describe('creditProgress', () => {
  it('counts earned, in-progress and remaining against the university minimum', () => {
    const result = creditProgress(
      transcript({
        terms: [
          {
            id: '2025-Fall',
            season: 'Fall',
            year: 2025,
            courses: [graded('INST126', 3), graded('INST201', 3)],
            statedTermGpa: null,
            statedTermCredits: null,
          },
        ],
        inProgress: [registered('INST314', 3), registered('INST352', 3)],
      }),
    );
    expect(result).toMatchObject({
      earned: 6,
      inProgress: 6,
      remaining: DEGREE_CREDIT_MINIMUM - 12,
      required: DEGREE_CREDIT_MINIMUM,
    });
  });

  it('counts transfer credit as earned', () => {
    const result = creditProgress(
      transcript({ nonGpaCredits: [{ ...graded('MATH140', 61), countsTowardGpa: false, source: 'transfer' }] }),
    );
    expect(result.earned).toBe(61);
  });

  it('never reports negative credits remaining', () => {
    const result = creditProgress(
      transcript({
        terms: [
          {
            id: '2025-Fall',
            season: 'Fall',
            year: 2025,
            courses: [graded('BIG999', 200)],
            statedTermGpa: null,
            statedTermCredits: null,
          },
        ],
      }),
    );
    expect(result.remaining).toBe(0);
    expect(result.fraction).toBe(1);
  });

  it('accepts a stricter requirement than the university floor', () => {
    expect(creditProgress(transcript(), 128).remaining).toBe(128);
  });
});

describe('inProgressByTerm', () => {
  it('splits registrations across the terms they belong to', () => {
    const groups = inProgressByTerm(
      transcript({
        inProgress: [
          registered('INST352', 3, '2026-Summer II'),
          registered('INST335', 3, '2026-Summer II'),
          registered('INST466', 3, '2026-Fall'),
        ],
      }),
    );
    expect(groups).toHaveLength(2);
    expect(groups[0]).toMatchObject({ termId: '2026-Summer II' });
    expect(groups[0]!.courses).toHaveLength(2);
    expect(groups[1]!.courses.map((c) => c.courseId)).toEqual(['INST466']);
  });

  it('keeps everything together when no term was recorded', () => {
    const groups = inProgressByTerm(
      transcript({ inProgress: [registered('INST352', 3), registered('INST335', 3)] }),
    );
    expect(groups).toHaveLength(1);
    expect(groups[0]!.termId).toBeUndefined();
  });
});

describe('formatTermId', () => {
  it('reads a term id back as a label', () => {
    expect(formatTermId('2026-Summer II')).toBe('Summer II 2026');
    expect(formatTermId('2026-Fall')).toBe('Fall 2026');
  });

  it('has something to say when the term is unknown', () => {
    expect(formatTermId(undefined)).toBe('Upcoming');
  });
});
