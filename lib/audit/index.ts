export { evaluate } from './evaluate.ts';
export type { AuditResult, Requirements, Rule, RuleResult } from './types.ts';

import type { Requirements } from './types.ts';

/**
 * Pick the requirements that match a transcript's major.
 *
 * Matching is on the major name the transcript prints, loosely compared. There
 * is exactly one hand-authored major so far; when there are several this is
 * also where catalog-year selection belongs.
 */
export function findRequirements(
  major: string | undefined,
  available: readonly Requirements[],
): Requirements | undefined {
  if (!major) return undefined;
  const wanted = normalize(major);
  return available.find((requirements) => normalize(requirements.major) === wanted);
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}
