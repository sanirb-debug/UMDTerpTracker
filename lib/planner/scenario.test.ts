import { describe, expect, it } from 'vitest';
import { projectGpa, requiredAverage } from './scenario.ts';

// 60 credits at exactly 3.0.
const current = { gpaCredits: 60, qualityPoints: 180 };

describe('requiredAverage', () => {
  it('computes the average the planned semester has to hit', () => {
    // (3.2 * 75 - 180) / 15 = 4.0
    const result = requiredAverage(current, [{ courseId: 'X', credits: 15 }], 3.2);
    expect(result.average).toBeCloseTo(4.0, 6);
    expect(result.feasible).toBe(true);
  });

  it('says so when even straight A pluses fall short', () => {
    const result = requiredAverage(current, [{ courseId: 'X', credits: 15 }], 3.25);
    expect(result.average).toBeCloseTo(4.25, 6);
    expect(result.feasible).toBe(false);
  });

  it('reports the reachable range', () => {
    const result = requiredAverage(current, [{ courseId: 'X', credits: 15 }], 3.0);
    expect(result.bestCase).toBeCloseTo(3.2, 6);
    expect(result.worstCase).toBeCloseTo(2.4, 6);
  });

  it('recognises a target that is already met', () => {
    const result = requiredAverage(current, [{ courseId: 'X', credits: 15 }], 2.0);
    expect(result.alreadyThere).toBe(true);
  });
});

describe('projectGpa', () => {
  it('folds planned grades into the cumulative average', () => {
    const projected = projectGpa(current, [
      { courseId: 'CMSC351', credits: 3, grade: 'A' },
      { courseId: 'MATH246', credits: 3, grade: 'B' },
    ]);
    // (180 + 12 + 9) / 66
    expect(projected).toBeCloseTo(201 / 66, 6);
  });

  it('returns the current GPA when nothing is planned', () => {
    expect(projectGpa(current, [])).toBe(3);
  });
});
