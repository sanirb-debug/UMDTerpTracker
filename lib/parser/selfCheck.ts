import type { Transcript } from '../types.ts';
import { cumulativeTotals } from '../planner/gpa.ts';
import { gpaExcludingEarlierAttempts, repeatedCourses } from './repeats.ts';

/**
 * The transcript prints its own cumulative GPA. If the GPA computed from the
 * rows we parsed disagrees with it, the parse is wrong — not the transcript.
 * This is the verification loop for the whole parser.
 */
export interface SelfCheckResult {
  computedGpa: number | null;
  statedGpa: number | null;
  /** computed - stated, or null when either side is missing. */
  delta: number | null;
  computedCredits: number;
  statedCredits: number | null;
  ok: boolean;
}

/** Transcripts print GPA to three decimals, so anything under half a hundredth is rounding. */
export const GPA_TOLERANCE = 0.005;
const CREDIT_TOLERANCE = 0.5;

export function selfCheck(transcript: Transcript): SelfCheckResult {
  const totals = cumulativeTotals(transcript);
  const computedGpa = totals.gpa;
  const statedGpa = transcript.statedCumulativeGpa;
  const delta = computedGpa !== null && statedGpa !== null ? computedGpa - statedGpa : null;

  return {
    computedGpa,
    statedGpa,
    delta,
    computedCredits: totals.earnedCredits,
    statedCredits: transcript.statedCumulativeCredits,
    ok: delta !== null && Math.abs(delta) <= GPA_TOLERANCE,
  };
}

/**
 * Run the self-check and fold any disagreement into the transcript's warnings,
 * so the UI has one place to look for "something about this parse is off".
 */
export function withSelfCheck(transcript: Transcript): Transcript {
  const result = selfCheck(transcript);
  const warnings = [...transcript.warnings];

  if (result.delta !== null && !result.ok) {
    warnings.push({
      code: 'gpa_mismatch',
      message:
        `We read your GPA as ${result.computedGpa!.toFixed(3)}, but your transcript says ` +
        `${result.statedGpa!.toFixed(3)}. Something did not parse correctly, so treat the ` +
        'numbers below as approximate.',
      detail: `delta ${result.delta.toFixed(3)}`,
    });

    // Say why, when we can. A bare "these numbers disagree" leaves a reader
    // with no way to judge how much of the page to distrust.
    const repeats = repeatedCourses(transcript);
    if (repeats.length > 0) {
      const excluding = gpaExcludingEarlierAttempts(transcript);
      const explains =
        excluding !== null &&
        result.statedGpa !== null &&
        Math.abs(excluding - result.statedGpa) <= GPA_TOLERANCE;
      const names = repeats.map((repeat) => repeat.courseId).join(', ');

      warnings.push({
        code: 'repeated_course',
        message: explains
          ? `${names} appears on your transcript more than once. UMD's repeat policy counts ` +
            'only the later attempt toward your GPA, and TerpTracker does not do that yet — ' +
            'it is counting both. That fully explains the difference above: ignoring the ' +
            `earlier attempt gives exactly the ${result.statedGpa!.toFixed(3)} your transcript ` +
            'prints. Trust your transcript, not this page.'
          : `${names} appears on your transcript more than once, which may be why the numbers ` +
            "above disagree — TerpTracker counts every attempt, and UMD's repeat policy does " +
            'not. It does not explain the whole difference, so something else is off as well.',
        detail: repeats
          .map((repeat) => `${repeat.courseId}×${repeat.attempts.length}`)
          .join(' '),
      });
    }
  }

  if (
    result.statedCredits !== null &&
    Math.abs(result.computedCredits - result.statedCredits) > CREDIT_TOLERANCE
  ) {
    warnings.push({
      code: 'gpa_mismatch',
      message:
        `We counted ${result.computedCredits} earned credits but your transcript says ` +
        `${result.statedCredits}.`,
      detail: 'credit total mismatch',
    });
  }

  return { ...transcript, warnings };
}
