import type { PositionedText, TextPage } from './textItems.ts';
import type { Transcript } from '../types.ts';
import { parseTranscriptPages } from './parseTranscript.ts';
import { withSelfCheck } from './selfCheck.ts';

/**
 * Turn a fixed-width text layout into positioned text items, the way pdf.js
 * would hand them over.
 *
 * Fixtures are stored as text because a checked-in PDF is opaque: you cannot
 * see what changed in a diff, and you cannot hand-edit one to reproduce a bug.
 * The rule that makes the text faithful is the column rule below — get that
 * right and the reconstructed rows match what a real transcript produces.
 */
export interface LayoutMetrics {
  charWidth: number;
  lineHeight: number;
  fontHeight: number;
  /** y of the first line. PDF space counts up from the bottom of the page. */
  top: number;
}

export const DEFAULT_METRICS: LayoutMetrics = {
  charWidth: 6,
  lineHeight: 12,
  fontHeight: 10,
  top: 780,
};

/**
 * Columns must be separated by **three or more spaces**. Two spaces or fewer
 * read as an ordinary word gap and merge into a single cell — the same way
 * words inside a course title do.
 */
export function pageFromText(
  pageNumber: number,
  layout: string,
  metrics: LayoutMetrics = DEFAULT_METRICS,
): TextPage {
  const items: PositionedText[] = [];
  const lines = layout.replace(/\r\n/g, '\n').split('\n');

  lines.forEach((line, row) => {
    const y = metrics.top - row * metrics.lineHeight;
    // One item per whitespace-delimited run, which is roughly what pdf.js emits.
    for (const match of line.matchAll(/\S+/g)) {
      const column = match.index;
      items.push({
        text: match[0],
        x: column * metrics.charWidth,
        y,
        width: match[0].length * metrics.charWidth,
        height: metrics.fontHeight,
      });
    }
  });

  return { pageNumber, items };
}

/** Build a multi-page document. Pages are separated by a form feed (`\f`). */
export function pagesFromText(layout: string, metrics: LayoutMetrics = DEFAULT_METRICS): TextPage[] {
  return layout
    .split('\f')
    .map((page, index) => pageFromText(index + 1, page, metrics));
}

/**
 * Parse a transcript that is already fixed-width text rather than a PDF.
 *
 * This is how the sample transcript loads: it runs the same row
 * reconstruction, the same parser and the same self-check as a real upload, so
 * the demo cannot drift from the thing it is demonstrating. It also skips
 * pdf.js entirely, which keeps the "try it" button off the megabyte path.
 */
export function parseTranscriptText(layout: string, metrics: LayoutMetrics = DEFAULT_METRICS): Transcript {
  return withSelfCheck(parseTranscriptPages(pagesFromText(layout, metrics)));
}
