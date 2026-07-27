import type { Grade, GradeDistribution, LetterGrade } from '../types.ts';
import { PLANNABLE_GRADES, gradePoints, gradeRank } from '../grades.ts';

/**
 * One PlanetTerp `/api/v1/grades` row. Every letter is its own key and the
 * counts are raw student headcounts for one section.
 */
export interface PlanetTerpSection {
  course: string;
  professor?: string;
  semester?: string;
  section?: string;
  [grade: string]: string | number | undefined;
}

const COUNTED_GRADES: Grade[] = [...PLANNABLE_GRADES, 'F'];

/** Fold PlanetTerp's per-section rows into one distribution per course. */
export function aggregateSections(sections: readonly PlanetTerpSection[]): GradeDistribution[] {
  const byCourse = new Map<string, GradeDistribution>();

  for (const section of sections) {
    const courseId = String(section.course ?? '').toUpperCase();
    if (!courseId) continue;

    let distribution = byCourse.get(courseId);
    if (!distribution) {
      distribution = { courseId, counts: {}, total: 0, sections: 0 };
      byCourse.set(courseId, distribution);
    }
    distribution.sections += 1;

    for (const grade of [...COUNTED_GRADES, 'W' as const]) {
      const value = section[grade];
      const count = typeof value === 'number' ? value : Number(value ?? 0);
      if (!Number.isFinite(count) || count <= 0) continue;
      distribution.counts[grade] = (distribution.counts[grade] ?? 0) + count;
      distribution.total += count;
    }
  }

  return [...byCourse.values()];
}

/** Students who finished the course with a letter grade. Withdrawals are excluded. */
function gradedTotal(distribution: GradeDistribution): number {
  return COUNTED_GRADES.reduce((sum, grade) => sum + (distribution.counts[grade] ?? 0), 0);
}

/**
 * Share of students who earned `grade` or better, among those who completed the
 * course for a letter grade.
 *
 * This is the number that turns "you need a 3.42 average" into advice: it is
 * the probability attached to one concrete plan, not a target to hit blind.
 */
export function probabilityOfAtLeast(
  distribution: GradeDistribution,
  grade: LetterGrade,
): number | null {
  const total = gradedTotal(distribution);
  if (total === 0) return null;

  const cutoff = gradeRank(grade);
  let atLeast = 0;
  for (const candidate of PLANNABLE_GRADES) {
    if (gradeRank(candidate) > cutoff) break;
    atLeast += distribution.counts[candidate] ?? 0;
  }
  return atLeast / total;
}

/** Mean GPA of everyone who completed the course. */
export function averageGpa(distribution: GradeDistribution): number | null {
  const total = gradedTotal(distribution);
  if (total === 0) return null;
  let points = 0;
  for (const grade of PLANNABLE_GRADES) {
    points += (distribution.counts[grade] ?? 0) * (gradePoints(grade) ?? 0);
  }
  return points / total;
}

export class DistributionIndex {
  private readonly byCourse: Map<string, GradeDistribution>;
  /** Every cached course summed together, used when a course has no data. */
  private readonly fallback: GradeDistribution | null;

  constructor(distributions: readonly GradeDistribution[]) {
    this.byCourse = new Map(distributions.map((d) => [d.courseId.toUpperCase(), d]));
    this.fallback = distributions.length > 0 ? sumAll(distributions) : null;
  }

  get(courseId: string): GradeDistribution | undefined {
    return this.byCourse.get(courseId.toUpperCase());
  }

  /**
   * Probability of `grade` or better. Falls back to the all-courses average
   * when the course has no cached data, flagged so the UI can hedge the claim.
   */
  chanceOfAtLeast(
    courseId: string,
    grade: LetterGrade,
  ): { probability: number | null; estimated: boolean } {
    const exact = this.get(courseId);
    if (exact) {
      const probability = probabilityOfAtLeast(exact, grade);
      if (probability !== null) return { probability, estimated: false };
    }
    if (!this.fallback) return { probability: null, estimated: true };
    return { probability: probabilityOfAtLeast(this.fallback, grade), estimated: true };
  }
}

function sumAll(distributions: readonly GradeDistribution[]): GradeDistribution {
  const counts: GradeDistribution['counts'] = {};
  let total = 0;
  let sections = 0;
  for (const distribution of distributions) {
    sections += distribution.sections;
    total += distribution.total;
    for (const [grade, count] of Object.entries(distribution.counts)) {
      counts[grade as Grade] = (counts[grade as Grade] ?? 0) + (count ?? 0);
    }
  }
  return { courseId: '*', counts, total, sections };
}
