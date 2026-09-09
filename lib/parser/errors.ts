/**
 * Failures the parser can explain in terms a student can act on.
 *
 * pdf.js reports its own problems in its own vocabulary — "No password given",
 * "Invalid PDF structure" — which tells somebody holding a transcript nothing
 * about what to do next. Every subclass here exists to replace one of those
 * with an instruction.
 *
 * These live apart from `textItems.ts` so the UI can catch them without pulling
 * pdf.js into the initial bundle.
 */
export abstract class TranscriptPdfError extends Error {}

/**
 * The PDF has no extractable text layer — i.e. somebody scanned or
 * photographed their transcript. There is no silent fallback for this; OCR is
 * out of scope and guessing would be worse than saying so.
 */
export class ScannedPdfError extends TranscriptPdfError {
  constructor() {
    super(
      'This PDF has no text in it, so it looks like a scan or a photo. ' +
        'Download the unofficial transcript straight from Testudo instead of scanning a printout.',
    );
    this.name = 'ScannedPdfError';
  }
}

/**
 * The PDF is password-protected. Testudo does not hand these out, but a copy
 * saved through a phone's document manager or a print service can arrive
 * locked, and pdf.js's own word for it is "No password given".
 */
export class EncryptedPdfError extends TranscriptPdfError {
  constructor() {
    super(
      'That PDF is password-protected, so it cannot be opened here. Open it in a PDF reader, ' +
        'save an unlocked copy, and drop that in — or download the transcript again from Testudo.',
    );
    this.name = 'EncryptedPdfError';
  }
}

/**
 * The file is not a readable PDF at all — truncated mid-download, corrupt, or
 * something that merely ends in `.pdf`.
 */
export class UnreadablePdfError extends TranscriptPdfError {
  constructor() {
    super(
      'That file could not be opened as a PDF. Downloads that stop early do this — try ' +
        'downloading the unofficial transcript from Testudo again.',
    );
    this.name = 'UnreadablePdfError';
  }
}
