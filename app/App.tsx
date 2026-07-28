import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from 'react';
import type { Transcript } from '../lib/types.ts';
import { cumulativeTotals } from '../lib/planner/index.ts';
import { UploadPage } from './pages/Upload.tsx';
import { clearEverything, loadTranscript, saveTranscript } from './storage.ts';

// These two pull in the cached catalog and PlanetTerp grade data — a megabyte
// of JSON between them. Nobody who has not uploaded a transcript yet needs it.
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
  const [tab, setTab] = useState<Tab>('upload');

  useEffect(() => {
    const stored = loadTranscript();
    if (stored) {
      setTranscript(stored);
      setTab('dashboard');
    }
  }, []);

  const onParsed = useCallback((parsed: Transcript) => {
    setTranscript(parsed);
    saveTranscript(parsed);
    setTab('dashboard');
  }, []);

  const onForget = useCallback(() => {
    clearEverything();
    setTranscript(null);
    setTab('upload');
  }, []);

  const totals = useMemo(() => (transcript ? cumulativeTotals(transcript) : null), [transcript]);

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8">
      <header className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
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
            <div className="text-3xl font-bold tabular-nums">{totals.gpa.toFixed(3)}</div>
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              {totals.earnedCredits} credits
            </div>
          </div>
        )}
      </header>

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
            <UploadPage transcript={transcript} onParsed={onParsed} onForget={onForget} />
          )}
          {tab === 'dashboard' && transcript && <DashboardPage transcript={transcript} />}
          {tab === 'requirements' && transcript && <RequirementsPage transcript={transcript} />}
          {tab === 'schedule' && transcript && <SchedulePage transcript={transcript} />}
          {tab === 'planner' && transcript && <PlannerPage transcript={transcript} />}
        </Suspense>
      </main>

      <footer className="mt-12 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800">
        Not affiliated with the University of Maryland. Always confirm against your official
        degree audit before you register.
      </footer>
    </div>
  );
}
