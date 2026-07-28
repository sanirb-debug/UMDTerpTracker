import { ScannedPdfError } from '../../lib/parser/errors.ts';
import type { Transcript } from '../../lib/types.ts';

/**
 * What crosses the worker boundary.
 *
 * Two things make this its own module rather than a few inline types.
 *
 * First, structured clone does not carry classes. A `ScannedPdfError` thrown
 * inside the worker arrives on the other side as a plain object with its
 * prototype gone, so `cause instanceof ScannedPdfError` — which is how the
 * upload page tells "you scanned a printout" apart from "that file is broken" —
 * would quietly start answering false for every scan. The error is therefore
 * flattened deliberately on one side and rebuilt on the other.
 *
 * Second, this file imports no pdf.js and no DOM. It is the piece worth
 * testing, and it runs in plain Node.
 */

export interface ParseRequest {
  /** Distinguishes replies when a second file is dropped before the first finishes. */
  id: number;
  data: ArrayBuffer;
}

export type ParseResponse =
  | { id: number; type: 'progress'; page: number; totalPages: number }
  | { id: number; type: 'done'; transcript: Transcript }
  | { id: number; type: 'error'; error: SerializedError };

export interface SerializedError {
  name: string;
  message: string;
  /**
   * Whether this was `ScannedPdfError`. Carried as a flag rather than inferred
   * from `name` at the far end, so a minifier renaming the class cannot turn a
   * scanned-PDF message into a generic failure.
   */
  scanned: boolean;
}

export function serializeError(cause: unknown): SerializedError {
  if (cause instanceof ScannedPdfError) {
    return { name: cause.name, message: cause.message, scanned: true };
  }
  if (cause instanceof Error) {
    return { name: cause.name, message: cause.message, scanned: false };
  }
  return { name: 'Error', message: String(cause), scanned: false };
}

/** Rebuild the error on the main thread, prototype and all. */
export function deserializeError(error: SerializedError): Error {
  if (error.scanned) return new ScannedPdfError();
  const rebuilt = new Error(error.message);
  rebuilt.name = error.name;
  return rebuilt;
}
