import type { LetterGrade, PlannedCourse } from '../types.ts';
import { PLANNABLE_GRADES, gradePoints } from '../grades.ts';
import type { DistributionIndex } from './distributions.ts';
import type { CurrentStanding } from './scenario.ts';

export interface SolvedCourse extends PlannedCourse {
  grade: LetterGrade;
  /** Share of past students who got this grade or better. Null when unknown. */
  probability: number | null;
  /** True when the probability came from the all-courses fallback, not this course. */
  estimated: boolean;
}

export interface Plan {
  grades: SolvedCourse[];
  resultingGpa: number;
  /** Joint chance of hitting at least these grades, assuming courses are independent. */
  probability: number | null;
  estimated: boolean;
}

export interface SolveOptions {
  maxPlans?: number;
  distributions?: DistributionIndex;
}

/**
 * Grade alphabets, coarsening as the course count grows. The full 12-grade
 * alphabet is right for a normal 4-5 course semester; past that the search
 * space has to shrink faster than it grows, and nobody plans the difference
 * between a C+ and a C across seven courses anyway.
 */
const ALPHABETS: LetterGrade[][] = [
  PLANNABLE_GRADES,
  ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'D'],
  ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C'],
  ['A', 'B+', 'B', 'B-', 'C'],
  ['A', 'B', 'C'],
];

const MAX_LEAVES = 60_000;
const EPSILON = 1e-9;

function chooseAlphabet(courseCount: number): LetterGrade[] {
  const prefixLength = Math.max(courseCount - 1, 0);
  for (const alphabet of ALPHABETS) {
    if (alphabet.length ** prefixLength <= MAX_LEAVES) return alphabet;
  }
  return ALPHABETS[ALPHABETS.length - 1]!;
}

function pointsOf(grade: LetterGrade): number {
  return gradePoints(grade) ?? 0;
}

/**
 * Find the grade combinations that reach `targetGpa`, ranked by how often
 * students actually pull them off.
 *
 * Only *minimal* combinations are returned — ones where easing any single
 * course by one grade step misses the target. Without that filter the answer
 * is thousands of variations on "get better grades", which is not advice.
 */
export function solvePlans(
  current: CurrentStanding,
  planned: readonly PlannedCourse[],
  targetGpa: number,
  options: SolveOptions = {},
): Plan[] {
  const courses = planned.filter((course) => course.credits > 0);
  const count = courses.length;
  if (count === 0) return [];

  const plannedCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  const totalCredits = current.gpaCredits + plannedCredits;
  const pointsNeeded = targetGpa * totalCredits - current.qualityPoints;

  // Straight A's fall short — no combination exists.
  if (pointsNeeded > 4 * plannedCredits + EPSILON) return [];

  const alphabet = chooseAlphabet(count);
  const lastIndex = count - 1;

  // suffixMax[i] = most points courses i..n-1 can contribute.
  const suffixMax = new Array<number>(count + 1).fill(0);
  for (let i = count - 1; i >= 0; i -= 1) {
    suffixMax[i] = suffixMax[i + 1]! + 4 * courses[i]!.credits;
  }

  const combinations: LetterGrade[][] = [];
  const assignment = new Array<LetterGrade>(count);
  let leaves = 0;

  const search = (index: number, accumulated: number): void => {
    if (leaves >= MAX_LEAVES) return;

    if (index === lastIndex) {
      leaves += 1;
      const lastCourse = courses[lastIndex]!;
      const perCredit = (pointsNeeded - accumulated) / lastCourse.credits;
      // Worst grade in the last course that still clears the bar.
      const chosen = [...PLANNABLE_GRADES]
        .reverse()
        .find((grade) => pointsOf(grade) >= perCredit - EPSILON);
      if (!chosen) return;
      assignment[lastIndex] = chosen;
      combinations.push([...assignment]);
      return;
    }

    for (const grade of alphabet) {
      const next = accumulated + courses[index]!.credits * pointsOf(grade);
      // Grades are ordered best first, so once the ceiling drops below what is
      // needed, every remaining grade is worse too.
      if (next + suffixMax[index + 1]! < pointsNeeded - EPSILON) break;
      assignment[index] = grade;
      search(index + 1, next);
    }
  };

  search(0, 0);

  const minimal = combinations.filter((combination) => isMinimal(combination, courses, pointsNeeded));
  return rank(minimal, courses, current, totalCredits, options);
}

/** True when no single course can be eased by one grade step without missing the target. */
function isMinimal(
  combination: readonly LetterGrade[],
  courses: readonly PlannedCourse[],
  pointsNeeded: number,
): boolean {
  const total = combination.reduce(
    (sum, grade, index) => sum + courses[index]!.credits * pointsOf(grade),
    0,
  );

  for (let i = 0; i < combination.length; i += 1) {
    const rank = PLANNABLE_GRADES.indexOf(combination[i]!);
    const lower = PLANNABLE_GRADES[rank + 1];
    if (!lower) continue; // Already at D-; cannot ease this one.
    const eased = total - courses[i]!.credits * (pointsOf(combination[i]!) - pointsOf(lower));
    if (eased >= pointsNeeded - EPSILON) return false;
  }
  return true;
}

function rank(
  combinations: readonly LetterGrade[][],
  courses: readonly PlannedCourse[],
  current: CurrentStanding,
  totalCredits: number,
  options: SolveOptions,
): Plan[] {
  const { distributions, maxPlans = 8 } = options;
  const seen = new Set<string>();
  const plans: Plan[] = [];

  for (const combination of combinations) {
    const key = combination.join('|');
    if (seen.has(key)) continue;
    seen.add(key);

    let joint: number | null = 1;
    let estimated = false;
    const grades: SolvedCourse[] = combination.map((grade, index) => {
      const course = courses[index]!;
      const chance = distributions?.chanceOfAtLeast(course.courseId, grade) ?? {
        probability: null,
        estimated: true,
      };
      if (chance.estimated) estimated = true;
      joint = joint !== null && chance.probability !== null ? joint * chance.probability : null;
      return {
        courseId: course.courseId,
        credits: course.credits,
        grade,
        probability: chance.probability,
        estimated: chance.estimated,
      };
    });

    const earned = combination.reduce(
      (sum, grade, index) => sum + courses[index]!.credits * pointsOf(grade),
      0,
    );

    plans.push({
      grades,
      resultingGpa: (current.qualityPoints + earned) / totalCredits,
      probability: joint,
      estimated,
    });
  }

  // Most achievable first. Plans with no data at all sort last but stay visible.
  plans.sort((a, b) => (b.probability ?? -1) - (a.probability ?? -1));
  return plans.slice(0, maxPlans);
}
