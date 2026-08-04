import { useMemo, useState } from 'react';
import type { Transcript } from '../../lib/types.ts';
import { issueContextFrom } from '../../lib/issueReport.ts';
import type { IssueView } from '../../lib/issueReport.ts';
import {
  EMPTY_ANSWERS,
  NOTE_MAX,
  OPTION_LABELS,
  buildFeedbackReport,
  normalizeNote,
} from '../../lib/feedbackReport.ts';
import type { AuditMatched, FeedbackAnswers, GpaMatched, Missing, UsedFor } from '../../lib/feedbackReport.ts';

interface Props {
  view: IssueView;
  transcript: Transcript | null;
  sampleId?: string;
  /**
   * Whether a major audit was actually on screen. `false` means we know there
   * was none, so Q2 can be answered N/A for the reader; `undefined` means we
   * do not know, and nothing is assumed on their behalf.
   */
  hasMajorAudit?: boolean;
  /** Rendered as the collapsed affordance. */
  label?: string;
  className?: string;
  onClose?: () => void;
  /** Open on mount, for the prompt that appears after a session. */
  startOpen?: boolean;
}

const GPA_OPTIONS: GpaMatched[] = ['yes', 'no', 'not-sure'];
const AUDIT_OPTIONS: AuditMatched[] = ['yes', 'no', 'didnt-check', 'not-applicable'];
const USED_FOR_OPTIONS: UsedFor[] = [
  'check-gpa',
  'plan-semester',
  'hit-target',
  'check-requirements',
  'looking',
];
const MISSING_OPTIONS: Missing[] = ['major', 'minor', 'pathway', 'schedule-planning', 'other'];

/**
 * Structured feedback, as a prefilled public GitHub issue.
 *
 * Mostly taps rather than prose, for two reasons. Answers drawn from a closed
 * set cannot contain somebody's transcript, and a maintainer can count them;
 * five hundred words of free text is neither.
 *
 * The last screen before anything opens is the finished issue body, verbatim.
 * That is not a nicety — the issue is public and permanent and will carry the
 * reader's GitHub name, so they get to read every word first and to change
 * their mind. Nothing is transmitted by this component; the final control is
 * a link the reader chooses to follow.
 */
