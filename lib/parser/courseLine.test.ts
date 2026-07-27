import { describe, expect, it } from 'vitest';
import { groupIntoLines } from './lines.ts';
import { parseCourseLine } from './courseLine.ts';
import type { CreditSource } from '../types.ts';
import { pageFromText } from '../../fixtures/support/layout.ts';

function read(layout: string, source: CreditSource = 'institution') {
  const [line] = groupIntoLines(pageFromText(1, layout));
  return parseCourseLine(line!, source);
}

describe('parseCourseLine', () => {
  it('reads a standard graded row', () => {
    const { entry } = read('CMSC216    Introduction to Computer Systems    4.000     4.000     A-    14.800');
    expect(entry).toMatchObject({
      courseId: 'CMSC216',
      title: 'Introduction to Computer Systems',
      credits: 4,
      creditsEarned: 4,
      grade: 'A-',
      gradePoints: 3.7,
      countsTowardGpa: true,
    });
  });

  it('does not mistake a trailing roman numeral in the title for an Incomplete', () => {
    // "Programming I" is one cell, so there is no lone `I` to misread.
    const { entry } = read('CMSC131    Object-Oriented Programming I    4.000');
    expect(entry?.grade).toBe('NG');
    expect(entry?.title).toBe('Object-Oriented Programming I');
    expect(entry?.credits).toBe(4);
  });

  it('takes credits attempted, not credits earned, as the GPA weight', () => {
    // A failed course still occupies its credits in the denominator.
    const { entry } = read('MATH141    Calculus II    4.000     0.000     F     0.000');
    expect(entry).toMatchObject({ credits: 4, creditsEarned: 0, grade: 'F', countsTowardGpa: true });
  });

  it('handles layouts that print the grade before the credits', () => {
    const { entry } = read('MATH140    Calculus I    A     4.000     16.000');
    expect(entry).toMatchObject({ courseId: 'MATH140', title: 'Calculus I', credits: 4, grade: 'A' });
  });

  it('joins a subject and number split across columns', () => {
    const { entry } = read('CMSC    351    Algorithms    3.000     3.000     B     9.000');
    expect(entry?.courseId).toBe('CMSC351');
  });

  it('excludes a repeated attempt flagged E', () => {
    const { entry } = read('MATH240    Linear Algebra    4.000     0.000     C+    9.200     E');
    expect(entry).toMatchObject({ repeatExcluded: true, countsTowardGpa: false });
  });

  it('never counts transfer credit toward the GPA', () => {
    const { entry } = read('PSYC100    Introduction to Psychology    3.000     3.000     A', 'transfer');
    expect(entry).toMatchObject({ grade: 'A', countsTowardGpa: false, source: 'transfer' });
  });

  it('ignores rows that are not courses', () => {
    expect(read('Term GPA:  3.521     Term Credits Earned:  14.000').entry).toBeNull();
  });

  it('flags a course-shaped row with no credit hours', () => {
    const result = read('CMSC351    Algorithms    see advisor');
    expect(result.entry).toBeNull();
    expect(result.problem).toMatch(/no credit hours/);
  });
});
