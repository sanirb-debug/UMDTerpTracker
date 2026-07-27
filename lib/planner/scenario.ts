import type { GpaTotals, LetterGrade, PlannedCourse } from '../types.ts';
import { gradePoints } from '../grades.ts';

/** Everything the planner needs to know about grades already earned. */
export interface CurrentStanding {
  gpaCredits: number;
  qualityPoints: number;
}

export function standingFromTotals(totals: GpaTotals): CurrentStanding {
  return { gpaCredits: totals.gpaCredits, qualityPoints: totals.qualityPoints };
}

export interface PlannedGrade extends PlannedCourse {
  grade: LetterGrade;
}

/** Cumulative GPA if every planned course lands on the grade given. */
export function projectGpa(current: CurrentStanding, planned: readonly PlannedGrade[]): number | null {
  let credits = current.gpaCredits;
  let points = current.qualityPoints;
  for (const course of planned) {
    credits += course.credits;
    points += course.credits * (gradePoints(course.grade) ?? 0);
  }
  return credits > 0 ? points / credits : null;
}

export interface AverageNeeded {
  /** Grade-point average required across the planned courses, on the 4.0 scale. */
  average: number;
  /** False when even straight A's fall short. */
  feasible: boolean;
  /** True when the target is already met before taking anything. */
  alreadyThere: boolean;
  /** Best and worst cumulative GPA reachable after the planned courses. */
  bestCase: number;
  worstCase: number;
}

/**
 * The blunt version of the answer: what average the planned courses have to
 * hit. Useful as a headline, but on its own it is not advice — see
 * `solveCombinations`, which turns it into named grades in named courses.
 */
export function requiredAverage(
  current: CurrentStanding,
  planned: readonly PlannedCourse[],
  targetGpa: number,
): AverageNeeded {
  const plannedCredits = planned.reduce((sum, course) => sum + course.credits, 0);
  const totalCredits = current.gpaCredits + plannedCredits;

  if (plannedCredits <= 0) {
    const currentGpa = current.gpaCredits > 0 ? current.qualityPoints / current.gpaCredits : 0;
    return {
      average: Number.NaN,
      feasible: currentGpa >= targetGpa,
      alreadyThere: currentGpa >= targetGpa,
      bestCase: currentGpa,
      worstCase: currentGpa,
    };
  }

  const pointsNeeded = targetGpa * totalCredits - current.qualityPoints;
  const average = pointsNeeded / plannedCredits;

  return {
    average,
    feasible: average <= 4.0 + 1e-9,
    alreadyThere: average <= 0,
    bestCase: (current.qualityPoints + 4 * plannedCredits) / totalCredits,
    worstCase: current.qualityPoints / totalCredits,
  };
}
