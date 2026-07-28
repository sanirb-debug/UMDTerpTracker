import { describe, expect, it } from 'vitest';
import quotesJson from '../data/quotes.json';
import { pickQuote, rejectionReason, renderableQuotes } from './quotes.ts';
import type { Quote } from './quotes.ts';

/**
 * The rule under test is the one that matters: a quote nobody can check does
 * not get shown. Everything else here is bookkeeping.
 */

const sourced: Quote = {
  text: 'placeholder used only to exercise the filter',
  speaker: 'Test Fixture',
  sourceUrl: 'https://example.com/one',
};

describe('rejectionReason', () => {
  it('accepts a quote with words, a speaker and a source', () => {
    expect(rejectionReason(sourced)).toBeNull();
  });

  it('names every missing field', () => {
    expect(rejectionReason({ ...sourced, sourceUrl: '' })).toBe('missing sourceUrl');
    expect(rejectionReason({ ...sourced, speaker: '' })).toBe('missing speaker');
    expect(rejectionReason({})).toBe('missing text, speaker, sourceUrl');
  });

  it('treats whitespace as missing', () => {
    expect(rejectionReason({ ...sourced, sourceUrl: '   ' })).toBe('missing sourceUrl');
  });

  it('does not require context', () => {
    expect(rejectionReason({ ...sourced, context: undefined })).toBeNull();
  });
});

describe('renderableQuotes', () => {
  it('drops an unsourced quote and reports why', () => {
    const rejected: Array<[number, string]> = [];
    const kept = renderableQuotes(
      { quotes: [sourced, { ...sourced, sourceUrl: '' }] },
      (index, reason) => rejected.push([index, reason]),
    );
    expect(kept).toHaveLength(1);
    expect(kept[0]!.sourceUrl).toBe('https://example.com/one');
    expect(rejected).toEqual([[1, 'missing sourceUrl']]);
  });

  it('survives a malformed file rather than taking the app down', () => {
    for (const bad of [null, {}, { quotes: 'nope' }, undefined]) {
      expect(renderableQuotes(bad)).toEqual([]);
    }
  });

  it('keeps context when it is there and omits it when it is not', () => {
    const [withContext, withoutContext] = renderableQuotes({
      quotes: [{ ...sourced, context: ' at the 2002 final ' }, sourced],
    });
    expect(withContext!.context).toBe('at the 2002 final');
    expect(withoutContext!.context).toBeUndefined();
  });
});

describe('data/quotes.json', () => {
  it('has the documented shape', () => {
    expect(Array.isArray(quotesJson.quotes)).toBe(true);
    for (const quote of quotesJson.quotes) {
      expect(Object.keys(quote).sort()).toEqual(['context', 'sourceUrl', 'speaker', 'text']);
    }
  });

  it('renders nothing until a real sourced quote replaces the placeholder', () => {
    // Not an assertion that the file must stay empty — it is an assertion that
    // the empty placeholder is never shown as though somebody said it.
    for (const quote of renderableQuotes(quotesJson)) {
      expect(quote.text.length).toBeGreaterThan(0);
      expect(quote.speaker.length).toBeGreaterThan(0);
      expect(quote.sourceUrl).toMatch(/^https?:\/\//);
    }
  });
});

describe('pickQuote', () => {
  const a: Quote = { ...sourced, text: 'a' };
  const b: Quote = { ...sourced, text: 'b' };

  it('returns null when there is nothing to show', () => {
    expect(pickQuote([])).toBeNull();
  });

  it('avoids repeating the one just shown', () => {
    expect(pickQuote([a, b], a, () => 0)).toBe(b);
    expect(pickQuote([a, b], b, () => 0)).toBe(a);
  });

  it('shows the only quote there is, even twice running', () => {
    expect(pickQuote([a], a, () => 0)).toBe(a);
  });

  it('stays in range when random returns its upper bound', () => {
    expect(pickQuote([a, b], undefined, () => 0.999999)).toBe(b);
    expect(pickQuote([a, b], undefined, () => 1)).toBe(b);
  });
});
