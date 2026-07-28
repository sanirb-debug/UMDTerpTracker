import quotesJson from '../../data/quotes.json';
import { renderableQuotes } from '../../lib/quotes.ts';
import type { Quote } from '../../lib/quotes.ts';

/**
 * The quotes the turtle is allowed to show.
 *
 * Anything without a speaker and a source is dropped here rather than rendered
 * unattributed, and in development each drop prints a console error naming the
 * entry — a half-filled quote should be caught while somebody is editing
 * `data/quotes.json`, not after it ships. `quotes.json` as committed holds one
 * empty placeholder, so this list is empty until a real quote replaces it and
 * the turtle stays hidden until then.
 */
export const quotes: Quote[] = renderableQuotes(quotesJson, (index, reason) => {
  if (!import.meta.env.DEV) return;
  const where = index < 0 ? 'data/quotes.json' : `data/quotes.json quote ${index}`;
  console.error(
    `[quotes] ${where}: ${reason}. It will not be shown. Every quote needs the words, ` +
      'who said them, and a link to where they can be read — see data/quotes.README.md.',
  );
});
