import type { Transcript } from './types.ts';
import { computeGpa, cumulativeTotals } from './planner/gpa.ts';

/**
 * The university-wide minimum for a bachelor's degree.
 *
 * Source: UMD Undergraduate Catalog, "Academic Requirements — Credit
 * Requirements". This is a floor, not a target: plenty of majors require more,
 * and none require fewer. Once `data/requirements/` exists (SPEC.md phase 3)
 * the per-major figure should come from there and override this.
 */
export const DEGREE_CREDIT_MINIMUM = 120;

export interface CreditProgress {
  /** Credits already on the transcript, including transfer and exam credit. */
  earned: number;
  /** Credits from courses you are registered for but have not finished. */
  inProgress: number;
  /** Still to take after the current registrations land. Never negative. */
  remaining: number;
  /** The figure `remaining` is measured against. */
  required: number;
  /** 0-1, counting in-progress credits as if they land. */
  fraction: number;
}

/**
 * Progress toward the credit count a degree needs.
 *
 * This deliberately answers only "how many credits", not "which requirements".
 * Credits are arithmetic and need no hand-authored data; *which* courses still
 * have to be taken is the degree audit, which does — see SPEC.md phase 3.
 * Reporting a credit count as though it were a graduation check would be a lie
 * of omission, so the UI has to say which question it is answering.
 */
export function creditProgress(
  transcript: Transcript,
  required: number = DEGREE_CREDIT_MINIMUM,
): CreditProgress {
  const earned = cumulativeTotals(transcript).earnedCredits;
  const inProgress = transcript.inProgress.reduce((sum, course) => sum + course.credits, 0);
  const remaining = Math.max(0, required - earned - inProgress);
  return {
    earned,
    inProgress,
    remaining,
    required,
    fraction: required > 0 ? Math.min(1, (earned + inProgress) / required) : 0,
  };
}

/** Registered courses grouped by the term they are in, in transcript order. */
export function inProgressByTerm(
  transcript: Transcript,
): Array<{ termId: string | undefined; courses: Transcript['inProgress'] }> {
  const groups: Array<{ termId: string | undefined; courses: Transcript['inProgress'] }> = [];
  for (const course of transcript.inProgress) {
    const last = groups[groups.length - 1];
    if (last && last.termId === course.termId) {
      last.courses.push(course);
    } else {
      groups.push({ termId: course.termId, courses: [course] });
    }
  }
  return groups;
}

/** `2026-Summer II` reads back as `Summer II 2026`. */
export function formatTermId(termId: string | undefined): string {
  if (!termId) return 'Upcoming';
  const [year, ...rest] = termId.split('-');
  const label = rest.join('-');
  return label ? `${label} ${year}` : termId;
}

/** Credits earned per term, for anything that wants to show pace. */
export function creditsPerTerm(transcript: Transcript): Array<{ termId: string; credits: number }> {
  return transcript.terms.map((term) => ({
    termId: term.id,
    credits: computeGpa(term.courses).earnedCredits,
  }));
}
