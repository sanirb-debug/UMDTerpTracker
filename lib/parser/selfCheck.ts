import type { Transcript } from '../types.ts';
import { cumulativeTotals } from '../planner/gpa.ts';
import { repeatedCourses, withRepeatPolicyApplied } from './repeats.ts';

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
 * Apply UMD's repeat policy, and keep the result only if it reconciles the GPA
 * with the one the transcript prints. That agreement is what turns dropping the
 * earlier attempt from a guess into a demonstration — see `./repeats.ts`.
 */
function reconciledByRepeatPolicy(transcript: Transcript): Transcript | null {
  const adjusted = withRepeatPolicyApplied(transcript);
  return selfCheck(adjusted).ok ? adjusted : null;
}

/**
 * Run the self-check and fold any disagreement into the transcript's warnings,
 * so the UI has one place to look for "something about this parse is off".
 */
export function withSelfCheck(transcript: Transcript): Transcript {
  const initial = selfCheck(transcript);
  const repeats = repeatedCourses(transcript);

  // A repeat is the one discrepancy this can settle on its own, because the
  // printed GPA says whether the correction is right.
  const repaired =
    initial.delta !== null && !initial.ok && repeats.length > 0
      ? reconciledByRepeatPolicy(transcript)
      : null;

  const subject = repaired ?? transcript;
  const result = repaired ? selfCheck(subject) : initial;
  const warnings = [...subject.warnings];
  const names = repeats.map((repeat) => repeat.courseId).join(', ');
  const detail = repeats.map((repeat) => `${repeat.courseId}×${repeat.attempts.length}`).join(' ');

  if (repaired) {
    warnings.push({
      code: 'repeated_course',
      message:
        `${names} appears on your transcript more than once. UMD counts only your latest ` +
        'attempt toward your GPA and awards the credit once, and TerpTracker has done the same ' +
        `here — which is why the numbers below agree with the ${result.statedGpa!.toFixed(3)} ` +
        'your transcript prints.',
      detail,
    });
  } else if (result.delta !== null && !result.ok) {
    warnings.push({
      code: 'gpa_mismatch',
      message:
        `We read your GPA as ${result.computedGpa!.toFixed(3)}, but your transcript says ` +
        `${result.statedGpa!.toFixed(3)}. Something did not parse correctly, so treat the ` +
        'numbers below as approximate.',
      detail: `delta ${result.delta.toFixed(3)}`,
    });

    // Say why, when we can. A bare "these numbers disagree" leaves a reader
    // with no way to judge how much of the page to distrust. Reaching here with
    // a repeat means the policy did *not* reconcile it, so this stays hedged.
    if (repeats.length > 0) {
      warnings.push({
        code: 'repeated_course',
        message:
          `${names} appears on your transcript more than once, which may be why the numbers ` +
          "above disagree — TerpTracker counts every attempt, and UMD's repeat policy does " +
          'not. It does not explain the whole difference, so something else is off as well.',
        detail,
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

  return { ...subject, warnings };
}
