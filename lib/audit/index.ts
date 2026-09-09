export { evaluate } from './evaluate.ts';
export type { AuditResult, Requirements, Rule, RuleResult } from './types.ts';

import type { Requirements } from './types.ts';

/**
 * Pick the requirements that match a transcript's major.
 *
 * `overrideId` is a major the student picked by hand, and it always wins:
 * Testudo prints plenty of major names that no amount of cleaning will match,
 * and the student knows which degree they are doing.
 *
 * Otherwise the match is on the name the transcript prints. Testudo does not
 * print a bare major: it appends concentrations in parentheses and joins double
 * majors with punctuation, so `Information Science (Data Science)` and
 * `Computer Science/Machine Learning` both have to find their major. Each
 * candidate is still compared for *equality* against an authored name — never
 * by substring, because `Information Systems` and `Information Science` share
 * a prefix and auditing someone against the wrong degree is worse than telling
 * them there is no audit.
 */
export function findRequirements(
  major: string | undefined,
  available: readonly Requirements[],
  overrideId?: string,
): Requirements | undefined {
  if (overrideId) {
    const chosen = available.find((requirements) => requirements.id === overrideId);
    if (chosen) return chosen;
  }
  if (!major) return undefined;

  for (const candidate of majorCandidates(major)) {
    const match = available.find((requirements) => normalize(requirements.major) === candidate);
    if (match) return match;
  }
  return undefined;
}

/**
 * The major name as printed, then progressively less of it. Order matters: the
 * whole string is tried before any fragment, and fragments keep the order they
 * appear in, so the first-listed major of a double major wins.
 */
function majorCandidates(major: string): string[] {
  const base = normalize(major);
  const candidates: string[] = [];
  const seen = new Set<string>();

  const add = (value: string) => {
    const normalized = normalize(value);
    if (normalized && !seen.has(normalized)) {
      seen.add(normalized);
      candidates.push(normalized);
    }
  };

  add(base);
  add(base.replace(/\([^)]*\)/g, ' '));
  for (const part of base.split(/[/;,]|\band\b|&|\bwith\b/)) add(part);

  return candidates;
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}
