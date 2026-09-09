import * as pdfjs from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import {
  EncryptedPdfError,
  ScannedPdfError,
  UnreadablePdfError,
} from './errors.ts';

export { ScannedPdfError } from './errors.ts';

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

/**
 * One positioned run of text from the PDF. `x` grows rightward and `y` grows
 * upward — that is PDF user space, not screen space, so rows are sorted by
 * descending `y`.
 */
export interface PositionedText {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface TextPage {
  pageNumber: number;
  items: PositionedText[];
}

/** Below this many text runs across the whole document, assume there is no text layer. */
const MIN_TEXT_ITEMS = 25;

/**
 * pdf.js names its open failures after the PDF spec rather than after anything
 * the person holding the file can do about them.
 *
 * Anything unrecognised is passed through untouched: an unexpected failure here
 * is a bug worth seeing, not a reassuring message worth inventing.
 */
function translateOpenFailure(cause: unknown): unknown {
  const name = cause instanceof Error ? cause.name : '';
  if (name === 'PasswordException') return new EncryptedPdfError();
  if (name === 'InvalidPDFException' || name === 'MissingPDFException') {
    return new UnreadablePdfError();
  }
  return cause;
}

/**
 * Called after each page comes out. Synchronous, and nothing is awaited on it —
 * a caller that wants to put a number on screen can, and one that does not pays
 * nothing. This is the whole extent of the parser's interest in progress: it
 * knows about pages, not about spinners.
 */
export type PageProgress = (page: number, total: number) => void;

/**
 * Pull positioned text out of a transcript PDF.
 *
 * This is the only module in `lib/` that touches pdfjs. Everything downstream
 * works on `TextPage[]`, which is what makes the parser testable without
 * shipping binary PDFs into the test suite.
 */
export async function extractTextPages(
  data: ArrayBuffer,
  onPage?: PageProgress,
): Promise<TextPage[]> {
  let doc;
  try {
    doc = await pdfjs.getDocument({
      data,
      // The transcript never leaves the browser, and neither should any fetch
      // pdf.js might otherwise make on its behalf.
      isEvalSupported: false,
      disableFontFace: true,
    }).promise;
  } catch (cause) {
    throw translateOpenFailure(cause);
  }

  const pages: TextPage[] = [];
  let itemCount = 0;

  try {
    for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber += 1) {
      const page = await doc.getPage(pageNumber);
      const content = await page.getTextContent();
      const items: PositionedText[] = [];

      for (const item of content.items) {
        if (!('str' in item)) continue;
        const text = item.str;
        if (!text.trim()) continue;
        const [, , , scaleY, x, y] = item.transform as number[];
        items.push({
          text,
          x: x ?? 0,
          y: y ?? 0,
          width: item.width ?? 0,
          height: item.height || Math.abs(scaleY ?? 0),
        });
      }

      itemCount += items.length;
      pages.push({ pageNumber, items });
      page.cleanup();
      onPage?.(pageNumber, doc.numPages);
    }
  } finally {
    await doc.destroy();
  }

  if (itemCount < MIN_TEXT_ITEMS) {
    throw new ScannedPdfError();
  }

  return pages;
}
