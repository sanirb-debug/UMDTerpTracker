import { useCallback, useEffect, useRef, useState } from 'react';
import { pickQuote } from '../../lib/quotes.ts';
import type { Quote } from '../../lib/quotes.ts';
import { quotes as defaultQuotes } from '../data/quotes.ts';

interface Props {
  /** Injectable so the tests are not a coin flip. */
  quotes?: Quote[];
  random?: () => number;
}

/**
 * Testudo, in the corner, with something to say about Maryland.
 *
 * Three things this deliberately is not:
 *
 * - It is not a decoration bolted onto the page with a click handler. It is a
 *   real button with a real accessible name, last in the DOM so it is last in
 *   the tab order, and Escape closes it and gives focus back. Somebody driving
 *   the app by keyboard passes it on the way out rather than through it.
 * - It is not hidden from screen readers. An easter egg only reachable by
 *   mouse is an easter egg only some people get. The turtle glyph itself is
 *   `aria-hidden` because "🐢" is not a useful thing to announce; the button
 *   it sits in says what it does.
 * - It is not a quote card. Every quote renders its speaker and a link to
 *   where the words can be read, because the alternative is putting sentences
 *   in a real person's mouth on a public site. Quotes that cannot do that
 *   never reach this component — see `lib/quotes.ts`.
 */
export function Testudo({ quotes = defaultQuotes, random }: Props) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lastShown = useRef<Quote | null>(null);

  const close = useCallback(() => {
    setQuote(null);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!quote) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [quote, close]);

  // No sourced quote, no turtle. The file ships with a placeholder, so this is
  // the normal state until somebody adds one.
  if (quotes.length === 0) return null;

  return (
    <div className="pad-safe-bottom pointer-events-none fixed inset-x-0 bottom-0 z-40 flex flex-col items-end gap-2 pr-3 sm:inset-x-auto sm:right-3 sm:pb-3">
      {quote && (
        <blockquote
          id="testudo-quote"
          className="pointer-events-auto max-w-xs rounded-xl border border-neutral-300 bg-white p-3 text-left shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
        >
          <p className="text-sm">{quote.text}</p>
          <footer className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
            <cite className="not-italic font-medium text-neutral-700 dark:text-neutral-200">
              {quote.speaker}
            </cite>
            {quote.context && <span> — {quote.context}</span>}{' '}
            <a
              className="underline"
              href={quote.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </footer>
        </blockquote>
      )}

      <button
        ref={buttonRef}
        type="button"
        aria-label={
          quote ? 'Hide the quote about Maryland' : 'Testudo has something to say about Maryland'
        }
        aria-expanded={quote !== null}
        aria-controls={quote ? 'testudo-quote' : undefined}
        onClick={() =>
          setQuote((previous) => {
            if (previous) return null;
            // Avoid repeating the last one, so a second look is worth taking.
            const next = pickQuote(quotes, lastShown.current ?? undefined, random);
            lastShown.current = next;
            return next;
          })
        }
        className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full text-lg leading-none opacity-30 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 sm:h-8 sm:w-8"
      >
        <span aria-hidden="true">🐢</span>
      </button>
    </div>
  );
}
