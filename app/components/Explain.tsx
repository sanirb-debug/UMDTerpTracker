import { GLOSSARY } from '../data/glossary.ts';
import type { GlossaryKey } from '../data/glossary.ts';

/**
 * "What is this?" next to a thing that needs explaining.
 *
 * Built on `<details>`/`<summary>` rather than React state on purpose: it is
 * open-and-closeable with no JavaScript, keyboard-operable for free, announced
 * as a disclosure by screen readers, and findable by the browser's own
 * find-in-page even while collapsed. A custom popover would have been more
 * code and less of all four.
 *
 * Collapsed by default because the people who need it are not the same people
 * as the ones reading the number, and neither should have to scroll past the
 * other.
 */
export function Explain({ term, className }: { term: GlossaryKey; className?: string }) {
  const entry = GLOSSARY[term];

  return (
    <details className={`group inline-block align-middle ${className ?? ''}`}>
      <summary
        aria-label={`What is ${entry.title}?`}
        className="inline-flex h-5 w-5 cursor-pointer list-none items-center justify-center rounded-full border border-neutral-300 text-[11px] font-semibold leading-none text-neutral-500 transition-colors marker:hidden hover:border-accent-500 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 group-open:border-accent-500 group-open:text-accent-700 dark:border-neutral-600 dark:hover:border-accent-400 dark:hover:text-accent-200 dark:focus-visible:ring-accent-400 dark:group-open:border-accent-400 dark:group-open:text-accent-200"
      >
        ?
      </summary>

      {/*
        Absolute so opening one does not shove the layout around — a number
        jumping down the page as you ask about it is its own small usability
        problem. `max-w` keeps it readable on a phone.
      */}
      <div className="absolute z-20 mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-lg border border-neutral-200 bg-white p-3 text-left shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          {entry.title}
        </p>
        <p className="mt-1 text-sm font-normal normal-case text-neutral-700 dark:text-neutral-200">
          {entry.body}
        </p>
        {'source' in entry && entry.source && (
          <a
            className="mt-2 inline-block text-xs underline decoration-dotted text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
            href={entry.source.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {entry.source.label}
          </a>
        )}
      </div>
    </details>
  );
}
