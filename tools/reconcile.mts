/**
 * Reconcile a real transcript against itself, line by line.
 *
 *   npm run reconcile -- ~/Downloads/my-transcript.pdf
 *
 * A Testudo transcript prints its own totals three times over: per semester,
 * as a running cumulative, and once at the end. That is three independent
 * checks the parser can be held to, and this prints all of them side by side
 * with what TerpTracker computed.
 *
 * The point is localisation. "Your GPA is off by 0.04" is a day of squinting;
 * "Fall 2024 is off by 4 quality points and every other term agrees" is one
 * row on one page. Reconciling by hand means reading a whole transcript twice.
 * This narrows it to the term that disagrees, and prints that term's rows.
 *
 * ## Privacy
 *
 * Everything happens in this process. Nothing is written to disk, nothing is
 * sent anywhere, and the PDF is read straight from the path given. Real
 * transcripts are gitignored — keep it that way; do not paste this output into
 * an issue, because it contains course rows and grades.
 */
import { readFile } from 'node:fs/promises';
import { parseTranscriptPages } from '../lib/parser/parseTranscript.ts';
import { withSelfCheck, selfCheck } from '../lib/parser/selfCheck.ts';
import { cumulativeTotals, computeGpa } from '../lib/planner/gpa.ts';
import { repeatedCourses } from '../lib/parser/repeats.ts';
import type { TextPage } from '../lib/parser/textItems.ts';
import type { Transcript } from '../lib/types.ts';

/**
 * Text extraction, again, because Node needs pdf.js's `legacy` build — the
 * browser one reaches for `DOMMatrix` on import and dies here.
 *
 * `lib/parser/textItems.ts` stays the browser's and stays untouched. This is
 * the reason it was worth isolating pdf.js to a single module in the first
 * place: everything downstream of `TextPage[]` is pure, so a second front end
 * costs twenty lines and changes nothing about how the app parses.
 */
async function extractPagesInNode(data: Uint8Array): Promise<TextPage[]> {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const doc = await pdfjs.getDocument({ data, isEvalSupported: false, disableFontFace: true })
    .promise;

  const pages: TextPage[] = [];
  for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber += 1) {
    process.stderr.write(`\rreading page ${pageNumber} of ${doc.numPages}…`);
    const page = await doc.getPage(pageNumber);
    const content = await page.getTextContent();
    const items = [];
    for (const item of content.items) {
      if (!('str' in item)) continue;
      if (!item.str.trim()) continue;
      const [, , , scaleY, x, y] = item.transform as number[];
      items.push({
        text: item.str,
        x: x ?? 0,
        y: y ?? 0,
        width: item.width ?? 0,
        height: item.height || Math.abs(scaleY ?? 0),
      });
    }
    pages.push({ pageNumber, items });
    page.cleanup();
  }
  await doc.destroy();
  process.stderr.write('\r                         \r');
  return pages;
}

const GPA_TOLERANCE = 0.005;
const CREDIT_TOLERANCE = 0.5;

const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;
const bold = (s: string) => `\x1b[1m${s}\x1b[0m`;

function compare(label: string, ours: number | null, theirs: number | null, tolerance: number) {
  if (theirs === null) {
    return { line: `  ${dim(label.padEnd(22))} ${fmt(ours)}  ${dim('(transcript prints none)')}`, ok: true };
  }
  const ok = ours !== null && Math.abs(ours - theirs) <= tolerance;
  const mark = ok ? green('✓') : red('✗');
  const delta = ours !== null && !ok ? red(`   off by ${(ours - theirs).toFixed(3)}`) : '';
  return {
    line: `  ${mark} ${label.padEnd(22)} ours ${fmt(ours).padStart(8)}   transcript ${fmt(theirs).padStart(8)}${delta}`,
    ok,
  };
}

const fmt = (n: number | null) => (n === null ? '—' : String(Number(n.toFixed(3))));

