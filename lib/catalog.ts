import type { GradeDistribution } from './types.ts';
import { DistributionIndex } from './planner/distributions.ts';

export interface CourseInfo {
  courseId: string;
  title: string;
  credits: number;
  /** Gen Ed category codes from umd.io, e.g. `DSHS`, `SCIS`. */
  genEd: string[];
  dept: string;
}

/** Shape of `data/cache/courses.json`, written by `tools/fetch-catalog.mjs`. */
export interface CatalogFile {
  source: string;
  fetchedAt: string;
  departments: string[];
  courses: Record<string, Omit<CourseInfo, 'courseId'>>;
}

/** Shape of `data/cache/grades.json`, written by `tools/fetch-grades.mjs`. */
export interface GradesFile {
  source: string;
  fetchedAt: string;
  distributions: Record<string, GradeDistribution>;
}

/**
 * The cached course catalog.
 *
 * Credits and Gen Ed tags come from here and only from here — hardcoding a
 * course's credits is how you end up with a GPA that is quietly wrong for the
 * one student whose section was worth 4.
 */
export class Catalog {
  readonly fetchedAt: string;
  private readonly courses: Map<string, CourseInfo>;

  constructor(file: CatalogFile) {
    this.fetchedAt = file.fetchedAt;
    this.courses = new Map(
      Object.entries(file.courses).map(([courseId, info]) => [courseId, { courseId, ...info }]),
    );
  }

  get(courseId: string): CourseInfo | undefined {
    return this.courses.get(normalize(courseId));
  }

  /** Credits for a course, or `undefined` when the catalog has never heard of it. */
  creditsFor(courseId: string): number | undefined {
    const credits = this.get(courseId)?.credits;
    return credits && credits > 0 ? credits : undefined;
  }

  search(query: string, limit = 8): CourseInfo[] {
    const needle = normalize(query);
    if (needle.length < 2) return [];
    const results: CourseInfo[] = [];
    for (const course of this.courses.values()) {
      if (course.courseId.startsWith(needle)) {
        results.push(course);
        if (results.length >= limit) break;
      }
    }
    return results.sort((a, b) => a.courseId.localeCompare(b.courseId));
  }
}

export function distributionIndexFrom(file: GradesFile): DistributionIndex {
  return new DistributionIndex(Object.values(file.distributions));
}

function normalize(courseId: string): string {
  return courseId.replace(/\s+/g, '').toUpperCase();
}
