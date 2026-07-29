import type { CourseEntry, Transcript } from '../types.ts';

/**
 * Courses that appear on the record more than once.
 *
 * ## What this is for, and what it deliberately is not
 *
 * UMD's repeat policy excludes the earlier attempt of a repeated course from
 * the GPA, and counts the credit once. TerpTracker does not implement that: it
 * adds up every graded row it finds, so a repeated course is counted twice and
 * both the GPA and the credit total come out wrong.
 *
 * This module does not fix that. Fixing it means knowing exactly how Testudo
 * marks the excluded attempt on a real transcript, and nobody involved has yet
 * seen a real transcript with a repeat on it. Guessing at the notation would
 * mean guessing at somebody's GPA, which is the one thing this app must not do.
 *
 * What it does instead is turn a mystery into a diagnosis. The self-check
 * already catches the disagreement — that is the whole point of the self-check
 * — but "we read your GPA as 3.000, your transcript says 4.000" gives a reader
 * no idea why, and no idea whether anything else is wrong. Naming the repeated
 * course explains the number they are looking at.
 *
 * ## Why a duplicate alone is not reported
 *
 * Some courses are legitimately repeatable for credit — special topics,
 * independent study, ensembles — and taking one twice is not an error and does
 * not break the GPA. So this is only ever surfaced alongside a self-check
 * failure, where a repeat is the likely explanation for a number that is
 * already known to be wrong.
 */

export interface RepeatedCourse {
  courseId: string;
  /** Every graded attempt, in transcript order. */
  attempts: Array<{ termId: string | undefined; grade: string; credits: number }>;
}

/**
 * Courses with more than one graded attempt. Ungraded rows are ignored: only
 * attempts that carry quality points can distort the GPA.
 */
export function repeatedCourses(transcript: Transcript): RepeatedCourse[] {
  const byCourse = new Map<string, RepeatedCourse['attempts']>();

  for (const term of transcript.terms) {
    for (const course of term.courses) {
      if (!course.countsTowardGpa || !course.courseId) continue;
      const attempts = byCourse.get(course.courseId) ?? [];
      attempts.push({ termId: term.id, grade: course.grade, credits: course.credits });
      byCourse.set(course.courseId, attempts);
    }
  }

  return [...byCourse.entries()]
    .filter(([, attempts]) => attempts.length > 1)
    .map(([courseId, attempts]) => ({ courseId, attempts }));
}

/**
 * How much of a GPA disagreement a repeat would explain.
 *
 * If dropping the earlier attempts brings the computed GPA onto the one the
 * transcript prints, the repeat is not just a plausible cause — it is the
 * cause, and the message can say so without hedging.
 */
export function gpaExcludingEarlierAttempts(transcript: Transcript): number | null {
  const seen = new Set<string>();
  const kept: CourseEntry[] = [];

  // Latest attempt wins, so walk the terms backwards.
  for (const term of [...transcript.terms].reverse()) {
    for (const course of [...term.courses].reverse()) {
      if (course.countsTowardGpa && course.courseId) {
        if (seen.has(course.courseId)) continue;
        seen.add(course.courseId);
      }
      kept.push(course);
    }
  }

  let credits = 0;
  let points = 0;
  for (const course of kept) {
    if (!course.countsTowardGpa || course.gradePoints === null) continue;
    credits += course.credits;
    points += course.credits * course.gradePoints;
  }
  return credits > 0 ? points / credits : null;
}
