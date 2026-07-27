import type { Transcript } from '../types.ts';
import { extractTextPages } from './textItems.ts';
import { parseTranscriptPages } from './parseTranscript.ts';
import { withSelfCheck } from './selfCheck.ts';

export { ScannedPdfError, extractTextPages } from './textItems.ts';
export type { PositionedText, TextPage } from './textItems.ts';
export { DEFAULT_LINE_OPTIONS, allLines, groupIntoLines } from './lines.ts';
export type { Cell, Line, LineOptions } from './lines.ts';
export { parseTranscriptLines, parseTranscriptPages } from './parseTranscript.ts';
export { GPA_TOLERANCE, selfCheck, withSelfCheck } from './selfCheck.ts';
export type { SelfCheckResult } from './selfCheck.ts';

/**
 * Read a transcript PDF end to end: text extraction, positional row
 * reconstruction, parsing, and the stated-GPA self-check.
 *
 * The bytes stay in this tab. Nothing here uploads, fetches, or persists.
 */
export async function parseTranscriptPdf(data: ArrayBuffer): Promise<Transcript> {
  const pages = await extractTextPages(data);
  return withSelfCheck(parseTranscriptPages(pages));
}
