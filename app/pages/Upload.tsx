import { useCallback, useRef, useState } from 'react';
import type { Transcript } from '../../lib/types.ts';
import { ScannedPdfError } from '../../lib/parser/errors.ts';
import { parseTranscriptText } from '../../lib/parser/fixedWidth.ts';
import { SAMPLES } from '../data/samples.ts';

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

      <section className="card">
        <h2 className="font-semibold">See how it works</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          Rather not hand your transcript to a site you have never heard of? Reasonable. Pick a
          point in one invented student&apos;s degree — no file, no upload.
        </p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {SAMPLES.map((sample) => (
            <button
              key={sample.id}
              type="button"
              onClick={() => loadSample(sample.id, sample.text)}
              aria-current={sample.id === sampleId ? 'true' : undefined}
              className={`rounded-lg border p-3 text-left transition-colors hover:border-terp-red ${
                sample.id === sampleId
                  ? 'border-terp-red bg-red-50 dark:bg-red-950/20'
                  : 'border-neutral-300 dark:border-neutral-700'
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-semibold">{sample.label}</span>
                <span className="text-xs text-neutral-500">{sample.standing}</span>
              </div>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{sample.blurb}</p>
            </button>
          ))}
        </div>

        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
          All four are the same made-up Information Science student at different points, so the
          later ones contain everything the earlier ones do. Entirely invented — no real
          transcript, redacted or otherwise, is in this repository.
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
