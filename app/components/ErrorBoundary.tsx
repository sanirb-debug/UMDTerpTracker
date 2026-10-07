import { Component } from 'react';
import type { ReactNode } from 'react';
import { clearEverything } from '../storage.ts';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * The last line between a bug and a white screen.
 *
 * React unmounts the whole tree when a render throws, so before this existed
 * any single bad assumption about a transcript took the entire page with it.
 * From the outside that looks like "it read my transcript but it never
 * loaded" — which is exactly how it was reported.
 *
 * The loop is the worse half. A parsed transcript is saved to localStorage
 * before the dashboard renders, so data that crashes one render crashes every
 * render after it: reloading does not help, and the person is locked out of an
 * app that worked ten seconds earlier. That is why the first thing offered here
 * is the one action that definitely breaks the cycle.
 *
 * Nothing is logged to the console on purpose. React already prints an
 * uncaught render error itself, and a second log of the error object is the
 * quiet way parsed coursework ends up in a devtools session somebody later
 * pastes somewhere — `app/privacy.test.tsx` enforces that there is exactly one
 * logging line in the whole app and it is not this one.
 *
 * The error text is printed on screen for somebody to relay, and deliberately
 * not folded into the bug-report link. Report bodies are built from a fixed set of facts
 * with nowhere to put free text precisely so a transcript cannot leak into a
 * public issue, and a raw exception message can quote the data that broke it.
 */
export class ErrorBoundary extends Component<Props, State> {
  override state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  override render(): ReactNode {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <main className="mx-auto max-w-2xl p-6">
        <section className="card border-l-4 border-critical-500">
          <h1 className="text-lg font-semibold">Something in here broke.</h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Your transcript was read, but the page failed while drawing it. This is a bug in
            TerpTracker, not a problem with your file — and nothing about it was sent anywhere.
          </p>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            The saved copy is what is being drawn, so reloading will hit the same bug. Clearing it
            starts you over on the upload screen.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="button"
              onClick={() => {
                clearEverything();
                window.location.reload();
              }}
            >
              Clear my data and start over
            </button>
            <button type="button" className="button-quiet" onClick={() => window.location.reload()}>
              Just reload
            </button>
          </div>

          <details className="mt-5">
            <summary className="cursor-pointer text-sm text-neutral-500 dark:text-neutral-400">
              What went wrong, in case you want to report it
            </summary>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-neutral-100 p-3 text-xs dark:bg-neutral-900">
              {error.message || String(error)}
            </pre>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              Copying that line into an issue at{' '}
              <a
                className="underline"
                href="https://github.com/sanirb-debug/UMDTerpTracker/issues/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                the issue tracker
              </a>{' '}
              is enough to find it. Please check it does not contain anything from your transcript
              before you post.
            </p>
          </details>
        </section>
      </main>
    );
  }
}
