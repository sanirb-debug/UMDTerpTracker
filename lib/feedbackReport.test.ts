import { describe, expect, it } from 'vitest';
import {
  EMPTY_ANSWERS,
  NOTE_MAX,
  buildFeedbackReport,
  labelsFor,
  normalizeNote,
} from './feedbackReport.ts';
import type { AuditMatched, FeedbackAnswers, GpaMatched, Missing, UsedFor } from './feedbackReport.ts';
import { issueContextFrom } from './issueReport.ts';
import type { CourseEntry, Transcript } from './types.ts';

/**
 * The feedback form opens a public, permanent GitHub issue, so the tests that
 * matter are the ones that try to get transcript data into it and fail.
 *
 * The transcript below is deliberately loaded, and its warnings quote the
 * document the way the real parser's do — `unparsed_line` carries a whole
 * course row, `gpa_mismatch` states actual GPAs.
 */

function course(courseId: string, title: string, grade: CourseEntry['grade']): CourseEntry {
  return {
    courseId,
    title,
    credits: 3,
    creditsEarned: 3,
    grade,
    gradePoints: 0.7,
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
  'secretstudent@terpmail.umd.edu',
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
    {
      code: 'unparsed_line',
      message: 'CMSC131 was not under any term heading.',
      detail: 'CMSC420  ORGANIC CHEMISTRY  D-  3.00  3.00  3.00',
    },
    {
      code: 'gpa_mismatch',
      message: 'Byanjankar 119781326 secretstudent@terpmail.umd.edu — we read 2.104',
      detail: 'delta 1.796',
    },
  ],
};

const context = () => issueContextFrom({ view: 'Requirements', transcript: loaded });

const GPA_ALL: GpaMatched[] = ['yes', 'no', 'not-sure'];
const AUDIT_ALL: AuditMatched[] = ['yes', 'no', 'didnt-check', 'not-applicable'];
const USED_ALL: UsedFor[] = [
  'check-gpa',
  'plan-semester',
  'hit-target',
  'check-requirements',
  'looking',
];
const MISSING_ALL: Missing[] = ['major', 'minor', 'pathway', 'schedule-planning', 'other'];

describe('no transcript-derived value can reach the issue', () => {
  it('leaks nothing for any combination of answers', () => {
    // Every single-choice pair against every multi-select, so no reachable
    // answer state is left untested.
    for (const gpaMatched of [...GPA_ALL, null]) {
      for (const auditMatched of [...AUDIT_ALL, null]) {
        const answers: FeedbackAnswers = {
          gpaMatched,
          auditMatched,
          usedFor: USED_ALL,
          missing: MISSING_ALL,
          note: '',
        };
        const { title, body, url, labels } = buildFeedbackReport(context(), answers);
        const haystack = `${title}\n${body}\n${decodeURIComponent(url)}\n${labels.join(' ')}`;
        for (const secret of SECRETS) {
          expect(haystack, `leaked ${secret} for ${gpaMatched}/${auditMatched}`).not.toContain(
            secret,
          );
        }
      }
    }
  });

  it('carries the warning codes but never the warning messages', () => {
    const { body } = buildFeedbackReport(context(), EMPTY_ANSWERS);
    // The codes are the whole point of attaching anything.
    expect(body).toContain('unparsed_line');
    expect(body).toContain('gpa_mismatch');
    // The messages quote the transcript, so they stay behind.
    expect(body).not.toContain('was not under any term heading');
    expect(body).not.toContain('delta 1.796');
  });

  it('reports whether the GPA reconciled, never the numbers', () => {
    const { body } = buildFeedbackReport(context(), EMPTY_ANSWERS);
    expect(body).toContain('computed GPA did NOT match the printed GPA');
    expect(body).not.toMatch(/2\.104|1\.796/);
  });

  it('attaches only the four permitted facts', () => {
    const { body } = buildFeedbackReport(context(), EMPTY_ANSWERS);
    const attached = body.slice(body.indexOf('## Automatically attached'));
    // View, sample-vs-upload, parse warnings, self-check. Nothing else.
    expect(attached).toContain('- View: Requirements');
    expect(attached).toContain('own uploaded transcript');
    expect(attached).toContain('- Parse warnings:');
    expect(attached).toContain('- Self-check:');
    expect(attached.split('\n').filter((line) => line.startsWith('- '))).toHaveLength(4);
  });

  it('names the sample rather than the reader when one is loaded', () => {
    const withSample = issueContextFrom({
      view: 'Planner',
      transcript: loaded,
      sampleId: 'sample-biology-junior',
    });
    const { body } = buildFeedbackReport(withSample, EMPTY_ANSWERS);
    expect(body).toContain('sample-biology-junior');
    expect(body).not.toContain('own uploaded transcript');
  });
});

