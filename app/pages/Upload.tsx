import { useCallback, useRef, useState } from 'react';
import type { Transcript } from '../../lib/types.ts';
import { ScannedPdfError } from '../../lib/parser/errors.ts';
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
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    async (file: File) => {
      setError(null);
      setBusy(true);
      try {
        // pdf.js is a megabyte of worker. Nobody should download it until
        // there is actually a PDF to read.
        const { parseTranscriptPdf } = await import('../../lib/parser/index.ts');
        const parsed = await parseTranscriptPdf(await file.arrayBuffer());
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
        className={`rounded-xl border-2 border-dashed p-10 text-center transition-colors ${
          dragging
            ? 'border-terp-red bg-red-50 dark:bg-red-950/20'
            : 'border-neutral-300 dark:border-neutral-700'
        }`}
      >
        <p className="mb-1 text-lg font-semibold">Drop your unofficial transcript here</p>
        <p className="mb-5 text-sm text-neutral-500 dark:text-neutral-400">
          Testudo → Academics → Unofficial Transcript → save as PDF
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf,.pdf"
          className="sr-only"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void handleFile(file);
            event.target.value = '';
          }}
        />
        <button type="button" className="button" disabled={busy} onClick={() => inputRef.current?.click()}>
          {busy ? 'Reading…' : 'Choose a PDF'}
        </button>

      </section>

      <section className="card overflow-x-auto">
        <h2 className="font-semibold">See how it works</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          Rather not hand your transcript to a site you have never heard of? Reasonable. Pick a
          major and a year — no file, no upload.
        </p>

        <table className="mt-4 w-full min-w-[40rem] border-separate border-spacing-1 text-sm">
          <thead>
            <tr>
              <th className="w-20" />
              {SAMPLE_MAJORS.map((major) => (
                <th key={major.slug} scope="col" className="px-1 pb-1 text-center align-bottom">
                  <span className="block font-semibold">{major.short}</span>
                  {!major.hasRequirements && (
                    <span className="block text-[10px] font-normal text-amber-600 dark:text-amber-400">
                      no audit yet
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SAMPLE_YEARS.map((year) => (
              <tr key={year.slug}>
                <th scope="row" className="pr-2 text-right text-xs font-medium text-neutral-500">
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
                        aria-label={`${major.name}, ${year.label}`}
                        className={`w-full rounded-lg border px-2 py-2 text-xs transition-colors hover:border-terp-red ${
                          selected
                            ? 'border-terp-red bg-red-50 font-semibold dark:bg-red-950/20'
                            : 'border-neutral-300 dark:border-neutral-700'
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

        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
          Each column is one invented student followed across four years, so the later rows contain
          everything the earlier ones do. Psychology has no requirements file yet, which is what the
          audit looks like for a major nobody has transcribed — it is a real state, not a broken
          one. Entirely synthetic; no real transcript, redacted or otherwise, is in this repository.
        </p>
      </section>

      {error && (
        <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-red-950/40 dark:text-red-200">
          {error}
        </p>
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
