import { useCallback, useRef, useState } from 'react';
import type { Transcript } from '../../lib/types.ts';
import { ScannedPdfError } from '../../lib/parser/errors.ts';
import { parseTranscriptText } from '../../lib/parser/fixedWidth.ts';
import sampleTranscript from '../../fixtures/sample-infosci/transcript.txt?raw';

interface Props {
  transcript: Transcript | null;
  isSample: boolean;
  onParsed: (transcript: Transcript, isSample: boolean) => void;
  onForget: () => void;
}

export function UploadPage({ transcript, isSample, onParsed, onForget }: Props) {
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
        onParsed(parsed, false);
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

  const loadSample = useCallback(() => {
    setError(null);
    // Runs the same parser and self-check a real upload does, so what you see
    // here is what the app will do with yours.
    onParsed(parseTranscriptText(sampleTranscript), true);
  }, [onParsed]);

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

        <div className="mt-6 border-t border-neutral-200 pt-5 dark:border-neutral-800">
          <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-300">
            Rather not hand your transcript to a site you have never heard of? Reasonable.
          </p>
          <button type="button" className="button-quiet px-4 py-2" onClick={loadSample}>
            Try it with a sample transcript
          </button>
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
            Made-up student, no file needed. Everything works exactly as it would with yours.
          </p>
        </div>
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
            {isSample ? 'Clear the sample' : 'Clear my transcript'}
          </button>
        )}
      </section>
    </div>
  );
}
