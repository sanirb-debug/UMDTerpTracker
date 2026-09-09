import { describe, expect, it } from 'vitest';
import { findRequirements } from './index.ts';
import type { Requirements } from './types.ts';
import instBs2026 from '../../data/requirements/inst-bs-2026.json';
import cmscBs2026 from '../../data/requirements/cmsc-bs-2026.json';
import informationSystemsBs2026 from '../../data/requirements/bmgt-information-systems-bs-2026.json';

const available = [instBs2026, cmscBs2026, informationSystemsBs2026] as unknown as Requirements[];

describe('findRequirements', () => {
  it('matches the major name as printed', () => {
    expect(findRequirements('Information Science', available)?.id).toBe('inst-bs-2026');
  });

  it('ignores case and spacing, which Testudo does not print consistently', () => {
    expect(findRequirements('COMPUTER   SCIENCE', available)?.id).toBe('cmsc-bs-2026');
  });

  it('looks past a concentration in parentheses', () => {
    expect(findRequirements('Information Science (Data Science)', available)?.id).toBe(
      'inst-bs-2026',
    );
  });

  it('finds the major inside a specialization joined by a slash', () => {
    expect(findRequirements('Computer Science/Machine Learning', available)?.id).toBe(
      'cmsc-bs-2026',
    );
  });

  it('takes the first-listed major of a double major', () => {
    expect(findRequirements('Computer Science; Information Science', available)?.id).toBe(
      'cmsc-bs-2026',
    );
    expect(findRequirements('Information Science and Computer Science', available)?.id).toBe(
      'inst-bs-2026',
    );
  });

  it('never matches a different major that shares a prefix', () => {
    // The whole reason matching is equality on segments rather than substring:
    // auditing an Information Systems student against Information Science
    // would report requirements they do not have, in a page they trust.
    expect(findRequirements('Information Systems', available)?.id).toBe(
      'bmgt-information-systems-bs-2026',
    );
    expect(findRequirements('Information Studies', available)).toBeUndefined();
  });

  it('gives up rather than guessing when nothing matches', () => {
    expect(findRequirements('Astronomy', available)).toBeUndefined();
    expect(findRequirements(undefined, available)).toBeUndefined();
    expect(findRequirements('', available)).toBeUndefined();
  });

  it('lets a hand-picked major beat whatever the transcript said', () => {
    expect(findRequirements('Astronomy', available, 'cmsc-bs-2026')?.id).toBe('cmsc-bs-2026');
    expect(findRequirements('Information Science', available, 'cmsc-bs-2026')?.id).toBe(
      'cmsc-bs-2026',
    );
  });

  it('falls back to the transcript when the picked major is no longer available', () => {
    // A saved choice can outlive the file it named — a renamed id must not
    // strand somebody on the "no audit" page forever.
    expect(findRequirements('Information Science', available, 'retired-major-2019')?.id).toBe(
      'inst-bs-2026',
    );
  });
});