export function Feedback({
  view,
  transcript,
  sampleId,
  hasMajorAudit,
  label = 'Feedback',
  className,
  onClose,
  startOpen = false,
}: Props) {
  const [stage, setStage] = useState<'closed' | 'form' | 'preview'>(
    startOpen ? 'form' : 'closed',
  );
  const [answers, setAnswers] = useState<FeedbackAnswers>({
    ...EMPTY_ANSWERS,
    // Answering for the reader is only honest when we actually know there was
    // no audit to compare. They can still change it.
    auditMatched: hasMajorAudit === false ? 'not-applicable' : null,
  });

  const report = useMemo(
    () => buildFeedbackReport(issueContextFrom({ view, transcript, sampleId }), answers),
    [view, transcript, sampleId, answers],
  );

  const close = () => {
    setStage('closed');
    onClose?.();
  };

  const toggle = <T extends string>(key: 'usedFor' | 'missing', value: T) =>
    setAnswers((current) => {
      const list = current[key] as T[];
      const next = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
      return { ...current, [key]: next };
    });

  if (stage === 'closed') {
    return (
      <button
        type="button"
        onClick={() => setStage('form')}
        className={`inline-flex min-h-11 items-center text-xs text-neutral-500 underline decoration-dotted underline-offset-2 hover:text-neutral-900 sm:min-h-0 dark:hover:text-neutral-100 ${className ?? ''}`}
      >
        {label}
      </button>
    );
  }

  if (stage === 'preview') {
    return (
      <div className="mt-2 w-full rounded-lg border border-neutral-300 p-3 text-left dark:border-neutral-700">
        <h3 className="text-sm font-semibold">This is exactly what will be sent</h3>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
          It opens a public GitHub issue in a new tab, prefilled with the text below and nothing
          else.
        </p>

        <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
          Title
        </p>
        <pre className="mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950">
          {report.title}
        </pre>

        <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
          Labels
        </p>
        <pre className="mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950">
          {report.labels.join(', ')}
        </pre>

        <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
          Body
        </p>
        <pre className="mt-1 max-h-64 overflow-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950">
          {report.body}
        </pre>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <a
            className="button text-xs"
            href={report.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Open GitHub issue
          </a>
          <button type="button" className="button-quiet text-xs" onClick={() => setStage('form')}>
            Back
          </button>
          <button type="button" className="button-quiet text-xs" onClick={close}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  const noteLength = normalizeNote(answers.note).length;

  return (
    <div className="mt-2 w-full rounded-lg border border-neutral-300 p-4 text-left dark:border-neutral-700">
      <h3 className="font-semibold">How did this go?</h3>
      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
        Every answer is optional. This becomes a public GitHub issue, and you will see exactly
        what it says before it opens.
      </p>

      <Choice
        legend="Did the GPA we calculated match your transcript?"
        name="gpa-matched"
        options={GPA_OPTIONS}
        labels={OPTION_LABELS.gpaMatched}
        value={answers.gpaMatched}
        onChange={(value) => setAnswers((current) => ({ ...current, gpaMatched: value }))}
      />

      <Choice
        legend={
          hasMajorAudit === false
            ? 'Did the requirements match your official UMD degree audit? (no audit was available for your major)'
            : 'Did the requirements match your official UMD degree audit?'
        }
        name="audit-matched"
        options={AUDIT_OPTIONS}
        labels={OPTION_LABELS.auditMatched}
        value={answers.auditMatched}
        onChange={(value) => setAnswers((current) => ({ ...current, auditMatched: value }))}
      />

      <Multi
        legend="What did you use this for?"
        options={USED_FOR_OPTIONS}
        labels={OPTION_LABELS.usedFor}
        chosen={answers.usedFor}
        onToggle={(value) => toggle('usedFor', value)}
      />

      <Multi
        legend="What's missing?"
        options={MISSING_OPTIONS}
        labels={OPTION_LABELS.missing}
        chosen={answers.missing}
        onToggle={(value) => toggle('missing', value)}
      />

      <fieldset className="mt-4">
        <legend className="text-sm font-medium">Anything else?</legend>

        {/*
          Directly above the box, not in a footnote. This is the only field
          that can carry anything the app did not choose, so the warning goes
          where somebody's hands already are.
        */}
        <p className="mt-1 rounded border border-caution-400/60 bg-caution-50 px-2 py-1.5 text-xs text-caution-900 dark:border-caution-700/60 dark:bg-caution-950/30 dark:text-caution-100">
          <strong>This goes into a public GitHub issue.</strong> Please don&apos;t paste grades,
          course lists, your name, or your student ID.
        </p>

        <textarea
          className="input mt-2 h-24"
          maxLength={NOTE_MAX}
          value={answers.note}
          placeholder="Optional"
          onChange={(event) =>
            setAnswers((current) => ({ ...current, note: event.target.value.slice(0, NOTE_MAX) }))
          }
        />
        <p className="mt-1 text-right text-xs tabular-nums text-neutral-500">
          {noteLength}/{NOTE_MAX}
        </p>
      </fieldset>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" className="button text-xs" onClick={() => setStage('preview')}>
          Show me what will be sent
        </button>
        <button type="button" className="button-quiet text-xs" onClick={close}>
          Cancel
        </button>
      </div>
    </div>
  );
}

/** One answer from a closed set. Real radios, so arrow keys work. */
function Choice<T extends string>({
  legend,
  name,
  options,
  labels,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: T[];
  labels: Record<T, string>;
  value: T | null;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset className="mt-4">
      <legend className="text-sm font-medium">{legend}</legend>
      <div className="mt-1 flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className={`inline-flex min-h-11 cursor-pointer items-center rounded-lg border px-3 py-1.5 text-xs sm:min-h-0 ${
              value === option
                ? 'border-accent-600 bg-accent-50 font-semibold dark:bg-accent-950/40'
                : 'border-neutral-300 hover:border-accent-600 dark:border-neutral-700'
            }`}
          >
            <input
              type="radio"
              name={name}
              className="sr-only"
              checked={value === option}
              onChange={() => onChange(option)}
            />
            {labels[option]}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/** Several answers from a closed set. Real checkboxes. */
function Multi<T extends string>({
  legend,
  options,
  labels,
  chosen,
  onToggle,
}: {
  legend: string;
  options: T[];
  labels: Record<T, string>;
  chosen: T[];
  onToggle: (value: T) => void;
}) {
  return (
    <fieldset className="mt-4">
      <legend className="text-sm font-medium">{legend}</legend>
      <div className="mt-1 flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className={`inline-flex min-h-11 cursor-pointer items-center rounded-lg border px-3 py-1.5 text-xs sm:min-h-0 ${
              chosen.includes(option)
                ? 'border-accent-600 bg-accent-50 font-semibold dark:bg-accent-950/40'
                : 'border-neutral-300 hover:border-accent-600 dark:border-neutral-700'
            }`}
          >
            <input
              type="checkbox"
              className="sr-only"
              checked={chosen.includes(option)}
              onChange={() => onToggle(option)}
            />
            {labels[option]}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
