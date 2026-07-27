import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import { parseTranscriptPages } from '../lib/parser/parseTranscript.ts';
import { selfCheck } from '../lib/parser/selfCheck.ts';
import { computeGpa } from '../lib/planner/gpa.ts';
import type { Transcript } from '../lib/types.ts';
import { pagesFromText } from './support/layout.ts';

const here = dirname(fileURLToPath(import.meta.url));

/** Every directory holding a `transcript.txt` / `expected.json` pair. */
function fixtureNames(): string[] {
  return readdirSync(here).filter((name) => {
    const path = join(here, name);
    return name !== 'support' && statSync(path).isDirectory();
  });
}

function loadFixture(name: string): { parsed: Transcript; expected: Transcript } {
  const layout = readFileSync(join(here, name, 'transcript.txt'), 'utf8');
  const expected = JSON.parse(readFileSync(join(here, name, 'expected.json'), 'utf8')) as Transcript;
  return { parsed: parseTranscriptPages(pagesFromText(layout)), expected };
}

describe.each(fixtureNames())('fixture %s', (name) => {
  const { parsed, expected } = loadFixture(name);

  it('parses to the expected transcript', () => {
    expect(parsed).toEqual(expected);
  });

  it('computed GPA matches the GPA the transcript states', () => {
    const check = selfCheck(parsed);
    expect(check.statedGpa).not.toBeNull();
    expect(check.ok).toBe(true);
  });

  it('computed earned credits match the credits the transcript states', () => {
    const check = selfCheck(parsed);
    expect(check.computedCredits).toBe(check.statedCredits);
  });

  it('each term GPA matches the term GPA the transcript states', () => {
    for (const term of parsed.terms) {
      if (term.statedTermGpa === null) continue;
      const computed = computeGpa(term.courses).gpa;
      expect(computed, `term ${term.id}`).not.toBeNull();
      expect(computed!, `term ${term.id}`).toBeCloseTo(term.statedTermGpa, 2);
    }
  });

  it('reports no parse warnings', () => {
    expect(parsed.warnings).toEqual([]);
  });
});
