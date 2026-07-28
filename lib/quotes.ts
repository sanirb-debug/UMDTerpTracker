/**
 * Quotes about Maryland, and the rule that keeps them honest.
 *
 * A quote is a real person's words with their name attached, published on a
 * site they do not control. The thing that goes wrong is not a typo — it is a
 * sentence nobody said, credited to somebody who has to live with it. The only
 * defence that survives contact with a reader is a link they can follow, so
 * `sourceUrl` is not optional metadata here: a quote without one does not
 * render, and in development it says so loudly.
 *
 * Nothing in `data/quotes.json` is generated. See `data/quotes.README.md`.
 */

export interface Quote {
  /** The words, verbatim. */
  text: string;
  /** Who said them. */
  speaker: string;
  /** Where and when, when it helps. Optional. */
  context?: string;
  /** Where the words can be read or heard. Required — see above. */
  sourceUrl: string;
}

/** What a `data/quotes.json` entry looks like before it has been checked. */
export interface RawQuote {
  text?: unknown;
  speaker?: unknown;
  context?: unknown;
  sourceUrl?: unknown;
}

function filled(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Why a quote was rejected, in words meant for whoever is editing the file.
 * Returns null when the quote is fine.
 */
export function rejectionReason(quote: RawQuote): string | null {
  const missing: string[] = [];
  if (!filled(quote.text)) missing.push('text');
  if (!filled(quote.speaker)) missing.push('speaker');
  if (!filled(quote.sourceUrl)) missing.push('sourceUrl');
  if (missing.length === 0) return null;
  return `missing ${missing.join(', ')}`;
}

/**
 * Keep only the quotes that can be shown with a name and a link.
 *
 * Incomplete entries are dropped rather than rendered without attribution,
 * and `onRejected` is how the caller makes that loud in development. An empty
 * result is a perfectly normal state — it means the turtle stays hidden.
 */
export function renderableQuotes(
  raw: unknown,
  onRejected?: (index: number, reason: string) => void,
): Quote[] {
  const entries = (raw as { quotes?: unknown } | null)?.quotes;
  if (!Array.isArray(entries)) {
    onRejected?.(-1, 'quotes.json has no `quotes` array');
    return [];
  }

  const kept: Quote[] = [];
  entries.forEach((entry: RawQuote, index) => {
    const reason = rejectionReason(entry ?? {});
    if (reason !== null) {
      onRejected?.(index, reason);
      return;
    }
    kept.push({
      text: (entry.text as string).trim(),
      speaker: (entry.speaker as string).trim(),
      ...(filled(entry.context) ? { context: entry.context.trim() } : {}),
      sourceUrl: (entry.sourceUrl as string).trim(),
    });
  });
  return kept;
}

/**
 * Pick one, avoiding an immediate repeat so a second click does something.
 * `random` is injectable so the tests are not a coin flip.
 */
export function pickQuote(
  quotes: Quote[],
  previous?: Quote,
  random: () => number = Math.random,
): Quote | null {
  if (quotes.length === 0) return null;
  const choices = quotes.length > 1 ? quotes.filter((q) => q !== previous) : quotes;
  return choices[Math.min(choices.length - 1, Math.floor(random() * choices.length))]!;
}
