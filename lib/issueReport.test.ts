import { describe, expect, it } from 'vitest';
import { buildIssueReport, issueContextFrom } from './issueReport.ts';
import type { IssueContext } from './issueReport.ts';
import type { CourseEntry, Transcript } from './types.ts';

/**
 * A GitHub issue is public forever, so the tests that matter here are the ones
 * that try to get transcript data into the body and fail.
 *
 * The transcript below is deliberately loaded: distinctive course codes, a
 * grade, a course title, and — most importantly — warnings whose `message` and
 * `detail` quote the transcript, because that is what the parser really writes.
 */

function course(courseId: string, title: string, grade: CourseEntry['grade']): CourseEntry {
  return {
    courseId,
    title,
    credits: 3,
    creditsEarned: 3,
    grade,
    gradePoints: 1,
    countsTowardGpa: true,
    source: 'institution',
  };
}

/** Strings that must never appear in a public issue. */
const SECRETS = [
  'CMSC131',
  'ORGANIC CHEMISTRY',
  'Byanjankar',
  '119781326',
  'D-',
  '2.104',
  'CMSC351 was not under any term heading',
  'CMSC420  ORGANIC CHEMISTRY  D-  3.00  3.00  3.00',
];

const loaded: Transcript = {
  major: 'Computer Science',
  terms: [
    {
      id: '2025-Fall',
      season: 'Fall',
      year: 2025,
      courses: [course('CMSC131', 'ORGANIC CHEMISTRY', 'D-')],
      statedTermGpa: 2.104,
      statedTermCredits: 3,
    },
  ],
  nonGpaCredits: [],
  inProgress: [],
  statedCumulativeGpa: 2.104,
  statedCumulativeCredits: 3,
  warnings: [
    // Exactly the shapes the parser produces, quoting the document.
    {
      code: 'unparsed_line',
      message: 'CMSC351 was not under any term heading.',
      page: 2,
      detail: 'CMSC420  ORGANIC CHEMISTRY  D-  3.00  3.00  3.00',
    },
    {
      code: 'gpa_mismatch',
      message: 'We read your GPA as 2.104, but your transcript says 3.900.',
      detail: 'delta 1.796',
    },
    { code: 'gpa_mismatch', message: 'Byanjankar 119781326', detail: 'credit total mismatch' },
  ],
};

describe('issueContextFrom', () => {
  it('keeps only the warning codes, never their messages or details', () => {
    const context = issueContextFrom({ view: 'Dashboard', transcript: loaded });
    expect(context.warningCodes.sort()).toEqual(['gpa_mismatch', 'unparsed_line']);
  });

  it('reports whether the GPA matched, not what it was', () => {
    const context = issueContextFrom({ view: 'Dashboard', transcript: loaded });
    // The transcript states 2.104 and the single D- computes to 0.7.
    expect(context.gpaCheck).toBe('differs');
    expect(JSON.stringify(context)).not.toMatch(/2\.104|0\.7/);
  });

  it('says so when the transcript printed no GPA to compare', () => {
    const context = issueContextFrom({
      view: 'Dashboard',
      transcript: { ...loaded, statedCumulativeGpa: null, warnings: [] },
    });
    expect(context.gpaCheck).toBe('transcript-printed-none');
  });

  it('distinguishes a demo sample from a real upload', () => {
    expect(issueContextFrom({ view: 'Planner', transcript: loaded }).source).toBe('upload');
    const sample = issueContextFrom({
      view: 'Planner',
      transcript: loaded,
      sampleId: 'sample-biology-junior',
    });
    expect(sample).toMatchObject({ source: 'sample', sampleId: 'sample-biology-junior' });
  });

  it('works before anything is loaded', () => {
    expect(() => issueContextFrom({ view: 'Transcript', transcript: null })).not.toThrow();
  });

  it('carries nothing from the transcript beyond codes and the check', () => {
    const serialized = JSON.stringify(issueContextFrom({ view: 'Dashboard', transcript: loaded }));
    for (const secret of SECRETS) {
      expect(serialized, `context leaked ${secret}`).not.toContain(secret);
    }
  });
});

describe('buildIssueReport', () => {
  const report = () =>
    buildIssueReport(issueContextFrom({ view: 'Requirements', transcript: loaded }));

  it('states the view, the source, the warning codes and the GPA check', () => {
    const { body } = report();
    expect(body).toContain('View: Requirements');
    expect(body).toContain('my own uploaded transcript');
    expect(body).toContain('unparsed_line');
    expect(body).toContain('does NOT match');
  });

  it('names the sample when one is loaded', () => {
    const { body } = buildIssueReport(
      issueContextFrom({ view: 'Schedule', transcript: loaded, sampleId: 'sample-finance-senior' }),
    );
    expect(body).toContain('sample-finance-senior');
    expect(body).not.toContain('my own uploaded transcript');
  });

  it('lets no transcript content into the body', () => {
    const { title, body, url } = report();
    for (const secret of SECRETS) {
      expect(body, `body leaked ${secret}`).not.toContain(secret);
      expect(title, `title leaked ${secret}`).not.toContain(secret);
      // The URL carries the body encoded, so check it too.
      expect(decodeURIComponent(url), `url leaked ${secret}`).not.toContain(secret);
    }
  });

  it('tells the reader not to paste transcript contents in themselves', () => {
    expect(report().body).toMatch(/no\s+transcript contents/i);
  });

  it('builds a new-issue url against this repository', () => {
    const { url, title, body } = report();
    expect(url.startsWith('https://github.com/sanirb-debug/UMDTerpTracker/issues/new?')).toBe(true);
    // Whatever is shown to the reader is exactly what the link carries.
    const params = new URL(url).searchParams;
    expect(params.get('title')).toBe(title);
    expect(params.get('body')).toBe(body);
  });

  it('is a pure function of its context, with no transcript in reach', () => {
    // The context type has nowhere to put course data; this pins that the
    // builder reads nothing else.
    const context: IssueContext = {
      view: 'Dashboard',
      source: 'sample',
      sampleId: 'sample-psychology-freshman',
      warningCodes: ['no_terms_found'],
      gpaCheck: 'matches',
    };
    expect(buildIssueReport(context).body).toContain('no_terms_found');
    expect(buildIssueReport(context).body).toBe(buildIssueReport(context).body);
  });
});
