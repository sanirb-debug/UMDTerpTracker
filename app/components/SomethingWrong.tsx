import { useMemo, useState } from 'react';
import type { Transcript } from '../../lib/types.ts';
import { buildIssueReport, issueContextFrom } from '../../lib/issueReport.ts';
import type { IssueView } from '../../lib/issueReport.ts';

interface Props {
  view: IssueView;
  transcript: Transcript | null;
  sampleId?: string;
  className?: string;
}

/**
 * Report that something looks wrong, as a prefilled public GitHub issue.
 *
 * The report is shown in full before anything opens. That is not a nicety: the
 * issue is public and permanent, so the reader gets to read every word that
 * will carry their name on it before deciding. Nothing is sent by this
 * component — the button is a link the reader chooses to follow.
 *
 * What goes in is built by `lib/issueReport.ts`, whose input type has nowhere
 * to put a course, a grade or a GPA.
 */
export function SomethingWrong({ view, transcript, sampleId, className }: Props) {
  const [open, setOpen] = useState(false);
  const report = useMemo(
    () => buildIssueReport(issueContextFrom({ view, transcript, sampleId })),
    [view, transcript, sampleId],
  );

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`text-xs text-neutral-500 underline decoration-dotted underline-offset-2 hover:text-neutral-900 dark:hover:text-neutral-100 ${className ?? ''}`}
      >
        Something looks wrong
      </button>
    );
  }

  return (
    <div className="mt-2 w-full rounded-lg border border-neutral-300 p-3 text-left dark:border-neutral-700">
      <h3 className="text-sm font-semibold">This is exactly what will be sent</h3>
      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
        It opens a public GitHub issue in a new tab, prefilled with the text below and nothing
        else. No part of your transcript is included — no courses, grades, GPA, name or student
        ID. Please keep it that way when you add your description.
      </p>

      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
        Title
      </p>
      <pre className="mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950">
        {report.title}
      </pre>

      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">Body</p>
      <pre className="mt-1 max-h-56 overflow-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950">
        {report.body}
      </pre>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <a
          className="button text-xs"
          href={report.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Open GitHub issue
        </a>
        <button type="button" className="button-quiet text-xs" onClick={() => setOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
