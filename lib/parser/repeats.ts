import type { Transcript } from '../types.ts';

/**
 * Courses that appear on the record more than once.
 *
 * ## Applying UMD's repeat policy without guessing at anybody's GPA
 *
 * UMD's repeat policy excludes the earlier attempt of a repeated course from
 * the GPA and counts the credit once. TerpTracker cannot read that decision off
 * the page: knowing how Testudo *marks* the excluded attempt would take a real
 * transcript with a repeat on it, and nobody involved has seen one. Guessing at
 * the notation would mean guessing at somebody's GPA, which is the one thing
 * this app must not do.
 *
 * So it does not guess — it checks. The transcript prints its own cumulative
 * GPA. Drop the earlier attempts, recompute, and if the result lands on the
 * printed figure, the policy has been applied the way UMD applied it. That is a
 * proof, not a guess, and it needs no knowledge of the notation at all.
 * `withRepeatPolicyApplied` does the dropping and `selfCheck` does the
 * confirming; the adjustment is kept only when the two agree. When they do not,
 * nothing is changed and the reader gets the diagnosis instead.
 *
 * ## Why a duplicate alone is not acted on
 *
 * Some courses are legitimately repeatable for credit — special topics,
 * independent study, ensembles — and taking one twice is not an error and does
 * not break the GPA. So this is only ever acted on alongside a self-check
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
 * attempts that carry quality points can distort the GPA. An attempt this
 * module has already excluded still counts as an attempt, so the answer does
 * not change once the policy has been applied.
 */
export function repeatedCourses(transcript: Transcript): RepeatedCourse[] {
  const byCourse = new Map<string, RepeatedCourse['attempts']>();

  for (const term of transcript.terms) {
    for (const course of term.courses) {
      if (!course.courseId) continue;
      if (!course.countsTowardGpa && !course.repeatExcluded) continue;
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
 * The transcript with UMD's repeat policy applied: every attempt but the last
 * at a given course is marked excluded, dropping it from the GPA and from the
 * credit total alike.
 *
 * Nothing applies this speculatively — `selfCheck` keeps the result only when
 * it reconciles with the GPA the transcript prints.
 */
export function withRepeatPolicyApplied(transcript: Transcript): Transcript {
  const seen = new Set<string>();

  // Latest attempt wins, so walk backwards. The inner and outer reverses put
  // terms and courses back into transcript order once the marking is done.
  const terms = [...transcript.terms]
    .reverse()
    .map((term) => ({
      ...term,
      courses: [...term.courses]
        .reverse()
        .map((course) => {
          if (!course.countsTowardGpa || !course.courseId) return course;
          if (seen.has(course.courseId)) {
            return { ...course, countsTowardGpa: false, repeatExcluded: true };
          }
          seen.add(course.courseId);
          return course;
        })
        .reverse(),
    }))
    .reverse();

  return { ...transcript, terms };
}
