// @vitest-environment happy-dom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
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

describe('requirements page without a requirements file', () => {
  it('renders the unavailable state instead of an empty audit', () => {
    expect(() => render(<RequirementsPage transcript={transcript('Psychology')} />)).not.toThrow();
    expect(screen.getByText(/Degree audit not yet available for this major/i)).toBeTruthy();
    expect(screen.getByText(/Psychology requirements yet/i)).toBeTruthy();
  });

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
