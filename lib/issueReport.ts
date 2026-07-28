import type { ParseWarning, Transcript } from './types.ts';
import { selfCheck } from './parser/selfCheck.ts';

/**
 * Building the bug report that "Something looks wrong" opens.
 *
 * ## The whole design is the input type
 *
 * A GitHub issue is public forever. The report therefore never sees a
 * `Transcript` — `buildIssueReport` takes `IssueContext`, and every field of
 * `IssueContext` is a literal union, a boolean or a fixed-shape id. There is no
 * field a course code, a grade, a title, a name or a student number could
 * occupy even if some future caller tried, because the type system has nowhere
 * to put them.
 *
 * Only `issueContextFrom` touches a transcript, and it reads exactly two
 * things: the *codes* of the warnings, and whether the self-check passed.
 *
 * ## Why warning codes and not warning messages
 *
 * `ParseWarning.message` and `.detail` carry transcript content on purpose,
 * because they are written for the person reading their own screen. The
 * `unparsed_line` warning puts the raw transcript line in `detail` — a whole
 * course row, code, title, grade and credits — and names the course in its
 * message. `gpa_mismatch` states the actual GPAs. None of that can go in a
 * public issue, and `code` is a six-member union that cannot express any of it.
 */

/** Which screen the reader was looking at. */
export type IssueView = 'Dashboard' | 'Requirements' | 'Schedule' | 'Planner' | 'Transcript';

/**
 * Whether the GPA computed from the parsed rows matched the one the transcript
 * printed. Deliberately not the two numbers — a GPA is the reader's, and
 * "matched or did not" is what a maintainer needs.
 */
export type GpaCheck = 'matches' | 'differs' | 'transcript-printed-none';

export interface IssueContext {
  view: IssueView;
  /** A demo sample, or the reader's own file. Never anything identifying it. */
  source: 'sample' | 'upload';
  /** Which demo sample, when it was one. Absent for a real upload. */
  sampleId?: string;
  /** Warning codes only. The union cannot hold a message or a transcript line. */
  warningCodes: ParseWarning['code'][];
  gpaCheck: GpaCheck;
}

export const ISSUE_REPO = 'https://github.com/sanirb-debug/UMDTerpTracker';

const GPA_WORDING: Record<GpaCheck, string> = {
  matches: 'Computed GPA matches the GPA printed on the transcript.',
  differs: 'Computed GPA does NOT match the GPA printed on the transcript.',
  'transcript-printed-none': 'The transcript printed no cumulative GPA to compare against.',
};

export interface IssueReport {
  title: string;
  /** Shown to the reader verbatim before anything opens. */
  body: string;
  url: string;
}

export function buildIssueReport(context: IssueContext): IssueReport {
  const title = `Something looks wrong on the ${context.view} view`;

  const lines = [
    "Reporting something that looks wrong. I haven't described the problem yet — adding that below.",
    '',
    '## What I was doing',
    '',
    `- View: ${context.view}`,
    `- Data: ${context.source === 'sample' ? `demo sample \`${context.sampleId ?? 'unknown'}\`` : 'my own uploaded transcript'}`,
    '',
    '## What the app reported',
    '',
    `- Parse warnings: ${context.warningCodes.length > 0 ? context.warningCodes.join(', ') : 'none'}`,
    `- ${GPA_WORDING[context.gpaCheck]}`,
    '',
    '## What went wrong',
    '',
    '<!-- Please describe what you expected and what you saw. -->',
    '',
    '---',
    '',
    'This report was prefilled by TerpTracker and deliberately contains no',
    'transcript contents: no courses, grades, credits, GPA values, name or',
    'student ID. Please do not paste any of those into a public issue.',
  ];

  const body = lines.join('\n');
  const url = `${ISSUE_REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  return { title, body, url };
}

/**
 * Reduce a transcript to the handful of non-identifying facts the report may
 * carry.
 *
 * This is the only function in the codebase that reads a transcript on the way
 * to a public issue, and it reads two things: warning codes, and whether the
 * self-check passed. Everything else about the transcript is dropped here.
 */
export function issueContextFrom(options: {
  view: IssueView;
  transcript: Transcript | null;
  sampleId?: string;
}): IssueContext {
  const { view, transcript, sampleId } = options;

  if (!transcript) {
    return {
      view,
      source: sampleId ? 'sample' : 'upload',
      ...(sampleId ? { sampleId } : {}),
      warningCodes: [],
      gpaCheck: 'transcript-printed-none',
    };
  }

  const check = selfCheck(transcript);
  const gpaCheck: GpaCheck =
    check.statedGpa === null ? 'transcript-printed-none' : check.ok ? 'matches' : 'differs';

  return {
    view,
    source: sampleId ? 'sample' : 'upload',
    ...(sampleId ? { sampleId } : {}),
    // Codes only — never `message` or `detail`, which quote the transcript.
    warningCodes: [...new Set(transcript.warnings.map((warning) => warning.code))],
    gpaCheck,
  };
}
