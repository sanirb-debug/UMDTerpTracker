// @vitest-environment happy-dom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ErrorBoundary } from './ErrorBoundary.tsx';

/**
 * Without a boundary a thrown render takes the whole page with it, and the
 * person sees a white screen after being told their transcript was read. Worse,
 * the transcript is already in localStorage by then, so the next render throws
 * too and reloading never recovers.
 */

afterEach(cleanup);
beforeEach(() => window.localStorage.clear());

function Boom(): never {
  throw new Error('CMSC131 broke something');
}

/** React prints the caught error; the test output is not the place for it. */
function quietly(run: () => void): void {
  const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
  try {
    run();
  } finally {
    spy.mockRestore();
  }
}

describe('ErrorBoundary', () => {
  it('stays out of the way when nothing throws', () => {
    render(
      <ErrorBoundary>
        <p>dashboard</p>
      </ErrorBoundary>,
    );
    expect(screen.getByText('dashboard')).toBeTruthy();
    expect(screen.queryByText(/broke/i)).toBeNull();
  });

  it('shows a readable failure instead of a blank page', () => {
    quietly(() =>
      render(
        <ErrorBoundary>
          <Boom />
        </ErrorBoundary>,
      ),
    );
    expect(screen.getByText(/Something in here broke/i)).toBeTruthy();
    expect(screen.getByText(/failed while drawing it/i)).toBeTruthy();
  });

  it('offers the one action that breaks the crash loop', () => {
    // Reloading re-reads the same stored transcript and throws again, so
    // clearing has to be on offer or the app is unusable until somebody knows
    // to empty their own site data.
    window.localStorage.setItem('terptracker.transcript.v1', '{"version":1}');
    quietly(() =>
      render(
        <ErrorBoundary>
          <Boom />
        </ErrorBoundary>,
      ),
    );

    const reload = vi.fn();
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { ...window.location, reload },
    });

    fireEvent.click(screen.getByRole('button', { name: /clear my data/i }));
    expect(window.localStorage.getItem('terptracker.transcript.v1')).toBeNull();
    expect(reload).toHaveBeenCalled();
  });

  it('never folds the error text into the report link', () => {
    // Report bodies are built from a fixed set of facts so a transcript cannot
    // reach a public issue. An exception message can quote the data that broke
    // it, so it is shown for a human to check rather than pre-filled.
    quietly(() =>
      render(
        <ErrorBoundary>
          <Boom />
        </ErrorBoundary>,
      ),
    );
    for (const link of screen.getAllByRole('link')) {
      const href = decodeURIComponent(link.getAttribute('href') ?? '');
      expect(href).not.toContain('CMSC131');
      expect(href).not.toContain('broke something');
    }
  });
});
