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
 * four-year degree. Every cumulative GPA is asserted exactly, so a regression
 * in the GPA maths fails here rather than quietly showing a student the wrong
 * number.
 *
 * Most majors have no requirements file. That is the intended state, not a
 * gap to be filled in by guessing — a degree audit is only as good as somebody
 * having transcribed the catalog page, and those majors assert the fallback
 * instead of an audit.
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
  gpa: Record<Year, number>;
  /** Unmet requirement counts, or null where no requirements file exists. */
  unmet: Record<Year, number> | null;
  ruleCount: number | null;
}

const MAJORS: MajorExpectation[] = [
  {
    slug: 'information-science',
    major: 'Information Science',
    gpa: { freshman: 3.57, sophomore: 3.534, junior: 3.547, senior: 3.558 },
    unmet: { freshman: 9, sophomore: 6, junior: 3, senior: 2 },
    ruleCount: 22,
  },
  {
    slug: 'computer-science',
    major: 'Computer Science',
    gpa: { freshman: 3.554, sophomore: 3.452, junior: 3.43, senior: 3.453 },
    unmet: { freshman: 12, sophomore: 8, junior: 5, senior: 3 },
    ruleCount: 24,
  },
  {
    slug: 'management',
    major: 'Management',
    gpa: { freshman: 3.53, sophomore: 3.472, junior: 3.482, senior: 3.47 },
    unmet: { freshman: 13, sophomore: 7, junior: 6, senior: 3 },
    ruleCount: 26,
  },
  {
    slug: 'finance',
    major: 'Finance',
    gpa: { freshman: 3.54, sophomore: 3.485, junior: 3.446, senior: 3.439 },
    unmet: { freshman: 16, sophomore: 11, junior: 7, senior: 5 },
    ruleCount: 29,
  },
  {
    slug: 'information-systems',
    major: 'Information Systems',
    gpa: { freshman: 3.56, sophomore: 3.54, junior: 3.502, senior: 3.508 },
    unmet: { freshman: 13, sophomore: 7, junior: 5, senior: 4 },
    ruleCount: 26,
  },
  {
    slug: 'psychology',
    major: 'Psychology',
    gpa: { freshman: 3.593, sophomore: 3.464, junior: 3.443, senior: 3.457 },
    unmet: null,
    ruleCount: null,
  },
  {
    slug: 'criminology',
    major: 'Criminology and Criminal Justice',
    gpa: { freshman: 3.5, sophomore: 3.441, junior: 3.417, senior: 3.415 },
    unmet: null,
    ruleCount: null,
  },
  {
    slug: 'economics',
    major: 'Economics',
    gpa: { freshman: 3.413, sophomore: 3.354, junior: 3.369, senior: 3.372 },
    unmet: null,
    ruleCount: null,
  },
  {
    slug: 'biology',
    major: 'Biological Sciences',
    gpa: { freshman: 3.417, sophomore: 3.402, junior: 3.386, senior: 3.375 },
    unmet: null,
    ruleCount: null,
  },
  {
    slug: 'government',
    major: 'Government and Politics',
    gpa: { freshman: 3.46, sophomore: 3.421, junior: 3.403, senior: 3.403 },
    unmet: null,
    ruleCount: null,
  },
  {
    slug: 'mechanical-engineering',
    major: 'Mechanical Engineering',
    gpa: { freshman: 3.319, sophomore: 3.341, junior: 3.337, senior: 3.336 },
    unmet: null,
    ruleCount: null,
  },
  {
    slug: 'communication',
    major: 'Communication',
    gpa: { freshman: 3.43, sophomore: 3.426, junior: 3.417, senior: 3.415 },
    unmet: null,
    ruleCount: null,
  },
  {
    slug: 'kinesiology',
    major: 'Kinesiology',
    gpa: { freshman: 3.366, sophomore: 3.384, junior: 3.359, senior: 3.358 },
    unmet: null,
    ruleCount: null,
  },
];

function load(slug: string, year: Year): Transcript {
  return parseTranscriptText(
    readFileSync(join(here, `sample-${slug}-${year}`, 'transcript.txt'), 'utf8'),
  );
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

      it('still produces a usable GPA and planner input without one', () => {
        // Graceful degradation is the point: only the audit is missing.
        const totals = cumulativeTotals(transcript);
        expect(totals.gpa).toBeGreaterThan(0);
        expect(totals.gpaCredits).toBeGreaterThan(0);
        expect(totals.earnedCredits).toBeGreaterThan(0);
      });
    } else {
      it('audits with the expected number of requirements outstanding', () => {
        const found = findRequirements(transcript.major, allRequirements);
        expect(found).toBeDefined();
        const audit = evaluate(transcript, found!);
        expect(audit.results).toHaveLength(expectation.ruleCount!);
        expect(audit.results.filter((result) => !result.satisfied)).toHaveLength(
          expectation.unmet![year],
        );
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

  it('uses course codes from its own department', () => {
    // A major that is another major with the codes swapped would fail this.
    const prefix = expectation.slug === 'information-science' ? 'INST'
      : expectation.slug === 'computer-science' ? 'CMSC'
      : expectation.slug === 'criminology' ? 'CCJS'
      : expectation.slug === 'economics' ? 'ECON'
      : expectation.slug === 'biology' ? 'BSCI'
      : expectation.slug === 'government' ? 'GVPT'
      : expectation.slug === 'mechanical-engineering' ? 'ENME'
      : expectation.slug === 'communication' ? 'COMM'
      : expectation.slug === 'kinesiology' ? 'KNES'
      : expectation.slug === 'psychology' ? 'PSYC'
      : 'BMGT';
    const senior = load(expectation.slug, 'senior');
    const own = senior.terms
      .flatMap((term) => term.courses)
      .filter((course) => course.courseId.startsWith(prefix));
    expect(own.length, `${expectation.slug} should carry ${prefix} coursework`).toBeGreaterThanOrEqual(8);
  });
});

describe('the demo grid as a whole', () => {
  it('covers every major at every year', () => {
    for (const major of MAJORS) {
      for (const year of YEARS) {
        expect(() => load(major.slug, year), `${major.slug} ${year}`).not.toThrow();
      }
    }
  });

  it('has majors both with and without requirements, so both paths stay exercised', () => {
    expect(MAJORS.some((major) => major.unmet !== null)).toBe(true);
    expect(MAJORS.some((major) => major.unmet === null)).toBe(true);
  });

  it('gives each major a distinct set of coursework', () => {
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
