/// <reference lib="webworker" />
import { parseTranscriptPdf } from '../../lib/parser/index.ts';
import { serializeError } from './protocol.ts';
import type { ParseRequest, ParseResponse } from './protocol.ts';

/**
 * The parser, off the main thread.
 *
 * Deliberately thin: it receives bytes, calls the same `parseTranscriptPdf`
 * everything else calls, and posts the result back. There is no parsing logic
 * here and there should never be any — `lib/parser` stays a set of plain
 * functions that know nothing about workers, which is what keeps it testable
 * in Node.
 *
 * The bytes still never leave the device. A worker is another thread in this
 * tab, not another machine.
 */

const post = (message: ParseResponse) => (self as DedicatedWorkerGlobalScope).postMessage(message);

self.onmessage = async (event: MessageEvent<ParseRequest>) => {
  const { id, data } = event.data;
  try {
    const transcript = await parseTranscriptPdf(data, (page, totalPages) =>
      post({ id, type: 'progress', page, totalPages }),
    );
    post({ id, type: 'done', transcript });
  } catch (cause) {
    post({ id, type: 'error', error: serializeError(cause) });
  }
};
