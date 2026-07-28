import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import { parseTranscriptText } from '../lib/parser/fixedWidth.ts';
import { selfCheck } from '../lib/parser/selfCheck.ts';
import { cumulativeTotals } from '../lib/planner/gpa.ts';
import { evaluate, findRequirements } from '../lib/audit/index.ts';
import type { Requirements } from '../lib/audit/index.ts';
import type { CourseEntry, Transcript } from '../lib/types.ts';

/**
 * The demo grid: one invented student per major, each at four points in a
 * four-year degree. Every number here was produced by the generator from the
 * course rows and is asserted exactly, so a regression in the GPA maths or the
 * audit engine fails here rather than quietly showing a student the wrong
 * thing.
 *
 * If one of these changes, the question is not "update the expectation" — it is
 * "which engine changed, and is it right now or was it right before".
 */

const here = dirname(fileURLToPath(import.meta.url));
const requirementsDir = join(here, '..', 'data', 'requirements');
const allRequirements: Requirements[] = readdirSync(requirementsDir)
  .filter((name) => name.endsWith('.json'))
  .map((name) => JSON.parse(readFileSync(join(requirementsDir, name), 'utf8')) as Requirements);

const YEARS = ['freshman', 'sophomore', 'junior', 'senior'] as const;
type Year = (typeof YEARS)[number];

interface MajorExpectation {
  slug: string;
  /** As printed on the transcript; this is what selects the requirements file. */
  major: string;
  /** Cumulative GPA at each year, in order. */
  gpa: Record<Year, number>;
  /**
   * How many requirements are still unmet at each year, or `null` for a major
   * with no requirements file — where the audit is unavailable by design.
   */
  unmet: Record<Year, number> | null;
  /** Total rules in the requirements file, so an emptied file cannot pass. */
  ruleCount: number | null;
}

const MAJORS: MajorExpectation[] = [
  {
    slug: 'information-science',
    major: 'Information Science',
    gpa: { freshman: 3.57, sophomore: 3.534, junior: 3.547, senior: 3.558 },
    unmet: { freshman: 10, sophomore: 6, junior: 3, senior: 2 },
    ruleCount: 22,
  },
  {
    slug: 'computer-science',
    major: 'Computer Science',
    gpa: { freshman: 3.554, sophomore: 3.452, junior: 3.43, senior: 3.453 },
    unmet: { freshman: 12, sophomore: 6, junior: 2, senior: 1 },
    ruleCount: 24,
  },
  {
    slug: 'management',
    major: 'Management',
    gpa: { freshman: 3.53, sophomore: 3.472, junior: 3.482, senior: 3.47 },
    unmet: { freshman: 14, sophomore: 5, junior: 4, senior: 2 },
    ruleCount: 26,
  },
  {
    slug: 'finance',
    major: 'Finance',
    gpa: { freshman: 3.54, sophomore: 3.485, junior: 3.446, senior: 3.439 },
    unmet: { freshman: 17, sophomore: 8, junior: 4, senior: 2 },
    ruleCount: 29,
  },
  {
    slug: 'information-systems',
    major: 'Information Systems',
    gpa: { freshman: 3.56, sophomore: 3.54, junior: 3.502, senior: 3.508 },
    unmet: { freshman: 14, sophomore: 5, junior: 3, senior: 2 },
    ruleCount: 26,
  },
  {
    slug: 'psychology',
    major: 'Psychology',
    gpa: { freshman: 3.593, sophomore: 3.464, junior: 3.443, senior: 3.457 },
    // Deliberately un-authored, so the grid exercises what a student in an
    // un-transcribed major actually sees.
    unmet: null,
    ruleCount: null,
  },
];

function load(slug: string, year: Year): Transcript {
  return parseTranscriptText(readFileSync(join(here, `sample-${slug}-${year}`, 'transcript.txt'), 'utf8'));
}

