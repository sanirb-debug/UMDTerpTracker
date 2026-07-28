import { describe, expect, it } from 'vitest';
import { evaluate } from './evaluate.ts';
import type { Requirements } from './types.ts';
import type { CourseEntry, Transcript } from '../types.ts';

/**
 * The failure this guards against: the app caches the *parsed* transcript, so a
 * parser that gains a capability leaves older stored copies quietly missing it.
 * A transcript parsed before Gen Ed codes were read has no `genEd` anywhere,
 * every Gen Ed rule finds nothing, and the audit reports categories unmet that
 * the registrar shows complete — with no error to explain why.
 *
 * `lib/parser/version.ts` is what actually prevents it, by throwing away
 * anything an older parser produced. These tests pin the shape of the bug so
 * the reason for that version number does not get lost.
 */

function course(courseId: string, genEd?: string[]): CourseEntry {
  const entry: CourseEntry = {
    courseId,
    title: courseId,
    credits: 3,
    creditsEarned: 3,
    grade: 'A',
    gradePoints: 4,
    countsTowardGpa: true,
    source: 'institution',
  };
  if (genEd) entry.genEd = genEd;
  return entry;
}

function transcript(courses: CourseEntry[]): Transcript {
  return {
    major: 'Information Science',
    terms: [
      {
        id: '2025-Fall',
        season: 'Fall',
        year: 2025,
        courses,
        statedTermGpa: null,
        statedTermCredits: null,
      },
    ],
    nonGpaCredits: [],
    inProgress: [],
    statedCumulativeGpa: null,
    statedCumulativeCredits: null,
    warnings: [],
  };
}

const requirements: Requirements = {
  id: 'test',
  major: 'Information Science',
  degree: 'BS',
  catalogYear: 2026,
  source: 'test',
  lastVerified: '2026-07-27',
  rules: [{ type: 'credits', label: 'Humanities', credits: 3, genEd: ['DSHU'], pool: 'gened' }],
};

describe('gen ed against an older parse', () => {
  it('is satisfied when the transcript carries the codes', () => {
    const result = evaluate(transcript([course('AMST203', ['DSHU'])]), requirements);
    expect(result.results[0]!.satisfied).toBe(true);
  });

  it('reports the same coursework unmet when the codes were never captured', () => {
    // Identical courses, no genEd — which is exactly what a v1 parse looks
    // like. Nothing about this is detectable from the audit alone, which is why
    // the fix is at the storage layer.
    const result = evaluate(transcript([course('AMST203')]), requirements);
    expect(result.results[0]!.satisfied).toBe(false);
    expect(result.results[0]!.have).toBe(0);
  });
});
