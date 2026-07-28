import { useCallback, useRef, useState } from 'react';
import type { Transcript } from '../../lib/types.ts';
import { ScannedPdfError } from '../../lib/parser/errors.ts';
import type { ParsePhase } from '../parsing/client.ts';
import { parseTranscriptText } from '../../lib/parser/fixedWidth.ts';
import { SAMPLE_MAJORS, SAMPLE_YEARS, sampleFor } from '../data/samples.ts';

interface Props {
  transcript: Transcript | null;
  sampleId?: string;
  onParsed: (transcript: Transcript, sampleId?: string) => void;
  onForget: () => void;
}

export function UploadPage({ transcript, sampleId, onParsed, onForget }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<ParsePhase | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    async (file: File) => {
      setError(null);
      setBusy(true);
      setProgress({ phase: 'reading' });
      try {
        // The parse runs in a worker, so this await no longer blocks the page
        // — the spinner below actually spins while it happens.
        const { parseTranscriptFile } = await import('../parsing/client.ts');
        const parsed = await parseTranscriptFile(file, setProgress);
        if (parsed.terms.length === 0) {
          setError(
            'No semesters turned up in that PDF. Make sure it is the unofficial transcript from Testudo.',
          );
          return;
        }
        onParsed(parsed);
      } catch (cause) {
        setError(
          cause instanceof ScannedPdfError
            ? cause.message
            : `That PDF could not be read. ${cause instanceof Error ? cause.message : ''}`.trim(),
        );
      } finally {
        setBusy(false);
        setProgress(null);
      }
    },
    [onParsed],
  );

  const loadSample = useCallback(
    (id: string, text: string) => {
      setError(null);
      // Runs the same parser and self-check a real upload does, so what you see
      // here is what the app will do with yours.
      onParsed(parseTranscriptText(text), id);
    },
    [onParsed],
  );

  return (
    <div className="space-y-6">
      {/*
        Tap first, drag second.
        "Drop your transcript here" is instructions for a gesture a phone does
        not have, and it was the biggest thing on the page. The button is now
        the affordance and the drop zone is a desktop enhancement: the dashed
        border and the wording about dragging only appear from `sm` up, where a
        pointer exists. The drop handlers stay on at every width — they simply
        never fire on a touch device.
      */}
      <section
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          const file = event.dataTransfer.files[0];
          if (file) void handleFile(file);
        }}
        className={`rounded-xl border p-5 text-center transition-colors sm:border-2 sm:border-dashed sm:p-10 ${
          dragging
            ? 'border-terp-red bg-red-50 dark:bg-red-950/20'
            : 'border-neutral-200 dark:border-neutral-800 sm:border-neutral-300 sm:dark:border-neutral-700'
        }`}
      >
        <p className="mb-1 text-lg font-semibold">
          <span className="sm:hidden">Add your unofficial transcript</span>
          <span className="hidden sm:inline">Drop your unofficial transcript here</span>
        </p>
        <p className="mb-5 text-sm text-neutral-500 dark:text-neutral-400">
          Testudo → Academics → Unofficial Transcript → save as PDF
        </p>

        {/*
          A real <label> for the input, not a button that calls .click() on it.
          On iOS Safari the label is what reliably opens the picker — and the
          picker's "Browse" tab is the Files app, so a PDF saved from Testudo to
          iCloud Drive or Downloads is reachable. `accept` stays broad enough
          that Files does not grey the file out.
        */}
        <input
          ref={inputRef}
          id="transcript-file"
          type="file"
          accept="application/pdf,.pdf"
          className="sr-only"
          disabled={busy}
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void handleFile(file);
            event.target.value = '';
          }}
        />
        {busy ? (
          <ParsingStatus progress={progress} />
        ) : (
          <label
            htmlFor="transcript-file"
            className="button w-full cursor-pointer text-base focus-within:ring-2 focus-within:ring-terp-red focus-within:ring-offset-2 sm:w-auto sm:text-sm dark:focus-within:ring-offset-neutral-950"
          >
            Choose file
          </label>
        )}
        <p className="mt-3 hidden text-xs text-neutral-500 sm:block dark:text-neutral-400">
          or drag it onto this box
        </p>
      </section>

      <section className="card">
        <h2 className="font-semibold">See how it works</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          Rather not hand your transcript to a site you have never heard of? Reasonable. Pick a
          major and a year — no file, no upload.
        </p>

        {/*
          Narrow screens get two native selects instead of the grid.

          Thirteen majors as columns is 1318px of table. On a 375px screen that
          is a 3.5-screen sideways scroll through a grid whose row and column
          headers are the only thing that makes a cell mean anything, and the
          sticky headers do not survive the trip. Two selects say the same thing
          in one screen, and the iOS picker wheel is a better control than
          anything that could be built here.
        */}
        <SampleChooser sampleId={sampleId} onLoad={loadSample} />

        <div className="mt-4 hidden overflow-x-auto sm:block">
          <table className="w-full border-separate border-spacing-1 text-sm">
            <caption className="sr-only">
              Sample transcripts by major and class year. Majors marked &ldquo;no audit&rdquo; have
              no degree requirements on file.
            </caption>
            <thead>
              <tr>
                <th className="sticky left-0 z-10 w-24 bg-white dark:bg-neutral-900" />
                {SAMPLE_MAJORS.map((major) => (
                  <th key={major.slug} scope="col" className="px-1 pb-1 align-bottom">
                    <span className="block whitespace-nowrap text-xs font-semibold">
                      {major.short}
                    </span>
                    <span
                      className={`block whitespace-nowrap text-[10px] font-normal ${
                        major.hasRequirements
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-neutral-400 dark:text-neutral-500'
                      }`}
                    >
                      {major.hasRequirements ? 'audit' : 'no audit'}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SAMPLE_YEARS.map((year) => (
                <tr key={year.slug}>
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-white pr-2 text-right text-xs font-medium text-neutral-500 dark:bg-neutral-900"
                  >
                    {year.label}
                  </th>
                  {SAMPLE_MAJORS.map((major) => {
                    const sample = sampleFor(major.slug, year.slug);
                    if (!sample) return <td key={major.slug} />;
                    const selected = sample.id === sampleId;
                    return (
                      <td key={major.slug} className="p-0">
                        <button
                          type="button"
                          onClick={() => loadSample(sample.id, sample.text)}
                          aria-current={selected ? 'true' : undefined}
                          aria-label={`${major.name}, ${year.label}${
                            major.hasRequirements ? '' : ' (no degree audit available)'
                          }`}
                          className={`w-full whitespace-nowrap rounded border px-3 py-2 text-xs transition-colors hover:border-terp-red ${
                            selected
                              ? 'border-terp-red bg-red-50 font-semibold dark:bg-red-950/20'
                              : major.hasRequirements
                                ? 'border-emerald-500/40 dark:border-emerald-500/30'
                                : 'border-dashed border-neutral-300 dark:border-neutral-700'
                          }`}
                        >
                          {year.label}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 hidden text-xs text-neutral-500 sm:block dark:text-neutral-400">
          Solid columns have degree requirements on file and produce a full audit. Dashed ones do
          not — everything else works, but the audit page says so instead of guessing. Requirements
          are transcribed from the catalog by hand, one major at a time.
        </p>
        <p className="mt-3 text-xs text-neutral-500 sm:hidden dark:text-neutral-400">
          Majors marked &ldquo;no audit&rdquo; have no degree requirements on file — everything else
          works, but the audit page says so instead of guessing. Requirements are transcribed from
          the catalog by hand, one major at a time.
        </p>
        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
          Each major is one invented student across four years, so later years contain everything
          the earlier ones do. Entirely synthetic; no real transcript is in this repository.
        </p>
      </section>

      {error && (
        <section
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200"
        >
          <h2 className="font-semibold">That did not work</h2>
          <p className="mt-1">{error}</p>
          <p className="mt-2 text-xs text-red-700 dark:text-red-300">
            Nothing was kept and nothing was sent anywhere. Pick another file and try again, or use
            a sample above to see what the app does.
          </p>
        </section>
      )}

      <section className="card space-y-2 text-sm">
        <h2 className="font-semibold">Where your transcript goes</h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Nowhere. The PDF is read by JavaScript running in this tab. There is no server, no
          account and no upload — the file never leaves your device, and you can check that in
          your browser&apos;s network tab.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300">
          The parsed result is kept in this browser&apos;s local storage so you do not have to
          re-upload every visit. Clearing it removes every trace.
        </p>
        {transcript && (
          <button type="button" className="button-quiet mt-2" onClick={onForget}>
            {sampleId ? 'Clear the sample' : 'Clear my transcript'}
          </button>
        )}
      </section>
    </div>
  );
}

/**
 * What the page shows while the worker is reading.
 *
 * The spinner is a real one now. It used to be a word — "Reading…" — because a
 * spinner animated on the main thread does not spin while pdf.js is on the
 * main thread, and a frozen spinner reads worse than static text. With the
 * parse in a worker there is nothing stopping it.
 *
 * `role="status"` announces the page count as it changes without interrupting.
 */
function ParsingStatus({ progress }: { progress: ParsePhase | null }) {
  const message =
    progress?.phase === 'parsing'
      ? `Reading page ${progress.page} of ${progress.totalPages}…`
      : 'Opening your transcript…';

  return (
    <div
      role="status"
      className="flex min-h-11 items-center justify-center gap-3 text-sm text-neutral-600 dark:text-neutral-300"
    >
      <span
        aria-hidden="true"
        className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-terp-red dark:border-neutral-700 dark:border-t-terp-red"
      />
      {message}
    </div>
  );
}

/**
 * The demo grid, for a screen too narrow to hold a grid.
 *
 * Two native selects and a button. Native because the iOS picker is better
 * than anything that could be built here — it is a full-height wheel with the
 * system's own hit targets, it works with VoiceOver, and it does not need a
 * single line of dropdown code to go wrong.
 *
 * Selecting does not load: a wheel fires `change` on every value it passes on
 * an Android long-press, and reparsing a transcript on each one would be a
 * mess. The button is the commit.
 */
function SampleChooser({
  sampleId,
  onLoad,
}: {
  sampleId?: string;
  onLoad: (id: string, text: string) => void;
}) {
  const [majorSlug, setMajorSlug] = useState(() => {
    const loaded = SAMPLE_MAJORS.find((major) =>
      SAMPLE_YEARS.some((year) => sampleFor(major.slug, year.slug)?.id === sampleId),
    );
    return loaded?.slug ?? SAMPLE_MAJORS[0]!.slug;
  });
  const [yearSlug, setYearSlug] = useState(
    () => SAMPLE_YEARS.find((year) => sampleFor(majorSlug, year.slug)?.id === sampleId)?.slug
      ?? SAMPLE_YEARS[0]!.slug,
  );

  const major = SAMPLE_MAJORS.find((m) => m.slug === majorSlug) ?? SAMPLE_MAJORS[0]!;
  const sample = sampleFor(majorSlug, yearSlug);
  const showing = sample != null && sample.id === sampleId;

  return (
    <div className="mt-4 space-y-3 sm:hidden">
      <label className="block">
        <span className="label">Major</span>
        <select
          className="select mt-1"
          value={majorSlug}
          onChange={(event) => setMajorSlug(event.target.value)}
        >
          {SAMPLE_MAJORS.map((option) => (
            <option key={option.slug} value={option.slug}>
              {option.name}
              {option.hasRequirements ? '' : ' (no audit)'}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="label">Class year</span>
        <select
          className="select mt-1"
          value={yearSlug}
          onChange={(event) => setYearSlug(event.target.value)}
        >
          {SAMPLE_YEARS.map((option) => (
            <option key={option.slug} value={option.slug}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <button
        type="button"
        className="button w-full"
        disabled={!sample || showing}
        onClick={() => sample && onLoad(sample.id, sample.text)}
      >
        {showing ? 'Showing this sample' : 'Load this sample'}
      </button>

      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {major.hasRequirements
          ? `${major.name} has degree requirements on file, so this one produces a full audit.`
          : `${major.name} has no degree requirements on file yet — everything works except the audit page, which says so instead of guessing.`}
      </p>
    </div>
  );
}
