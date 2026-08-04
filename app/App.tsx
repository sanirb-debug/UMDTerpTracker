import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from 'react';
import type { Transcript } from '../lib/types.ts';
import type { IssueView } from '../lib/issueReport.ts';
import { cumulativeTotals } from '../lib/planner/index.ts';
import { selfCheck } from '../lib/parser/selfCheck.ts';
import { parseTranscriptText } from '../lib/parser/fixedWidth.ts';
import { findSample, majorOf } from './data/samples.ts';
import { SomethingWrong } from './components/SomethingWrong.tsx';
import { Feedback } from './components/Feedback.tsx';
import { Testudo } from './components/Testudo.tsx';
import { UploadPage } from './pages/Upload.tsx';
import {
  clearEverything,
  feedbackPromptSeen,
  loadTranscript,
  markFeedbackPromptSeen,
  saveTranscript,
} from './storage.ts';

// These pull in the cached catalog, grade and section data — well over a
// megabyte between them. Nobody who has not loaded a transcript yet needs it.
const DashboardPage = lazy(() =>
  import('./pages/Dashboard.tsx').then((module) => ({ default: module.DashboardPage })),
);
const PlannerPage = lazy(() =>
  import('./pages/Planner.tsx').then((module) => ({ default: module.PlannerPage })),
);
const SchedulePage = lazy(() =>
  import('./pages/Schedule.tsx').then((module) => ({ default: module.SchedulePage })),
);
const RequirementsPage = lazy(() =>
  import('./pages/Requirements.tsx').then((module) => ({ default: module.RequirementsPage })),
);

type Tab = 'upload' | 'dashboard' | 'requirements' | 'schedule' | 'planner';

/** Tab ids as the bug report names them. */
const VIEW_FOR_TAB: Record<Tab, IssueView> = {
  dashboard: 'Dashboard',
  requirements: 'Requirements',
  schedule: 'Schedule',
  planner: 'Planner',
  upload: 'Transcript',
};

const TABS: Array<{ id: Tab; label: string }> = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'planner', label: 'Planner' },
  { id: 'upload', label: 'Transcript' },
];

