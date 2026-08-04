// @vitest-environment happy-dom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Feedback } from './Feedback.tsx';
import { NOTE_MAX } from '../../lib/feedbackReport.ts';
import type { CourseEntry, Transcript } from '../../lib/types.ts';

/**
 * The flow, rather than the string-building — that is covered in
 * `lib/feedbackReport.test.ts`. What matters here is that nothing opens
 * without the reader seeing the finished issue first, and that the panel they
 * are shown contains none of their transcript.
 */

afterEach(cleanup);

const SECRETS = ['CMSC131', 'ORGANIC CHEMISTRY', 'Byanjankar', '119781326', 'D-', '2.104'];

function course(courseId: string, title: string, grade: CourseEntry['grade']): CourseEntry {
  return {
    courseId,
    title,
    credits: 3,
    creditsEarned: 3,
    grade,
    gradePoints: 0.7,
    countsTowardGpa: true,
    source: 'institution',
  };
}

const loaded: Transcript = {
  major: 'Computer Science',
  terms: [
    {
      id: '2025-Fall',
      season: 'Fall',
      year: 2025,
      courses: [course('CMSC131', 'ORGANIC CHEMISTRY', 'D-')],
      statedTermGpa: 2.104,
      statedTermCredits: 3,
    },
  ],
  nonGpaCredits: [],
  inProgress: [],
  statedCumulativeGpa: 2.104,
  statedCumulativeCredits: 3,
  warnings: [
    { code: 'gpa_mismatch', message: 'Byanjankar 119781326 read 2.104', detail: 'delta 1.796' },
  ],
};

const open = () => fireEvent.click(screen.getByRole('button', { name: 'Feedback' }));
const preview = () =>
  fireEvent.click(screen.getByRole('button', { name: 'Show me what will be sent' }));

describe('the feedback flow', () => {
  it('is a quiet link until asked', () => {
    render(<Feedback view="Dashboard" transcript={loaded} />);
    expect(screen.getByRole('button', { name: 'Feedback' })).toBeTruthy();
    expect(screen.queryByText('How did this go?')).toBeNull();
  });

  it('asks the five questions as taps, not prose', () => {
    render(<Feedback view="Dashboard" transcript={loaded} />);
    open();

    expect(screen.getByText('Did the GPA we calculated match your transcript?')).toBeTruthy();
    const legends = [...document.querySelectorAll('legend')].map((l) => l.textContent);
    expect(legends.some((text) => /official UMD degree audit/.test(text ?? ''))).toBe(true);
    expect(screen.getByText('What did you use this for?')).toBeTruthy();
    expect(screen.getByText("What's missing?")).toBeTruthy();
    expect(screen.getByText('Anything else?')).toBeTruthy();

    // Closed sets, so no answer can carry a transcript.
    expect(document.querySelectorAll('input[type=radio]').length).toBe(3 + 4);
    expect(document.querySelectorAll('input[type=checkbox]').length).toBe(5 + 5);
  });

  it('warns about the public issue directly above the free-text box', () => {
    render(<Feedback view="Dashboard" transcript={loaded} />);
    open();

    const textarea = document.querySelector('textarea')!;
    const warning = screen.getByText(/This goes into a public GitHub issue/).closest('p')!;
    expect(warning).toBeTruthy();
    expect(warning.textContent).toMatch(
      /don.t paste grades, course lists, your name, or your student ID/i,
    );
    // Immediately before it in the document, not in a footnote somewhere.
    expect(warning.compareDocumentPosition(textarea) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(textarea.getAttribute('maxlength')).toBe(String(NOTE_MAX));
  });

  it('opens nothing until the reader has seen the exact body', () => {
    render(<Feedback view="Dashboard" transcript={loaded} />);
    open();
    // No link exists while the form is being filled in.
    expect(screen.queryByRole('link', { name: 'Open GitHub issue' })).toBeNull();

    preview();
    const link = screen.getByRole('link', { name: 'Open GitHub issue' }) as HTMLAnchorElement;
    const shown = [...document.querySelectorAll('pre')].map((pre) => pre.textContent);
    const params = new URL(link.href).searchParams;

    expect(shown).toContain(params.get('title'));
    expect(shown).toContain(params.get('body'));
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener noreferrer');
  });

  it('lets the reader go back and change an answer, or cancel outright', () => {
    render(<Feedback view="Dashboard" transcript={loaded} />);
    open();
    preview();

    fireEvent.click(screen.getByRole('button', { name: 'Back' }));
    expect(screen.getByText('How did this go?')).toBeTruthy();

    preview();
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.getByRole('button', { name: 'Feedback' })).toBeTruthy();
    expect(screen.queryByRole('link', { name: 'Open GitHub issue' })).toBeNull();
  });

  it('shows the labels the issue will carry', () => {
    render(<Feedback view="Requirements" transcript={loaded} />);
    open();
    fireEvent.click(screen.getByText('No — the GPA did not match my transcript'));
    preview();

    expect(document.body.textContent).toContain('gpa-mismatch-reported');
  });

  it('puts no transcript content on screen or in the link', () => {
    render(<Feedback view="Requirements" transcript={loaded} />);
    open();
    fireEvent.click(screen.getByText('No — the GPA did not match my transcript'));
    fireEvent.click(screen.getByText('Check my GPA'));
    preview();

    const link = screen.getByRole('link', { name: 'Open GitHub issue' }) as HTMLAnchorElement;
    const rendered = document.body.textContent ?? '';
    for (const secret of SECRETS) {
      expect(rendered, `panel leaked ${secret}`).not.toContain(secret);
      expect(decodeURIComponent(link.href), `link leaked ${secret}`).not.toContain(secret);
    }
    // The warning code is the point of attaching anything.
    expect(rendered).toContain('gpa_mismatch');
  });

  it('answers Q2 as N/A only when it knows there was no audit', () => {
    const { unmount } = render(
      <Feedback view="Requirements" transcript={loaded} hasMajorAudit={false} />,
    );
    open();
    expect(
      (screen.getByText('N/A — no major audit was available').querySelector('input') as HTMLInputElement)
        .checked,
    ).toBe(true);
    unmount();

    // Unknown: assume nothing on the reader's behalf.
    render(<Feedback view="Requirements" transcript={loaded} />);
    open();
    for (const input of document.querySelectorAll('input[name=audit-matched]')) {
      expect((input as HTMLInputElement).checked).toBe(false);
    }
  });

  it('can start open, for the prompt after a session', () => {
    render(<Feedback view="Planner" transcript={loaded} startOpen />);
    expect(screen.getByText('How did this go?')).toBeTruthy();
  });
});
