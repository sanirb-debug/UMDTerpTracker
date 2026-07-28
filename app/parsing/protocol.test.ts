import { describe, expect, it } from 'vitest';
import { deserializeError, serializeError } from './protocol.ts';
import { ScannedPdfError } from '../../lib/parser/errors.ts';

/**
 * This runs in plain Node with no worker and no DOM, which is the point: the
 * part of the worker worth testing is the boundary, and the boundary is
 * ordinary functions.
 *
 * The failure being guarded against is quiet. Structured clone drops
 * prototypes, so a `ScannedPdfError` thrown in the worker arrives as a plain
 * object, `instanceof` answers false, and somebody who photographed their
 * transcript gets "that PDF could not be read" instead of being told to
 * download it from Testudo. Nothing crashes; the message is just wrong.
 */

describe('carrying an error across the worker boundary', () => {
  it('keeps a scanned-PDF error a scanned-PDF error', () => {
    const original = new ScannedPdfError();
    const rebuilt = deserializeError(serializeError(original));

    expect(rebuilt).toBeInstanceOf(ScannedPdfError);
    expect(rebuilt.message).toBe(original.message);
  });

  it('flags it rather than relying on the class name surviving minification', () => {
    expect(serializeError(new ScannedPdfError()).scanned).toBe(true);
    expect(serializeError(new Error('anything else')).scanned).toBe(false);
  });

  it('keeps an ordinary error ordinary, with its name and message', () => {
    const rebuilt = deserializeError(serializeError(new TypeError('bad offset')));

    expect(rebuilt).not.toBeInstanceOf(ScannedPdfError);
    expect(rebuilt.name).toBe('TypeError');
    expect(rebuilt.message).toBe('bad offset');
  });

  it('survives a throw that was never an Error at all', () => {
    // pdf.js has been known to reject with a string.
    const rebuilt = deserializeError(serializeError('InvalidPDFException'));
    expect(rebuilt.message).toBe('InvalidPDFException');
    expect(rebuilt).toBeInstanceOf(Error);
  });

  it('produces something structured clone can actually carry', () => {
    const serialized = serializeError(new ScannedPdfError());
    // No prototype chain, no functions — the shape a worker can post.
    expect(JSON.parse(JSON.stringify(serialized))).toEqual(serialized);
    expect(Object.keys(serialized).sort()).toEqual(['message', 'name', 'scanned']);
  });
});