export function App() {
  const [transcript, setTranscript] = useState<Transcript | null>(null);
  const [sampleId, setSampleId] = useState<string | undefined>(undefined);
  const [staleParse, setStaleParse] = useState(false);
  const [tab, setTab] = useState<Tab>('upload');
  const [askForFeedback, setAskForFeedback] = useState(false);

  useEffect(() => {
    const stored = loadTranscript();
    if (stored.transcript) {
      setTranscript(stored.transcript);
      setSampleId(stored.sampleId);
      setTab('dashboard');
      return;
    }
    if (!stored.stale) return;
    const sample = findSample(stored.sampleId);
    if (sample) {
      // A sample can be rebuilt from the text we ship, so there is nothing to
      // ask the user about.
      const parsed = parseTranscriptText(sample.text);
      setTranscript(parsed);
      setSampleId(sample.id);
      saveTranscript(parsed, sample.id);
      setTab('dashboard');
      return;
    }
    // A real transcript cannot be re-derived — the PDF was never kept.
    setStaleParse(true);
  }, []);

  const onParsed = useCallback((parsed: Transcript, sample?: string) => {
    setTranscript(parsed);
    setSampleId(sample);
    setStaleParse(false);
    saveTranscript(parsed, sample);
    setTab('dashboard');
  }, []);

  const changeTab = useCallback((next: Tab) => {
    setTab((current) => {
      const finishedASession = current === 'requirements' || current === 'planner';
      if (finishedASession && next !== current && !feedbackPromptSeen()) {
        markFeedbackPromptSeen();
        setAskForFeedback(true);
      }
      return next;
    });
  }, []);

  const onForget = useCallback(() => {
    clearEverything();
    setTranscript(null);
    setSampleId(undefined);
    setTab('upload');
  }, []);

  const totals = useMemo(() => (transcript ? cumulativeTotals(transcript) : null), [transcript]);
  const check = useMemo(() => (transcript ? selfCheck(transcript) : null), [transcript]);
  // A GPA we cannot reconcile against the transcript's own is not a GPA worth
  // printing confidently. See the banner below and the detail on the dashboard.
  const gpaSuspect = Boolean(check && check.statedGpa !== null && !check.ok);

  // `min-h-dvh` over `min-h-screen`: on iOS Safari `100vh` is the height with
  // the toolbars hidden, so a `100vh` page is always taller than the window and
  // its last row sits under the address bar. `dvh` tracks the real viewport as
  // the toolbars come and go. Both are set, in that order, so Safari before
  // 15.4 keeps the `vh` it understands and everything newer takes the `dvh`.
  return (
    <div className="pad-safe-x mx-auto min-h-screen min-h-dvh max-w-4xl py-8">
      <header className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Terp<span className="text-terp-red">Tracker</span>
          </h1>
          {/* The major comes off the transcript itself, so it is right without asking. */}
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {transcript?.major ?? 'Your transcript, your GPA, and what you need next'} — all in
            this tab.
          </p>
        </div>
        {totals?.gpa != null && (
          <div className="text-right">
            <div
              className={`text-3xl font-bold tabular-nums ${gpaSuspect ? 'text-caution-600 dark:text-caution-400' : ''}`}
            >
              {totals.gpa.toFixed(3)}
              {gpaSuspect && <span className="ml-1 align-top text-base">⚠</span>}
            </div>
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              {totals.earnedCredits} credits
            </div>
            <SomethingWrong
              view={VIEW_FOR_TAB[tab]}
              transcript={transcript}
              sampleId={sampleId}
              className="mt-1"
            />
          </div>
        )}
      </header>

      {/* Deliberately above the fold rather than in the footer. Somebody acting
          on a number here without checking it is the failure mode that matters. */}
      <p className="mb-4 rounded-lg border border-caution-400/60 bg-caution-50 px-3 py-2 text-sm text-caution-900 dark:border-caution-700/60 dark:bg-caution-950/30 dark:text-caution-200">
        <strong>Unofficial.</strong> Not affiliated with the University of Maryland. Confirm
        anything here with your advisor and your official degree audit before you register.
      </p>

      {staleParse && (
        <p
          role="alert"
          className="mb-4 rounded-lg border border-info-400/60 bg-info-50 px-3 py-2 text-sm text-info-900 dark:border-info-700/60 dark:bg-info-950/30 dark:text-info-200"
        >
          <strong>TerpTracker got better at reading transcripts since you last used it.</strong>{' '}
          Your saved copy was read by the older version and would have shown requirements as unmet
          that you have actually finished, so it has been cleared. Drop your PDF in again to pick
          up the new checks — it only ever lived in this browser, so there is nothing to recover.
        </p>
      )}

      {sampleId && (
        <p className="mb-4 rounded-lg border border-info-400/60 bg-info-50 px-3 py-2 text-sm text-info-900 dark:border-info-700/60 dark:bg-info-950/30 dark:text-info-200">
          Sample data — an invented <strong>{majorOf(sampleId)?.name ?? 'demo'}</strong> student,
          not your own record. Everything below is real behaviour on invented data; load your own
          transcript from the Transcript tab whenever you like.
        </p>
      )}

      {gpaSuspect && check && (
        <p
          role="alert"
          className="mb-4 rounded-lg border border-caution-500 bg-caution-100 px-3 py-2 text-sm text-caution-900 dark:border-caution-600 dark:bg-caution-950/50 dark:text-caution-100"
        >
          <strong>This GPA does not match your transcript.</strong> We compute{' '}
          {check.computedGpa?.toFixed(3)} but your transcript prints {check.statedGpa?.toFixed(3)},
          so something did not parse correctly. Treat every number here as unreliable until it
          agrees.
        </p>
      )}

      <nav className="mb-6 flex flex-wrap gap-1 border-b border-neutral-200 dark:border-neutral-800 sm:flex-nowrap">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => changeTab(id)}
            disabled={id !== 'upload' && !transcript}
            aria-current={tab === id ? 'page' : undefined}
            className={`-mb-px min-h-11 border-b-2 px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-0 sm:px-4 ${
              tab === id
                ? 'border-accent-600 text-accent-700 dark:text-accent-400'
                : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      <main>
        <Suspense fallback={<p className="text-sm text-neutral-500">Loading…</p>}>
          {tab === 'upload' && (
            <UploadPage
              sampleId={sampleId}
              onParsed={onParsed}
              onForget={onForget}
            />
          )}
          {tab === 'dashboard' && transcript && <DashboardPage transcript={transcript} />}
          {tab === 'requirements' && transcript && (
            <RequirementsPage transcript={transcript} sampleId={sampleId} />
          )}
          {tab === 'schedule' && transcript && <SchedulePage transcript={transcript} />}
          {tab === 'planner' && transcript && <PlannerPage transcript={transcript} />}
        </Suspense>
      </main>

      {askForFeedback && (
        <section className="mt-8 rounded-lg border border-info-300 bg-info-50 p-4 dark:border-info-800 dark:bg-info-950/30">
          <p className="text-sm">
            <strong>Did this get it right?</strong> A few taps would help — especially whether the
            GPA and the requirements matched your official records.
          </p>
          <Feedback
            view={VIEW_FOR_TAB[tab]}
            transcript={transcript}
            sampleId={sampleId}
            startOpen
            onClose={() => setAskForFeedback(false)}
          />
          <button
            type="button"
            className="mt-2 text-xs text-neutral-500 underline decoration-dotted underline-offset-2"
            onClick={() => setAskForFeedback(false)}
          >
            No thanks
          </button>
        </section>
      )}

      <footer className="mt-12 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800">
        Course data from api.umd.io, grades and ratings from PlanetTerp. Both are run by students
        and volunteers, and both are cached here rather than called on your behalf.
        <div className="mt-2">
          <Feedback view={VIEW_FOR_TAB[tab]} transcript={transcript} sampleId={sampleId} />
        </div>
      </footer>

      {/* Last in the DOM, so last in the tab order — somebody driving this by
          keyboard passes the turtle on the way out rather than through it. */}
      <Testudo />
    </div>
  );
}
