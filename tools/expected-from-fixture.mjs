#!/usr/bin/env node
/**
 * Parse a fixture's `transcript.txt` and write the `expected.json` beside it,
 * then print what the GPA and audit make of it.
 *
 * The expected output is generated rather than hand-written because it is a
 * record of what the parser *does*, checked by the self-check and the assertion
 * suite rather than by eye. Regenerate after any parser change and read the
 * diff — that diff is the review.
 *
 *   npx tsx tools/expected-from-fixture.mjs fixtures/sample-1-freshman
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseTranscriptText } from '../lib/parser/fixedWidth.ts';
import { selfCheck } from '../lib/parser/selfCheck.ts';
import { cumulativeTotals } from '../lib/planner/gpa.ts';
import { evaluate, findRequirements } from '../lib/audit/index.ts';

const dir = process.argv[2];
if (!dir) {
  process.stderr.write('usage: expected-from-fixture.mjs <fixture-dir>\n');
  process.exit(1);
}

import { readdirSync } from 'node:fs';
const requirements = readdirSync('data/requirements')
  .filter((name) => name.endsWith('.json'))
  .map((name) => JSON.parse(readFileSync(join('data/requirements', name), 'utf8')));
const transcript = parseTranscriptText(readFileSync(join(dir, 'transcript.txt'), 'utf8'));
writeFileSync(join(dir, 'expected.json'), `${JSON.stringify(transcript, null, 2)}\n`);

const totals = cumulativeTotals(transcript);
const check = selfCheck(transcript);
process.stdout.write(`\n=== ${dir} ===\n`);
process.stdout.write(
  `computed GPA ${totals.gpa?.toFixed(3)} | stated ${check.statedGpa} | self-check ${check.ok ? 'OK' : 'MISMATCH'}\n`,
);
process.stdout.write(
  `earned ${totals.earnedCredits} (stated ${check.statedCredits}) | gpa credits ${totals.gpaCredits} | terms ${transcript.terms.length} | registered ${transcript.inProgress.length}\n`,
);
if (transcript.warnings.length > 0) {
  process.stdout.write(`WARNINGS: ${transcript.warnings.map((w) => w.code).join(', ')}\n`);
}

const found = findRequirements(transcript.major, requirements);
if (!found) {
  process.stdout.write('no requirements matched\n');
} else {
  const audit = evaluate(transcript, found);
  const met = audit.results.filter((r) => r.satisfied).length;
  process.stdout.write(`audit: ${met}/${audit.results.length} met\n`);
  for (const result of audit.results.filter((r) => !r.satisfied)) {
    const detail =
      result.unit === 'gpa'
        ? `${result.have} < ${result.needed}`
        : `${result.have}${result.pending ? `+${result.pending}` : ''}/${result.needed} ${result.unit}`;
    process.stdout.write(`   UNMET  ${result.label.padEnd(46)} ${detail}\n`);
  }
  process.stdout.write(`remaining courses: ${audit.remainingCourses.join(', ') || 'none'}\n`);
  process.stdout.write(
    `remaining credits: ${audit.remainingCredits.map((r) => `${r.credits} ${r.label}`).join(' | ') || 'none'}\n`,
  );
  process.stdout.write(`satisfied if in-progress pass: ${audit.satisfiedIfInProgressPass}\n`);
}