function reconcile(transcript: Transcript) {
  let failures = 0;

  console.log(bold('\nPER TERM'));
  console.log(dim('  Each term prints its own GPA and credits. A term that disagrees is where'));
  console.log(dim('  the parse went wrong — start reading the PDF there.\n'));

  for (const term of transcript.terms) {
    const totals = computeGpa(term.courses);
    const gpa = compare('term GPA', totals.gpa, term.statedTermGpa, GPA_TOLERANCE);
    const credits = compare(
      'term credits earned',
      totals.earnedCredits,
      term.statedTermCredits,
      CREDIT_TOLERANCE,
    );

    const bad = !gpa.ok || !credits.ok;
    if (bad) failures += 1;

    console.log(`${bad ? red('▌') : green('▌')} ${bold(term.id)}  ${dim(`${term.courses.length} courses`)}`);
    console.log(gpa.line);
    console.log(credits.line);

    // Only print the rows for a term that disagrees — that is the term worth
    // reading against the paper.
    if (bad) {
      console.log(dim('    rows as parsed:'));
      for (const course of term.courses) {
        console.log(
          dim(
            `      ${course.courseId.padEnd(9)} ${String(course.grade).padEnd(3)} ` +
              `${String(course.credits).padStart(5)} attempted  ` +
              `${String(course.creditsEarned ?? course.credits).padStart(5)} earned  ` +
              `${course.gradePoints === null ? '  —' : (course.credits * course.gradePoints).toFixed(2).padStart(6)} qpts` +
              `${course.countsTowardGpa ? '' : '   (not in GPA)'}`,
          ),
        );
      }
    }
    console.log();
  }

  console.log(bold('CUMULATIVE'));
  const totals = cumulativeTotals(transcript);
  const check = selfCheck(transcript);
  const cumGpa = compare('cumulative GPA', totals.gpa, transcript.statedCumulativeGpa, GPA_TOLERANCE);
  const cumCredits = compare(
    'credits earned',
    totals.earnedCredits,
    transcript.statedCumulativeCredits,
    CREDIT_TOLERANCE,
  );
  console.log(cumGpa.line);
  console.log(cumCredits.line);
  if (!cumGpa.ok || !cumCredits.ok) failures += 1;

  console.log(bold('\nWHAT ELSE IS ON THE RECORD'));
  console.log(`  transfer / exam credit rows : ${transcript.nonGpaCredits.length}`);
  console.log(`  registered, not yet graded  : ${transcript.inProgress.length}`);
  console.log(`  major read from the header  : ${transcript.major ?? dim('none found')}`);

  const repeats = repeatedCourses(transcript);
  if (repeats.length > 0) {
    console.log(
      `  ${red('repeated courses')}            : ` +
        repeats.map((r) => `${r.courseId} (${r.attempts.map((a) => a.grade).join(' then ')})`).join(', '),
    );
    console.log(dim('    TerpTracker counts every attempt; UMD counts only the later one.'));
    console.log(dim('    This is a known bug — the numbers above will be wrong because of it.'));
  }

  if (transcript.warnings.length > 0) {
    console.log(bold('\nWARNINGS THE PARSER RAISED'));
    for (const warning of transcript.warnings) {
      console.log(`  ${red(warning.code)}: ${warning.message}`);
      if (warning.detail) console.log(dim(`    ${warning.detail}`));
    }
  }

  console.log();
  if (failures === 0 && check.ok) {
    console.log(green(bold('Every printed total on this transcript reconciles.')));
    console.log(dim('That covers the parse. It says nothing about whether the degree audit'));
    console.log(dim('matches your official one — compare those requirement by requirement.'));
  } else {
    console.log(red(bold(`${failures} place(s) disagree with what the transcript prints.`)));
    console.log(dim('Each one is a parser bug. Add the offending rows to fixtures/ as a new'));
    console.log(dim('case — invented student data, real column positions — and fix from there.'));
  }
  return failures;
}

const path = process.argv[2];
if (!path) {
  console.error('Usage: npm run reconcile -- <path-to-transcript.pdf>');
  process.exit(2);
}

const buffer = await readFile(path);
const parsed = withSelfCheck(
  parseTranscriptPages(await extractPagesInNode(new Uint8Array(buffer))),
);

console.log(bold(`\nReconciling ${path}`));
console.log(dim('Nothing here is written to disk or sent anywhere.'));
const failures = reconcile(parsed);
process.exit(failures === 0 ? 0 : 1);
