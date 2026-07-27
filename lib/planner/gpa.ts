import type { CourseEntry, GpaTotals, Term, Transcript } from '../types.ts';

/** Grades that award no credit even though the course appears on the record. */
const NO_CREDIT_MARKS = new Set(['W', 'I', 'NG', 'AU']);

function earnedCreditsFor(entry: CourseEntry): number {
  if (entry.creditsEarned !== undefined) return entry.creditsEarned;
  if (NO_CREDIT_MARKS.has(entry.grade)) return 0;
  if (entry.gradePoints === 0) return 0;
  return entry.credits;
}

/**
 * GPA over an arbitrary set of course entries.
 *
 * Only entries flagged `countsTowardGpa` contribute quality points; that flag
 * is where the `P S W I AU` exclusion and the transfer/exam exclusion already
 * live, so this stays a straight weighted average.
 */
export function computeGpa(entries: readonly CourseEntry[]): GpaTotals {
  let gpaCredits = 0;
  let qualityPoints = 0;
  let earnedCredits = 0;

  for (const entry of entries) {
    earnedCredits += earnedCreditsFor(entry);
    if (!entry.countsTowardGpa || entry.gradePoints === null) continue;
    gpaCredits += entry.credits;
    qualityPoints += entry.credits * entry.gradePoints;
  }

  return {
    gpaCredits,
    qualityPoints,
    earnedCredits,
    gpa: gpaCredits > 0 ? qualityPoints / gpaCredits : null,
  };
}

export function termTotals(term: Term): GpaTotals {
  return computeGpa(term.courses);
}

/** Institution GPA. Transfer and exam credit add earned credits but no points. */
export function cumulativeTotals(transcript: Transcript): GpaTotals {
  const institution = transcript.terms.flatMap((term) => term.courses);
  const totals = computeGpa(institution);
  const transfer = computeGpa(transcript.nonGpaCredits);
  return { ...totals, earnedCredits: totals.earnedCredits + transfer.earnedCredits };
}

/** Cumulative GPA after each term, oldest first. Feeds the dashboard trend. */
export function gpaByTerm(transcript: Transcript): Array<{ term: Term; termGpa: number | null; cumulativeGpa: number | null }> {
  const running: CourseEntry[] = [];
  return transcript.terms.map((term) => {
    running.push(...term.courses);
    return {
      term,
      termGpa: computeGpa(term.courses).gpa,
      cumulativeGpa: computeGpa(running).gpa,
    };
  });
}
