import type { Transcript } from '../../lib/types.ts';
import { deserializeError } from './protocol.ts';
import { ParseTimeoutError } from '../../lib/parser/errors.ts';
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

/**
 * How long the worker may go without saying anything before it is given up on.
 *
 * It reports progress after every page, so this is a gap between pages rather
 * than a budget for the whole file — a long transcript on a slow phone keeps
 * resetting it. Silence this long means stuck, not slow.
 *
 * Kept short on purpose. Giving up here is not the end of the attempt: it
 * falls back to the main thread, which is a materially different environment.
 * pdf.js starts a worker of its own, and doing that from inside this one is a
 * nested worker — something browsers vary on. If that is what wedges, the
 * fallback is not a consolation prize, it is the path that works, and waiting
 * half a minute to reach it would be its own bug.
 */
const SILENCE_LIMIT_MS = 15_000;

/** The ceiling, for when even the main-thread fallback will not finish. */
const TOTAL_LIMIT_MS = 90_000;

export async function parseTranscriptFile(
  file: File,
  onProgress?: OnParseProgress,
): Promise<Transcript> {
  // Nothing below may hang. A spinner that never stops is the only failure
  // with no way out of it: there is no message to read, nothing to report and
  // nothing to retry, which is exactly how it was described — "it circles but
  // then doesn't load".
  return withCeiling(parse(file, onProgress));
}

async function parse(file: File, onProgress?: OnParseProgress): Promise<Transcript> {
  onProgress?.({ phase: 'reading' });

  const worker = startWorker();
  if (!worker) return parseOnMainThread(await file.arrayBuffer(), onProgress);

  try {
    return await parseInWorker(worker, await file.arrayBuffer(), onProgress);
  } catch (cause) {
    if (!(cause instanceof WorkerUnavailable)) throw cause;
    // The buffer was transferred to the worker and is detached now, so the
    // fallback reads the file again rather than parsing zero bytes. A worker
    // that went quiet is treated the same as one that never started, so a
    // stuck worker still gets one honest attempt on the main thread.
    return parseOnMainThread(await file.arrayBuffer(), onProgress);
  } finally {
    worker.terminate();
  }
}

function withCeiling(work: Promise<Transcript>): Promise<Transcript> {
  let timer: ReturnType<typeof setTimeout>;
  const ceiling = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new ParseTimeoutError()), TOTAL_LIMIT_MS);
  });
  return Promise.race([work, ceiling]).finally(() => clearTimeout(timer));
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
    // Reset on every message, so steady progress never trips it.
    let watchdog: ReturnType<typeof setTimeout>;
    const expectSomething = () => {
      clearTimeout(watchdog);
      watchdog = setTimeout(() => reject(new WorkerUnavailable()), SILENCE_LIMIT_MS);
    };
    const settle = <T>(outcome: (value: T) => void) => (value: T) => {
      clearTimeout(watchdog);
      outcome(value);
    };
    const finish = settle(resolve);
    const fail = settle(reject);
    expectSomething();

    worker.onmessage = (event: MessageEvent<ParseResponse>) => {
      const message = event.data;
      if (message.id !== id) return;
      expectSomething();
      if (message.type === 'progress') {
        onProgress?.({
          phase: 'parsing',
          page: message.page,
          totalPages: message.totalPages,
        });
        return;
      }
      if (message.type === 'done') {
        finish(message.transcript);
        return;
      }
      // A real failure inside the parser — a scan, a corrupt file. Rebuilt as
      // the error class it was thrown as, because the caller checks for it.
      fail(deserializeError(message.error));
    };

    // Fired when the worker script itself will not load or run: an old browser
    // without module workers, a blocked URL. Distinct from the parse throwing.
    worker.onerror = (event) => {
      event.preventDefault();
      fail(new WorkerUnavailable());
    };
    worker.onmessageerror = () => fail(new WorkerUnavailable());

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
