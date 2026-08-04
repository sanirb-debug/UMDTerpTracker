import { useState } from 'react';
import { clearEverything, storedKeys } from '../storage.ts';

/**
 * "Clear my data", and proof that it happened.
 *
 * Three deliberate choices:
 *
 * It is always available, not only when a transcript is loaded. Somebody who
 * wants to be sure nothing of theirs is left should not have to load their
 * transcript again in order to find the button that deletes it.
 *
 * It confirms with the specific keys it removed rather than a green tick. This
 * app's whole claim is that everything stays in your browser; a delete button
 * that says "done!" and cannot be checked asks for exactly the trust the rest
 * of the app is trying not to require.
 *
 * It re-reads storage after clearing rather than assuming. If a key somehow
 * survives — a second tab writing concurrently, storage disabled mid-session —
 * the message says so instead of claiming a clean sweep.
 */
export function ClearMyData({ onCleared }: { onCleared: () => void }) {
  const [result, setResult] = useState<{ removed: string[]; remaining: string[] } | null>(null);

  const clear = () => {
    const removed = clearEverything();
    // Ask storage again rather than trusting the return value.
    setResult({ removed, remaining: storedKeys() });
    onCleared();
  };

  return (
    <div>
      <button type="button" className="button-quiet" onClick={clear}>
        Clear my data
      </button>

      {result && (
        <p
          role="status"
          className={`mt-2 text-xs ${
            result.remaining.length === 0
              ? 'text-positive-700 dark:text-positive-300'
              : 'text-critical-700 dark:text-critical-300'
          }`}
        >
          {result.remaining.length > 0 ? (
            <>
              Something is still stored ({result.remaining.join(', ')}). Clearing this site&apos;s
              data from your browser settings will remove it.
            </>
          ) : result.removed.length === 0 ? (
            <>Nothing was stored — there was nothing to clear.</>
          ) : (
            <>
              Cleared. Removed {result.removed.length}{' '}
              {result.removed.length === 1 ? 'item' : 'items'} ({result.removed.join(', ')}) and
              local storage now holds nothing for this site. You can confirm it in your
              browser&apos;s developer tools under Application → Local Storage.
            </>
          )}
        </p>
      )}
    </div>
  );
}