describe.each(MAJORS)('$major samples', (expectation) => {
  describe.each(YEARS)('%s', (year) => {
    const transcript = load(expectation.slug, year);

    it('parses cleanly, with nothing for a student to second-guess', () => {
      expect(transcript.warnings).toEqual([]);
      expect(transcript.major).toBe(expectation.major);
      expect(transcript.terms.length).toBeGreaterThan(0);
      expect(transcript.inProgress.length).toBeGreaterThan(0);
    });

    it('agrees with the GPA the transcript prints', () => {
      // The generator computes the printed totals; this is the parser
      // recomputing them independently and the two matching.
      const check = selfCheck(transcript);
      expect(check.ok).toBe(true);
      expect(check.statedGpa).toBe(expectation.gpa[year]);
      expect(check.computedCredits).toBe(check.statedCredits);
    });

    it('computes the known cumulative GPA', () => {
      expect(cumulativeTotals(transcript).gpa).toBeCloseTo(expectation.gpa[year], 3);
    });

    if (expectation.unmet === null) {
      it('has no requirements file, so the audit is unavailable rather than empty', () => {
        expect(findRequirements(transcript.major, allRequirements)).toBeUndefined();
      });
    } else {
      it('audits with the expected number of requirements outstanding', () => {
        const found = findRequirements(transcript.major, allRequirements);
        expect(found).toBeDefined();
        const audit = evaluate(transcript, found!);
        // An emptied or mis-wired requirements file would otherwise report zero
        // unmet and look like a finished degree.
        expect(audit.results).toHaveLength(expectation.ruleCount!);
        expect(audit.results.filter((result) => !result.satisfied)).toHaveLength(
          expectation.unmet![year],
        );
      });

      it('never satisfies a rule with no coursework behind it', () => {
        const audit = evaluate(transcript, findRequirements(transcript.major, allRequirements)!);
        for (const result of audit.results.filter((r) => r.satisfied && r.unit !== 'gpa')) {
          expect(result.completed.length, result.label).toBeGreaterThan(0);
        }
      });
    }
  });

  it('is one student over time — later years keep every earlier course', () => {
    const ids = (transcript: Transcript): string[] =>
      transcript.terms.flatMap((term) => term.courses.map((course: CourseEntry) => course.courseId));
    for (let i = 1; i < YEARS.length; i += 1) {
      const earlier = ids(load(expectation.slug, YEARS[i - 1]!));
      const later = new Set(ids(load(expectation.slug, YEARS[i]!)));
      for (const courseId of earlier) {
        expect(later.has(courseId), `${YEARS[i]} is missing ${courseId}`).toBe(true);
      }
    }
  });

  it('never loses credits as the years advance', () => {
    const credits = YEARS.map((year) => cumulativeTotals(load(expectation.slug, year)).earnedCredits);
    expect(credits).toEqual([...credits].sort((a, b) => a - b));
  });

  if (MAJORS.find((m) => m.slug === expectation.slug)?.unmet !== null) {
    it('never has more requirements outstanding than the year before', () => {
      const unmet = YEARS.map((year) => {
        const transcript = load(expectation.slug, year);
        const audit = evaluate(transcript, findRequirements(transcript.major, allRequirements)!);
        return audit.results.filter((result) => !result.satisfied).length;
      });
      expect(unmet).toEqual([...unmet].sort((a, b) => b - a));
    });
  }
});

describe('the demo grid as a whole', () => {
  it('covers every major at every year', () => {
    for (const major of MAJORS) {
      for (const year of YEARS) {
        expect(() => load(major.slug, year), `${major.slug} ${year}`).not.toThrow();
      }
    }
  });

  it('includes at least one major without requirements, so the fallback stays exercised', () => {
    expect(MAJORS.some((major) => major.unmet === null)).toBe(true);
  });

  it('gives each major a distinct set of coursework', () => {
    // "Different course patterns, not the same degree with the codes swapped."
    const senior = MAJORS.map((major) => ({
      slug: major.slug,
      courses: new Set(
        load(major.slug, 'senior').terms.flatMap((term) => term.courses.map((c) => c.courseId)),
      ),
    }));
    for (let i = 0; i < senior.length; i += 1) {
      for (let j = i + 1; j < senior.length; j += 1) {
        const a = senior[i]!;
        const b = senior[j]!;
        const shared = [...a.courses].filter((id) => b.courses.has(id)).length;
        const overlap = shared / Math.min(a.courses.size, b.courses.size);
        expect(overlap, `${a.slug} vs ${b.slug}`).toBeLessThan(0.75);
      }
    }
  });
});
