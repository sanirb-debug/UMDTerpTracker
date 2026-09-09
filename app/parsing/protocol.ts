import {
  EncryptedPdfError,
  ScannedPdfError,
  UnreadablePdfError,
} from '../../lib/parser/errors.ts';
import type { TranscriptPdfError } from '../../lib/parser/errors.ts';
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

/** Which of the parser's own failures this was. */
export type ParserErrorKind = 'scanned' | 'encrypted' | 'unreadable';

const KINDS: ReadonlyArray<{ kind: ParserErrorKind; type: new () => TranscriptPdfError }> = [
  { kind: 'scanned', type: ScannedPdfError },
  { kind: 'encrypted', type: EncryptedPdfError },
  { kind: 'unreadable', type: UnreadablePdfError },
];

export interface SerializedError {
  name: string;
  message: string;
  /**
   * Which parser error this was, when it was one of ours. Carried explicitly
   * rather than inferred from `name` at the far end, so a minifier renaming a
   * class cannot turn a recognised failure into a generic one.
   */
  kind?: ParserErrorKind;
}

export function serializeError(cause: unknown): SerializedError {
  if (cause instanceof Error) {
    const known = KINDS.find(({ type }) => cause instanceof type);
    return {
      name: cause.name,
      message: cause.message,
      ...(known ? { kind: known.kind } : {}),
    };
  }
  return { name: 'Error', message: String(cause) };
}

/** Rebuild the error on the main thread, prototype and all. */
export function deserializeError(error: SerializedError): Error {
  const known = KINDS.find(({ kind }) => kind === error.kind);
  if (known) return new known.type();
  const rebuilt = new Error(error.message);
  rebuilt.name = error.name;
  return rebuilt;
}
