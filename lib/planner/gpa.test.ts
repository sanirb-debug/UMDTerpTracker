import { describe, expect, it } from 'vitest';
import { computeGpa } from './gpa.ts';
import type { CourseEntry, Grade } from '../types.ts';
import { gradePoints, isGpaBearing } from '../grades.ts';

function entry(courseId: string, credits: number, grade: Grade, source: CourseEntry['source'] = 'institution'): CourseEntry {
  return {
    courseId,
    title: courseId,
    credits,
    grade,
    gradePoints: gradePoints(grade),
    countsTowardGpa: source === 'institution' && isGpaBearing(grade),
    source,
  };
}

describe('computeGpa', () => {
  it('weights each grade by credits', () => {
    const totals = computeGpa([entry('CMSC131', 4, 'A'), entry('MATH141', 4, 'B+'), entry('ENGL101', 3, 'A-')]);
    // 16 + 13.2 + 11.1 = 40.3 over 11 credits
    expect(totals.qualityPoints).toBeCloseTo(40.3, 6);
    expect(totals.gpaCredits).toBe(11);
    expect(totals.gpa).toBeCloseTo(3.6636, 4);
  });

  it('excludes P, S, W, I and AU from the GPA', () => {
    for (const grade of ['P', 'S', 'W', 'I', 'AU'] as const) {
      const totals = computeGpa([entry('CMSC131', 4, 'A'), entry('UNIV100', 3, grade)]);
      expect(totals.gpa, grade).toBe(4);
      expect(totals.gpaCredits, grade).toBe(4);
    }
  });

  it('awards credit for P and S but not for W, I or AU', () => {
    expect(computeGpa([entry('UNIV100', 3, 'P')]).earnedCredits).toBe(3);
    expect(computeGpa([entry('STAT400', 3, 'W')]).earnedCredits).toBe(0);
    expect(computeGpa([entry('STAT400', 3, 'I')]).earnedCredits).toBe(0);
  });

  it('keeps an F in the denominator but awards no credit for it', () => {
    const totals = computeGpa([entry('CMSC131', 4, 'A'), entry('MATH141', 4, 'F')]);
    expect(totals.gpaCredits).toBe(8);
    expect(totals.gpa).toBe(2);
    expect(totals.earnedCredits).toBe(4);
  });

  it('counts transfer credit as earned but never toward the GPA', () => {
    const totals = computeGpa([entry('CMSC131', 4, 'A'), entry('MATH140', 4, 'A', 'transfer')]);
    expect(totals.gpa).toBe(4);
    expect(totals.gpaCredits).toBe(4);
    expect(totals.earnedCredits).toBe(8);
  });

  it('treats A+ and A as the same 4.0', () => {
    expect(computeGpa([entry('CMSC131', 4, 'A+')]).gpa).toBe(4);
  });

  it('has no GPA at all before any graded work', () => {
    expect(computeGpa([]).gpa).toBeNull();
    expect(computeGpa([entry('UNIV100', 1, 'P')]).gpa).toBeNull();
  });
});