describe('the free-text answer', () => {
  it('is capped at 300 characters even when the DOM limit is bypassed', () => {
    const answers = { ...EMPTY_ANSWERS, note: 'x'.repeat(1000) };
    const { body } = buildFeedbackReport(context(), answers);
    expect(normalizeNote(answers.note)).toHaveLength(NOTE_MAX);
    expect(body).toContain('x'.repeat(NOTE_MAX));
    expect(body).not.toContain('x'.repeat(NOTE_MAX + 1));
  });

  it('collapses newlines so one answer stays one block', () => {
    expect(normalizeNote('  first\n\nsecond  ')).toBe('first second');
  });

  it('says so plainly when nothing was written', () => {
    expect(buildFeedbackReport(context(), EMPTY_ANSWERS).body).toContain('_nothing added_');
  });

  it('is the reader’s own words and is passed through unaltered otherwise', () => {
    // Not sanitised: the reader is shown the exact body and chooses to open it.
    // Quietly rewriting what somebody typed would make the preview a lie.
    const note = 'The requirements page missed my minor.';
    expect(buildFeedbackReport(context(), { ...EMPTY_ANSWERS, note }).body).toContain(note);
  });
});

describe('labels make the correctness signal filterable', () => {
  it('labels a reported GPA mismatch', () => {
    expect(labelsFor({ ...EMPTY_ANSWERS, gpaMatched: 'no' })).toContain('gpa-mismatch-reported');
    expect(labelsFor({ ...EMPTY_ANSWERS, gpaMatched: 'yes' })).not.toContain(
      'gpa-mismatch-reported',
    );
  });

  it('labels a reported audit mismatch', () => {
    expect(labelsFor({ ...EMPTY_ANSWERS, auditMatched: 'no' })).toContain(
      'audit-mismatch-reported',
    );
    expect(labelsFor({ ...EMPTY_ANSWERS, auditMatched: 'didnt-check' })).not.toContain(
      'audit-mismatch-reported',
    );
  });

  it('labels a coverage request', () => {
    expect(labelsFor({ ...EMPTY_ANSWERS, missing: ['pathway'] })).toContain('coverage-request');
  });

  it('always carries the feedback label, and puts them in the url', () => {
    const { url, labels } = buildFeedbackReport(context(), {
      ...EMPTY_ANSWERS,
      gpaMatched: 'no',
      auditMatched: 'no',
    });
    expect(labels).toEqual([
      'feedback',
      'gpa-mismatch-reported',
      'audit-mismatch-reported',
    ]);
    expect(new URL(url).searchParams.get('labels')).toBe(labels.join(','));
  });
});

describe('the url is exactly what the reader was shown', () => {
  it('carries the same title and body as the preview', () => {
    const report = buildFeedbackReport(context(), {
      gpaMatched: 'no',
      auditMatched: 'yes',
      usedFor: ['check-gpa'],
      missing: ['minor'],
      note: 'anything',
    });
    const params = new URL(report.url).searchParams;
    expect(params.get('title')).toBe(report.title);
    expect(params.get('body')).toBe(report.body);
    expect(report.url.startsWith('https://github.com/sanirb-debug/UMDTerpTracker/issues/new?')).toBe(
      true,
    );
  });
});
