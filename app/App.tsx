import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from 'react';
import type { Transcript } from '../lib/types.ts';
import { cumulativeTotals } from '../lib/planner/index.ts';
import { selfCheck } from '../lib/parser/selfCheck.ts';
import { parseTranscriptText } from '../lib/parser/fixedWidth.ts';
import { findSample, majorOf } from './data/samples.ts';
import { UploadPage } from './pages/Upload.tsx';
import { clearEverything, loadTranscript, saveTranscript } from './storage.ts';

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

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8">
      <header className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
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
              className={`text-3xl font-bold tabular-nums ${gpaSuspect ? 'text-amber-600 dark:text-amber-400' : ''}`}
            >
              {totals.gpa.toFixed(3)}
              {gpaSuspect && <span className="ml-1 align-top text-base">⚠</span>}
            </div>
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              {totals.earnedCredits} credits
            </div>
          </div>
        )}
      </header>

      {/* Deliberately above the fold rather than in the footer. Somebody acting
          on a number here without checking it is the failure mode that matters. */}
      <p className="mb-4 rounded-lg border border-amber-400/60 bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:border-amber-700/60 dark:bg-amber-950/30 dark:text-amber-200">
        <strong>Unofficial.</strong> Not affiliated with the University of Maryland. Confirm
        anything here with your advisor and your official degree audit before you register.
      </p>

      {staleParse && (
        <p
          role="alert"
          className="mb-4 rounded-lg border border-sky-400/60 bg-sky-50 px-3 py-2 text-sm text-sky-900 dark:border-sky-700/60 dark:bg-sky-950/30 dark:text-sky-200"
        >
          <strong>TerpTracker got better at reading transcripts since you last used it.</strong>{' '}
          Your saved copy was read by the older version and would have shown requirements as unmet
          that you have actually finished, so it has been cleared. Drop your PDF in again to pick
          up the new checks — it only ever lived in this browser, so there is nothing to recover.
        </p>
      )}

      {sampleId && (
        <p className="mb-4 rounded-lg border border-sky-400/60 bg-sky-50 px-3 py-2 text-sm text-sky-900 dark:border-sky-700/60 dark:bg-sky-950/30 dark:text-sky-200">
          Sample data — an invented <strong>{majorOf(sampleId)?.name ?? 'demo'}</strong> student,
          not your own record. Everything below is real behaviour on invented data; load your own
          transcript from the Transcript tab whenever you like.
        </p>
      )}

      {gpaSuspect && check && (
        <p
          role="alert"
          className="mb-4 rounded-lg border border-amber-500 bg-amber-100 px-3 py-2 text-sm text-amber-900 dark:border-amber-600 dark:bg-amber-950/50 dark:text-amber-100"
        >
          <strong>This GPA does not match your transcript.</strong> We compute{' '}
          {check.computedGpa?.toFixed(3)} but your transcript prints {check.statedGpa?.toFixed(3)},
          so something did not parse correctly. Treat every number here as unreliable until it
          agrees.
        </p>
      )}

      <nav className="mb-6 flex gap-1 border-b border-neutral-200 dark:border-neutral-800">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            disabled={id !== 'upload' && !transcript}
            aria-current={tab === id ? 'page' : undefined}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
              tab === id
                ? 'border-terp-red text-terp-red'
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
              transcript={transcript}
              sampleId={sampleId}
              onParsed={onParsed}
              onForget={onForget}
            />
          )}
          {tab === 'dashboard' && transcript && <DashboardPage transcript={transcript} />}
          {tab === 'requirements' && transcript && <RequirementsPage transcript={transcript} />}
          {tab === 'schedule' && transcript && <SchedulePage transcript={transcript} />}
          {tab === 'planner' && transcript && <PlannerPage transcript={transcript} />}
        </Suspense>
      </main>

      <footer className="mt-12 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800">
        Course data from api.umd.io, grades and ratings from PlanetTerp. Both are run by students
        and volunteers, and both are cached here rather than called on your behalf.
      </footer>
    </div>
  );
}
