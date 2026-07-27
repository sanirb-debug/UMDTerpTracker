/**
 * Thrown when the PDF has no extractable text layer — i.e. somebody scanned or
 * photographed their transcript. There is no silent fallback for this; OCR is
 * out of scope and guessing would be worse than saying so.
 *
 * This lives apart from `textItems.ts` so the UI can catch it without pulling
 * pdf.js into the initial bundle.
 */
export class ScannedPdfError extends Error {
  constructor() {
    super(
      'This PDF has no text in it, so it looks like a scan or a photo. ' +
        'Download the unofficial transcript straight from Testudo instead of scanning a printout.',
    );
    this.name = 'ScannedPdfError';
  }
}
