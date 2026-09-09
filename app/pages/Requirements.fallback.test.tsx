// @vitest-environment happy-dom
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { RequirementsPage } from './Requirements.tsx';
import type { Transcript } from '../../lib/types.ts';

/**
 * A major nobody has transcribed is a normal state, not an error. The page must
 * say so rather than render an audit with no rules in it — an empty audit reads
 * like a finished degree, which is the most dangerous thing this app could show.
 */

afterEach(cleanup);

function transcript(major: string | undefined): Transcript {
  return {
    ...(major ? { major } : {}),
    terms: [
      {
        id: '2025-Fall',
        season: 'Fall',
        year: 2025,
        courses: [
          {
            courseId: 'PSYC100',
            title: 'INTRO PSYCHOLOGY',
            credits: 3,
            creditsEarned: 3,
            grade: 'A',
            gradePoints: 4,
            countsTowardGpa: true,
            source: 'institution',
          },
        ],
        statedTermGpa: null,
        statedTermCredits: null,
      },
    ],
    nonGpaCredits: [],
    inProgress: [],
    statedCumulativeGpa: null,
    statedCumulativeCredits: null,
    warnings: [],
  };
}

/** Every major in the demo grid that has no requirements file. */
const UNAUDITED = [
  'Psychology',
  'Criminology and Criminal Justice',
  'Economics',
  'Biological Sciences',
  'Government and Politics',
  'Mechanical Engineering',
  'Communication',
  'Kinesiology',
];

describe.each(UNAUDITED)('requirements page for %s', (major) => {
  it('renders the unavailable state instead of an empty audit, and does not throw', () => {
    expect(() => render(<RequirementsPage transcript={transcript(major)} />)).not.toThrow();
    expect(screen.getByText(/Degree audit not yet available for this major/i)).toBeTruthy();
    expect(screen.getByText(new RegExp(`${major} requirements yet`, 'i'))).toBeTruthy();
  });

  it('shows no audit tally it cannot compute', () => {
    render(<RequirementsPage transcript={transcript(major)} />);
    expect(screen.queryByText(/requirements met/i)).toBeNull();
    expect(screen.queryByText(/Still to take/i)).toBeNull();
  });
});

describe('requirements page without a requirements file', () => {

  it('never shows a requirements-met tally it cannot compute', () => {
    render(<RequirementsPage transcript={transcript('Psychology')} />);
    expect(screen.queryByText(/requirements met/i)).toBeNull();
    expect(screen.queryByText(/Still to take/i)).toBeNull();
  });

  it('says the rest of the app is unaffected', () => {
    render(<RequirementsPage transcript={transcript('Psychology')} />);
    expect(screen.getByText(/GPA, schedule and planner are unaffected/i)).toBeTruthy();
  });

  it('handles a transcript with no major at all', () => {
    expect(() => render(<RequirementsPage transcript={transcript(undefined)} />)).not.toThrow();
    expect(screen.getByText(/did not name a major/i)).toBeTruthy();
  });

  it('still renders a full audit for a major that does have one', () => {
    render(<RequirementsPage transcript={{ ...transcript('Information Science') }} />);
    expect(screen.getByText(/requirements met/i)).toBeTruthy();
  });
});

/**
 * The way out of the unavailable state.
 *
 * Testudo's name for a degree is not always one this app can match — a
 * concentration in parentheses, a double major, a wording nobody has seen. A
 * student who knows their own degree should be able to say so, and be believed.
 */
describe('picking a major by hand', () => {
  beforeEach(() => window.localStorage.clear());
  afterEach(() => window.localStorage.clear());

  it('offers the authored majors when the transcript matched none of them', () => {
    render(<RequirementsPage transcript={transcript('Astrophysics')} />);

    const picker = screen.getByRole('combobox');
    const options = within(picker)
      .getAllByRole('option')
      .map((option) => option.textContent);

    expect(options[0]).toContain('My transcript');
    expect(options.join(' ')).toContain('Computer Science');
    expect(options.join(' ')).toContain('Information Science');
  });

  it('runs the audit against the major that was picked', () => {
    render(<RequirementsPage transcript={transcript('Astrophysics')} />);
    expect(screen.getByText(/not yet available/i)).toBeTruthy();

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'cmsc-bs-2026' } });

    expect(screen.queryByText(/not yet available/i)).toBeNull();
    expect(screen.getByText(/requirements met/i)).toBeTruthy();
  });

  it('remembers the choice, so it survives a reload', () => {
    const { unmount } = render(<RequirementsPage transcript={transcript('Astrophysics')} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'cmsc-bs-2026' } });
    unmount();

    render(<RequirementsPage transcript={transcript('Astrophysics')} />);
    expect(screen.queryByText(/not yet available/i)).toBeNull();
  });

  it('can be handed back to the transcript', () => {
    render(<RequirementsPage transcript={transcript('Astrophysics')} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'cmsc-bs-2026' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '' } });

    expect(screen.getByText(/not yet available/i)).toBeTruthy();
  });

  it('is offered on a working audit too, so a wrong match can be corrected', () => {
    // Matching is a guess about somebody's degree, and guesses need an undo.
    render(<RequirementsPage transcript={transcript('Computer Science')} />);

    expect(screen.getByRole('combobox')).toBeTruthy();
    expect(screen.getByText(/requirements met/i)).toBeTruthy();
  });
});

/**
 * Gen Ed is read off codes Testudo prints at the end of each course row, and
 * not every transcript prints that column. Fourteen of every major's rules
 * select on those codes, so a missing column turns most of the audit into
 * confident-looking zeroes — the silent wrongness this app exists to avoid.
 */
describe('a transcript that prints no Gen Ed codes', () => {
  beforeEach(() => window.localStorage.clear());
  afterEach(() => window.localStorage.clear());

  it('says the codes are missing rather than reporting the categories unmet', () => {
    render(<RequirementsPage transcript={transcript('Computer Science')} />);

    expect(screen.getByText(/does not print Gen Ed codes/i)).toBeTruthy();
    expect(screen.getAllByText(/^Not checked$/i).length).toBeGreaterThan(1);
  });

  it('leaves them out of the requirements-met count instead of counting them against you', () => {
    render(<RequirementsPage transcript={transcript('Computer Science')} />);

    expect(document.body.textContent).toMatch(/requirements met · \d+ not checked/);
  });

  it('does not list Gen Ed credits under "still to take"', () => {
    // Forty credits of general education is not a thing to tell somebody they
    // owe when the reason is that the column was not printed.
    render(<RequirementsPage transcript={transcript('Computer Science')} />);

    const stillToTake = screen.queryByText(/Still to take/i)?.parentElement?.textContent ?? '';
    expect(stillToTake).not.toMatch(/General Education/i);
  });
});
