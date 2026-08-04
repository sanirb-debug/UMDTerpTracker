import { ISSUE_REPO } from './issueReport.ts';
import type { IssueContext } from './issueReport.ts';

/**
 * The structured feedback form, as a prefilled public GitHub issue.
 *
 * ## Why the answers are unions and not strings
 *
 * This shares `IssueContext` with "Something looks wrong", and for the same
 * reason: a GitHub issue is public forever, so the auto-attached half of the
 * report is built from a type that has nowhere to put a course code, a grade,
 * a GPA, a name or a student number. That guarantee is structural, not a
 * convention somebody has to remember.
 *
 * The answers below extend it in the same shape. Every question is a closed
 * set of literals, so no amount of tapping can produce transcript content.
 *
 * ## The one free-text field
 *
 * `note` is the single exception, and it is the reader's own words rather than
 * anything the app derived. It cannot be made safe by typing — somebody
 * determined to paste their transcript into a public issue can. What it gets
 * instead is a hard length cap, a warning immediately above the box, and the
 * finished body shown in full before anything opens. The cap is enforced here
 * rather than only by `maxLength` on the textarea, because a pasted string can
 * exceed an attribute the DOM only advisorily applies.
 */

export const NOTE_MAX = 300;

export type GpaMatched = 'yes' | 'no' | 'not-sure';
export type AuditMatched = 'yes' | 'no' | 'didnt-check' | 'not-applicable';
export type UsedFor = 'check-gpa' | 'plan-semester' | 'hit-target' | 'check-requirements' | 'looking';
export type Missing = 'major' | 'minor' | 'pathway' | 'schedule-planning' | 'other';

export interface FeedbackAnswers {
  gpaMatched: GpaMatched | null;
  /** Only meaningful when a major audit was on screen. */
  auditMatched: AuditMatched | null;
  usedFor: UsedFor[];
  missing: Missing[];
  /** The reader's own words. Capped, warned about, and shown before sending. */
  note: string;
}

export const EMPTY_ANSWERS: FeedbackAnswers = {
  gpaMatched: null,
  auditMatched: null,
  usedFor: [],
  missing: [],
  note: '',
};

const GPA_ANSWER: Record<GpaMatched, string> = {
  yes: 'Yes — the GPA matched my transcript',
  no: 'No — the GPA did not match my transcript',
  'not-sure': 'Not sure',
};

const AUDIT_ANSWER: Record<AuditMatched, string> = {
  yes: 'Yes — it matched my official UMD degree audit',
  no: 'No — it did not match my official UMD degree audit',
  'didnt-check': "Didn't check",
  'not-applicable': 'N/A — no major audit was available',
};

const USED_FOR_LABEL: Record<UsedFor, string> = {
  'check-gpa': 'Check my GPA',
  'plan-semester': 'Plan next semester',
  'hit-target': 'Work out how to hit a GPA target',
  'check-requirements': 'Check degree requirements',
  looking: 'Just looking',
};

const MISSING_LABEL: Record<Missing, string> = {
  major: 'My major',
  minor: 'My minor',
  pathway: 'A pathway (e.g. pre-nursing, pre-med)',
  'schedule-planning': 'Schedule planning',
  other: 'Something else',
};

/** Human-readable text for every option, so the UI and the issue body agree. */
export const OPTION_LABELS = {
  gpaMatched: GPA_ANSWER,
  auditMatched: AUDIT_ANSWER,
  usedFor: USED_FOR_LABEL,
  missing: MISSING_LABEL,
} as const;

const GPA_CHECK_WORDING: Record<IssueContext['gpaCheck'], string> = {
  matches: 'computed GPA matched the printed GPA',
  differs: 'computed GPA did NOT match the printed GPA',
  'transcript-printed-none': 'the transcript printed no GPA to compare against',
};

export interface FeedbackReport {
  title: string;
  /** Shown to the reader verbatim before anything opens. */
  body: string;
  /** GitHub labels, so the correctness signal is filterable. */
  labels: string[];
  url: string;
}

/**
 * Labels chosen so the two correctness questions are findable on their own.
 *
 * Q1 and Q2 are the only questions whose answers mean the software is wrong,
 * and a maintainer wants those without reading through feature requests. They
 * get their own labels rather than being buried in the body text.
 */
export function labelsFor(answers: FeedbackAnswers): string[] {
  const labels = ['feedback'];
  if (answers.gpaMatched === 'no') labels.push('gpa-mismatch-reported');
  if (answers.auditMatched === 'no') labels.push('audit-mismatch-reported');
  if (answers.missing.length > 0) labels.push('coverage-request');
  return labels;
}

/** Trim to the cap and flatten newlines, so one answer stays one block. */
export function normalizeNote(note: string): string {
  return note.replace(/\r?\n+/g, ' ').trim().slice(0, NOTE_MAX);
}

export function buildFeedbackReport(
  context: IssueContext,
  answers: FeedbackAnswers,
): FeedbackReport {
  const note = normalizeNote(answers.note);
  const title = `Feedback from the ${context.view} view`;

  const list = <T extends string>(chosen: T[], labels: Record<T, string>) =>
    chosen.length > 0 ? chosen.map((value) => `\`${labels[value]}\``).join(', ') : '_no answer_';

  const lines = [
    'Feedback submitted through the app.',
    '',
    '## Did it get the numbers right',
    '',
    `- **GPA matched my transcript:** ${
      answers.gpaMatched ? GPA_ANSWER[answers.gpaMatched] : '_no answer_'
    }`,
    `- **Audit matched my official UMD degree audit:** ${
      answers.auditMatched ? AUDIT_ANSWER[answers.auditMatched] : '_no answer_'
    }`,
    '',
    '## What it was used for',
    '',
    `- ${list(answers.usedFor, USED_FOR_LABEL)}`,
    '',
    '## What is missing',
    '',
    `- ${list(answers.missing, MISSING_LABEL)}`,
    '',
    '## Anything else',
    '',
    note.length > 0 ? note : '_nothing added_',
    '',
    '## Automatically attached',
    '',
    `- View: ${context.view}`,
    `- Data: ${
      context.source === 'sample'
        ? `demo sample \`${context.sampleId ?? 'unknown'}\``
        : 'the reader’s own uploaded transcript'
    }`,
    `- Parse warnings: ${
      context.warningCodes.length > 0 ? context.warningCodes.join(', ') : 'none'
    }`,
    `- Self-check: ${GPA_CHECK_WORDING[context.gpaCheck]}`,
    '',
    '---',
    '',
    'Everything above the free-text answer was prefilled by TerpTracker from a',
    'fixed set of options and deliberately contains no transcript contents: no',
    'courses, grades, credits, GPA values, name or student ID.',
  ];

  const body = lines.join('\n');
  const labels = labelsFor(answers);
  const url =
    `${ISSUE_REPO}/issues/new?title=${encodeURIComponent(title)}` +
    `&labels=${encodeURIComponent(labels.join(','))}` +
    `&body=${encodeURIComponent(body)}`;

  return { title, body, labels, url };
}
