import { describe, expect, it } from 'vitest';
import { solvePlans } from './solve.ts';
import { DistributionIndex } from './distributions.ts';
import { PLANNABLE_GRADES, gradePoints } from '../grades.ts';
import type { PlannedCourse } from '../types.ts';

// 60 credits at exactly 3.0.
const current = { gpaCredits: 60, qualityPoints: 180 };

const semester: PlannedCourse[] = [
  { courseId: 'CMSC351', credits: 3 },
  { courseId: 'MATH246', credits: 3 },
  { courseId: 'ENGL393', credits: 3 },
];

const distributions = new DistributionIndex([
  {
    // A hard course: A's are rare.
    courseId: 'CMSC351',
    counts: { 'A+': 20, A: 40, 'A-': 40, 'B+': 60, B: 120, 'B-': 80, 'C+': 60, C: 60, D: 10, F: 10 },
    total: 500,
    sections: 20,
  },
  {
    // An easy course: most of the class gets an A.
    courseId: 'ENGL393',
    counts: { 'A+': 60, A: 180, 'A-': 100, 'B+': 60, B: 60, 'B-': 20, 'C+': 10, C: 10 },
    total: 500,
    sections: 20,
  },
]);

function gpaOf(grades: readonly { credits: number; grade: (typeof PLANNABLE_GRADES)[number] }[]): number {
  const points = grades.reduce((sum, g) => sum + g.credits * (gradePoints(g.grade) ?? 0), 0);
  const credits = grades.reduce((sum, g) => sum + g.credits, 0);
  return (current.qualityPoints + points) / (current.gpaCredits + credits);
}

describe('solvePlans', () => {
  it('only returns plans that actually reach the target', () => {
    const plans = solvePlans(current, semester, 3.1, { distributions, maxPlans: 50 });
    expect(plans.length).toBeGreaterThan(0);
    for (const plan of plans) {
      expect(gpaOf(plan.grades)).toBeGreaterThanOrEqual(3.1 - 1e-9);
      expect(plan.resultingGpa).toBeCloseTo(gpaOf(plan.grades), 9);
    }
  });

  it('returns only minimal plans — easing any one course misses the target', () => {
    const plans = solvePlans(current, semester, 3.1, { distributions, maxPlans: 50 });
    for (const plan of plans) {
      for (let i = 0; i < plan.grades.length; i += 1) {
        const rank = PLANNABLE_GRADES.indexOf(plan.grades[i]!.grade);
        const easier = PLANNABLE_GRADES[rank + 1];
        if (!easier) continue;
        const eased = plan.grades.map((g, index) => (index === i ? { ...g, grade: easier } : g));
        expect(gpaOf(eased), `easing ${plan.grades[i]!.courseId}`).toBeLessThan(3.1);
      }
    }
  });

  it('ranks the plan that leans on the easier course first', () => {
    const plans = solvePlans(current, semester, 3.1, { distributions, maxPlans: 50 });
    const best = plans[0]!;
    const hard = best.grades.find((g) => g.courseId === 'CMSC351')!;
    const easy = best.grades.find((g) => g.courseId === 'ENGL393')!;
    // Asking for the A in the course where A's are common beats the reverse.
    expect(PLANNABLE_GRADES.indexOf(easy.grade)).toBeLessThan(PLANNABLE_GRADES.indexOf(hard.grade));
    expect(best.probability).toBeGreaterThan(0);
  });

  it('sorts by how often students actually pull the plan off', () => {
    const plans = solvePlans(current, semester, 3.1, { distributions, maxPlans: 50 });
    const probabilities = plans.map((plan) => plan.probability ?? -1);
    expect([...probabilities].sort((a, b) => b - a)).toEqual(probabilities);
  });

  it('returns nothing when even straight A pluses fall short', () => {
    expect(solvePlans(current, semester, 3.5, { distributions })).toEqual([]);
  });

  it('marks probabilities as estimated when the course has no data', () => {
    const plans = solvePlans(current, semester, 3.1, { distributions, maxPlans: 5 });
    const math = plans[0]!.grades.find((g) => g.courseId === 'MATH246')!;
    expect(math.estimated).toBe(true);
    expect(plans[0]!.estimated).toBe(true);
  });

  it('handles a single planned course', () => {
    // Needs 9.882 quality points from 3 credits, i.e. 3.294 per credit — a B+.
    const plans = solvePlans(current, [{ courseId: 'CMSC351', credits: 3 }], 3.014, {
      distributions,
    });
    expect(plans).toHaveLength(1);
    expect(plans[0]!.grades[0]!.grade).toBe('B+');
  });

  it('stays bounded on a large course load', () => {
    const many: PlannedCourse[] = Array.from({ length: 8 }, (_, i) => ({
      courseId: `TEST${100 + i}`,
      credits: 3,
    }));
    const start = Date.now();
    const plans = solvePlans(current, many, 3.2, { distributions, maxPlans: 5 });
    expect(Date.now() - start).toBeLessThan(2000);
    expect(plans.length).toBeGreaterThan(0);
  });
});
