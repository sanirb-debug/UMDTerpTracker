import type { CreditSource } from './types.ts';

/**
 * Linking a course out to its PlanetTerp page.
 *
 * The gating is the whole point. PlanetTerp has no page for a course UMD has
 * renumbered or discontinued, and a transcript is full of both — so a link
 * built from a course id alone is a coin flip on whether it 404s. Linking only
 * what the cached catalog still lists means a link that renders is a link that
 * resolves.
 */

const COURSE_ID = /^[A-Z]{4}\d{3}[A-Z]?$/;

export function normalizeCourseId(courseId: string): string {
  return courseId.replace(/\s+/g, '').toUpperCase();
}

export function planetTerpCourseUrl(courseId: string): string {
  return `https://planetterp.com/course/${normalizeCourseId(courseId)}`;
}

export interface LinkableOptions {
  courseId: string;
  /**
   * Where the credit came from. Transfer and exam credit is not a UMD course
   * even when the transcript prints a UMD equivalent beside it, so it never
   * links.
   */
  source?: CreditSource;
  /** Whether the cached umd.io catalog still lists this course. */
  inCatalog: boolean;
}

export function canLinkCourse({ courseId, source, inCatalog }: LinkableOptions): boolean {
  if (!inCatalog) return false;
  // Transfer rows with no UMD equivalent have no id at all.
  if (!COURSE_ID.test(normalizeCourseId(courseId))) return false;
  // `undefined` covers courses typed into the planner, which are UMD courses
  // the student has not taken yet.
  return source === undefined || source === 'institution';
}
