import type { Transcript } from '../../lib/types.ts';
import { deserializeError } from './protocol.ts';
import type { ParseRequest, ParseResponse } from './protocol.ts';

/**
 * Run a transcript PDF through the parser without freezing the page.
 *
 * pdf.js is not fast on a mid-range phone, and every millisecond of it used to
 * be spent on the main thread: the spinner could not spin, the tab could not
 * scroll, and iOS would eventually offer to reload the page. The work now
 * happens in a worker and the page has nothing to do but paint.
 *
 * If a worker cannot be started at all the parse still happens, on the main
 * thread, exactly as it did before. A frozen page beats a page that refuses to
 * read your transcript because the browser is old.
 */

export type ParsePhase =
  | { phase: 'reading' }
  | { phase: 'parsing'; page: number; totalPages: number };

export type OnParseProgress = (progress: ParsePhase) => void;

let nextId = 1;

export async function parseTranscriptFile(
  file: File,
  onProgress?: OnParseProgress,
): Promise<Transcript> {
  onProgress?.({ phase: 'reading' });

  const worker = startWorker();
  if (!worker) return parseOnMainThread(await file.arrayBuffer(), onProgress);

  try {
    return await parseInWorker(worker, await file.arrayBuffer(), onProgress);
  } catch (cause) {
    if (!(cause instanceof WorkerUnavailable)) throw cause;
    // The buffer was transferred to the worker and is detached now, so the
    // fallback reads the file again rather than parsing zero bytes.
    return parseOnMainThread(await file.arrayBuffer(), onProgress);
  } finally {
    worker.terminate();
  }
}

/** The worker could not be started or died before answering. Not a parse failure. */
class WorkerUnavailable extends Error {}

function startWorker(): Worker | null {
  if (typeof Worker === 'undefined') return null;
  try {
    // This exact form is what lets Vite find, bundle and hash the worker.
    return new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
  } catch {
    return null;
  }
}

function parseInWorker(
  worker: Worker,
  data: ArrayBuffer,
  onProgress?: OnParseProgress,
): Promise<Transcript> {
  const id = nextId++;

  return new Promise<Transcript>((resolve, reject) => {
    worker.onmessage = (event: MessageEvent<ParseResponse>) => {
      const message = event.data;
      if (message.id !== id) return;
      if (message.type === 'progress') {
        onProgress?.({
          phase: 'parsing',
          page: message.page,
          totalPages: message.totalPages,
        });
        return;
      }
      if (message.type === 'done') {
        resolve(message.transcript);
        return;
      }
      // A real failure inside the parser — a scan, a corrupt file. Rebuilt as
      // the error class it was thrown as, because the caller checks for it.
      reject(deserializeError(message.error));
    };

    // Fired when the worker script itself will not load or run: an old browser
    // without module workers, a blocked URL. Distinct from the parse throwing.
    worker.onerror = (event) => {
      event.preventDefault();
      reject(new WorkerUnavailable());
    };
    worker.onmessageerror = () => reject(new WorkerUnavailable());

    const request: ParseRequest = { id, data };
    // Hand the bytes over rather than copying them. Nothing here reads `data`
    // afterwards, and on a phone the copy is worth avoiding.
    worker.postMessage(request, [data]);
  });
}

async function parseOnMainThread(
  data: ArrayBuffer,
  onProgress?: OnParseProgress,
): Promise<Transcript> {
  const { parseTranscriptPdf } = await import('../../lib/parser/index.ts');
  return parseTranscriptPdf(data, (page, totalPages) =>
    onProgress?.({ phase: 'parsing', page, totalPages }),
  );
}
