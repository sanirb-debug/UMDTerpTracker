import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import { parseTranscriptText } from '../lib/parser/fixedWidth.ts';
import { selfCheck } from '../lib/parser/selfCheck.ts';
import { cumulativeTotals } from '../lib/planner/gpa.ts';
import { evaluate, findRequirements } from '../lib/audit/index.ts';
import type { Requirements } from '../lib/audit/index.ts';
import type { CourseEntry, Transcript } from '../lib/types.ts';
import requirementsJson from '../data/requirements/inst-bs-2026.json';

/**
 * The four demo transcripts are one invented Information Science student at
 * four points in a four-year degree. Every number below was worked out from
 * the course rows and is asserted exactly, so a regression in the GPA maths or
 * the audit engine fails here rather than quietly showing a student the wrong
 * thing.
 *
 * If one of these changes, the question is not "update the expectation" — it is
 * "which engine changed, and is it right now or was it right before".
 */

const here = dirname(fileURLToPath(import.meta.url));
const requirements = [requirementsJson as unknown as Requirements];

function load(slug: string): Transcript {
  return parseTranscriptText(readFileSync(join(here, slug, 'transcript.txt'), 'utf8'));
}

interface Expectation {
  slug: string;
  label: string;
  /** Cumulative GPA over institution coursework. */
  gpa: number;
  /** Credits the GPA is averaged over. */
  gpaCredits: number;
  /** Earned credits including the 6 transfer credits. */
  earnedCredits: number;
  terms: number;
  registered: number;
  requirementsMet: number;
  /** Named courses still outstanding, in audit order. */
  remainingCourses: string[];
  /** True once everything left is already on the schedule. */
  coveredByInProgress: boolean;
}

const SNAPSHOTS: Expectation[] = [
  {
    slug: 'sample-1-freshman',
    label: 'Freshman',
    // 107.10 quality points over 30 graded credits.
    gpa: 3.57,
    gpaCredits: 30,
    earnedCredits: 36,
    terms: 2,
    registered: 5,
    requirementsMet: 12,
    remainingCourses: ['INST326', 'INST327', 'INST335', 'INST346', 'INST352', 'INST362', 'INST490'],
    coveredByInProgress: false,
  },
  {
    slug: 'sample-2-sophomore',
    label: 'Sophomore',
    gpa: 3.534,
    gpaCredits: 58,
    earnedCredits: 64,
    terms: 4,
    registered: 5,
    requirementsMet: 16,
    remainingCourses: ['INST352', 'INST362', 'INST490'],
    coveredByInProgress: false,
  },
  {
    slug: 'sample-3-junior',
    label: 'Junior',
    gpa: 3.547,
    gpaCredits: 88,
    earnedCredits: 94,
    terms: 6,
    registered: 6,
    requirementsMet: 19,
    remainingCourses: ['INST490'],
    coveredByInProgress: false,
  },
  {
    slug: 'sample-4-senior',
    label: 'Senior',
    gpa: 3.558,
    gpaCredits: 106,
    earnedCredits: 112,
    terms: 7,
    registered: 5,
    requirementsMet: 20,
    remainingCourses: [],
    // The capstone and the last credits are all on the spring schedule.
    coveredByInProgress: true,
  },
];

describe.each(SNAPSHOTS)('$label sample', (snapshot) => {
  const transcript = load(snapshot.slug);

  it('parses cleanly, with no warnings for a student to second-guess', () => {
    expect(transcript.warnings).toEqual([]);
    expect(transcript.major).toBe('Information Science');
    expect(transcript.terms).toHaveLength(snapshot.terms);
    expect(transcript.inProgress).toHaveLength(snapshot.registered);
  });

  it('agrees with the GPA the transcript prints', () => {
    // The demo is generated with its own totals; this is the parser recomputing
    // them independently and the two matching.
    const check = selfCheck(transcript);
    expect(check.ok).toBe(true);
    expect(check.statedGpa).toBe(snapshot.gpa);
    expect(check.computedCredits).toBe(check.statedCredits);
  });

  it('computes the known cumulative GPA and credit totals', () => {
    const totals = cumulativeTotals(transcript);
    expect(totals.gpa).toBeCloseTo(snapshot.gpa, 3);
    expect(totals.gpaCredits).toBe(snapshot.gpaCredits);
    expect(totals.earnedCredits).toBe(snapshot.earnedCredits);
  });

  it('audits against the Information Science requirements', () => {
    const found = findRequirements(transcript.major, requirements);
    expect(found?.id).toBe('inst-bs-2026');

    const audit = evaluate(transcript, found!);
    // An empty or mis-wired audit is worse than no sample, so pin the count.
    expect(audit.results).toHaveLength(22);
    expect(audit.results.filter((result) => result.satisfied)).toHaveLength(
      snapshot.requirementsMet,
    );
    expect(audit.remainingCourses).toEqual(snapshot.remainingCourses);
    expect(audit.satisfiedIfInProgressPass).toBe(snapshot.coveredByInProgress);
  });

  it('has every requirement rule report against real coursework', () => {
    const audit = evaluate(load(snapshot.slug), findRequirements(transcript.major, requirements)!);
    // Nothing should be satisfied by accident with zero courses behind it.
    for (const result of audit.results.filter((r) => r.satisfied && r.unit !== 'gpa')) {
      expect(result.completed.length, result.label).toBeGreaterThan(0);
    }
  });
});

describe('the four samples are one student over time', () => {
  const parsed = SNAPSHOTS.map((snapshot) => ({ snapshot, transcript: load(snapshot.slug) }));

  const completedIds = (transcript: Transcript): string[] =>
    transcript.terms.flatMap((term) => term.courses.map((course: CourseEntry) => course.courseId));

  it('each snapshot keeps every course from the one before it', () => {
    for (let i = 1; i < parsed.length; i += 1) {
      const earlier = completedIds(parsed[i - 1]!.transcript);
      const later = new Set(completedIds(parsed[i]!.transcript));
      for (const courseId of earlier) {
        expect(later.has(courseId), `${parsed[i]!.snapshot.label} is missing ${courseId}`).toBe(true);
      }
    }
  });

  it('never loses ground on credits or requirements met', () => {
    const credits = parsed.map(({ transcript }) => cumulativeTotals(transcript).earnedCredits);
    const met = parsed.map(({ transcript }) => {
      const audit = evaluate(transcript, findRequirements(transcript.major, requirements)!);
      return audit.results.filter((r) => r.satisfied).length;
    });
    expect(credits).toEqual([...credits].sort((a, b) => a - b));
    expect(met).toEqual([...met].sort((a, b) => a - b));
  });

  it('carries the same transfer credit throughout', () => {
    for (const { transcript } of parsed) {
      expect(transcript.nonGpaCredits.map((c) => c.courseId)).toEqual(['MATH120', 'PSYC100']);
    }
  });
});
