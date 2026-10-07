// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { deserializeError, serializeError } from './protocol.ts';
import { ParseTimeoutError } from '../../lib/parser/errors.ts';

/**
 * A spinner that never stops is the one failure with no way out of it: nothing
 * to read, nothing to report, nothing to retry. It was reported as "it circles
 * but then doesn't load", and nothing in the parse path had a time limit.
 */

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('a worker that stops answering', () => {
  it('gives up rather than spinning forever', async () => {
    vi.useFakeTimers();

    // Accepts the file and then says nothing, which is the reported symptom.
    class SilentWorker {
      onmessage: unknown = null;
      onerror: unknown = null;
      onmessageerror: unknown = null;
      postMessage(): void {}
      terminate(): void {}
    }
    vi.stubGlobal('Worker', SilentWorker);

    const { parseTranscriptFile } = await import('./client.ts');
    const file = { arrayBuffer: async () => new ArrayBuffer(8) } as unknown as File;

    const settled = vi.fn();
    const result = parseTranscriptFile(file).then(
      () => settled('resolved'),
      () => settled('rejected'),
    );

    // Nothing should resolve while the worker is merely slow.
    await vi.advanceTimersByTimeAsync(5_000);
    expect(settled).not.toHaveBeenCalled();

    // Past the silence limit it must stop waiting, one way or another.
    await vi.advanceTimersByTimeAsync(120_000);
    await result;
    expect(settled).toHaveBeenCalledWith('rejected');
  });
});

describe('the timeout error itself', () => {
  it('survives the worker boundary like the other parser errors', () => {
    const rebuilt = deserializeError(serializeError(new ParseTimeoutError()));
    expect(rebuilt).toBeInstanceOf(ParseTimeoutError);
  });

  it('tells somebody it is a bug worth reporting, not their file', () => {
    const message = new ParseTimeoutError().message;
    expect(message).toMatch(/bug in TerpTracker/i);
    expect(message).toMatch(/report/i);
  });
});
