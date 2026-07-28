// @vitest-environment happy-dom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { SomethingWrong } from './SomethingWrong.tsx';
import type { CourseEntry, Transcript } from '../../lib/types.ts';

/**
 * Two things are being tested, and only the second is about React.
 *
 * First: the reader sees the report before the link opens. A public issue with
 * their name on it should never be a surprise.
 *
 * Second: nothing from the transcript reaches the rendered panel — which is the
 * same text the link carries — even though the transcript below is loaded with
 * distinctive course data and warnings that quote the document.
 */

afterEach(cleanup);

function course(courseId: string, title: string, grade: CourseEntry['grade']): CourseEntry {
  return {
    courseId,
    title,
    credits: 3,
    creditsEarned: 3,
    grade,
    gradePoints: 1,
    countsTowardGpa: true,
    source: 'institution',
  };
}

/** Strings that must never render into the report the reader is about to send. */
const SECRETS = [
  'CMSC131',
  'ORGANIC CHEMISTRY',
  'Byanjankar',
  '119781326',
  'D-',
  '2.104',
  'CMSC420  ORGANIC CHEMISTRY  D-  3.00  3.00  3.00',
];

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
    {
      code: 'unparsed_line',
      message: 'CMSC351 was not under any term heading.',
      page: 2,
      detail: 'CMSC420  ORGANIC CHEMISTRY  D-  3.00  3.00  3.00',
    },
    { code: 'gpa_mismatch', message: 'Byanjankar 119781326', detail: 'delta 1.796' },
  ],
};

describe('SomethingWrong', () => {
  it('shows nothing but the button until the reader asks', () => {
    render(<SomethingWrong view="Dashboard" transcript={loaded} />);
    expect(screen.getByRole('button', { name: 'Something looks wrong' })).toBeTruthy();
    expect(screen.queryByText('This is exactly what will be sent')).toBeNull();
    expect(screen.queryByRole('link', { name: 'Open GitHub issue' })).toBeNull();
  });

  it('previews the exact title and body before opening anything', () => {
    render(<SomethingWrong view="Requirements" transcript={loaded} />);
    fireEvent.click(screen.getByRole('button', { name: 'Something looks wrong' }));

    expect(screen.getByText('This is exactly what will be sent')).toBeTruthy();
    expect(screen.getByText('Something looks wrong on the Requirements view')).toBeTruthy();

    const link = screen.getByRole('link', { name: 'Open GitHub issue' }) as HTMLAnchorElement;
    const url = new URL(link.href);
    expect(url.origin + url.pathname).toBe(
      'https://github.com/sanirb-debug/UMDTerpTracker/issues/new',
    );
    // Whatever the reader just read is exactly what the link carries — compared
    // against the <pre> verbatim, since getByText collapses the newlines.
    const shown = Array.from(document.querySelectorAll('pre')).map((el) => el.textContent);
    expect(shown).toContain(url.searchParams.get('title'));
    expect(shown).toContain(url.searchParams.get('body'));
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener noreferrer');
  });

  it('puts no course or grade data on screen or in the link', () => {
    render(<SomethingWrong view="Dashboard" transcript={loaded} sampleId={undefined} />);
    fireEvent.click(screen.getByRole('button', { name: 'Something looks wrong' }));

    const rendered = document.body.textContent ?? '';
    const link = screen.getByRole('link', { name: 'Open GitHub issue' }) as HTMLAnchorElement;
    for (const secret of SECRETS) {
      expect(rendered, `panel leaked ${secret}`).not.toContain(secret);
      expect(decodeURIComponent(link.href), `link leaked ${secret}`).not.toContain(secret);
    }
    // The codes themselves are fine, and are the point of sending anything.
    expect(rendered).toContain('unparsed_line');
    expect(rendered).toContain('gpa_mismatch');
  });

  it('names the demo sample when one is loaded, and closes on cancel', () => {
    render(
      <SomethingWrong view="Planner" transcript={loaded} sampleId="sample-biology-junior" />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Something looks wrong' }));
    expect(document.body.textContent).toContain('sample-biology-junior');

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('link', { name: 'Open GitHub issue' })).toBeNull();
  });

  it('works with no transcript loaded at all', () => {
    render(<SomethingWrong view="Transcript" transcript={null} />);
    fireEvent.click(screen.getByRole('button', { name: 'Something looks wrong' }));
    expect(screen.getByRole('link', { name: 'Open GitHub issue' })).toBeTruthy();
  });
});
