// @vitest-environment happy-dom
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { DashboardPage } from './Dashboard.tsx';
import type { CourseEntry, Transcript } from '../../lib/types.ts';

/**
 * Below `sm` each transcript row is a card; from `sm` up it is the table it
 * always was. Both are in the DOM and CSS picks one, so what these tests can
 * check is that the pair stays in step: same courses, same grades, and the
 * mobile one never quietly drops the column somebody came for.
 */

afterEach(cleanup);

function course(courseId: string, title: string, grade: CourseEntry['grade']): CourseEntry {
  return {
    courseId,
    title,
    credits: 3,
    creditsEarned: 3,
    grade,
    gradePoints: 4,
    countsTowardGpa: true,
    source: 'institution',
  };
}

const transcript: Transcript = {
  major: 'Computer Science',
  terms: [
    {
      id: '2025-Fall',
      season: 'Fall',
      year: 2025,
      courses: [
        course('CMSC216', 'Introduction to Computer Systems', 'A'),
        course('MATH241', 'Calculus III', 'B+'),
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

const cardList = () => document.querySelector('main ul, ul.divide-y') as HTMLUListElement;

describe('the transcript rows on a narrow screen', () => {
  it('renders a card per course alongside the table, not instead of the data', () => {
    render(<DashboardPage transcript={transcript} />);

    const table = document.querySelector('table')!;
    const list = cardList();

    expect(list.querySelectorAll('li')).toHaveLength(2);
    expect(table.querySelectorAll('tbody tr')).toHaveLength(2);
    // The table takes over from `sm` up; the cards are the narrow-screen half.
    expect(table.className).toContain('sm:table');
    expect(table.className).toContain('hidden');
    expect(list.className).toContain('sm:hidden');
  });

  it('keeps the course and the grade — the two things being scanned for', () => {
    render(<DashboardPage transcript={transcript} />);
    const first = cardList().querySelectorAll('li')[0]!;

    expect(first.textContent).toContain('CMSC216');
    expect(first.textContent).toContain('A');
    expect(first.textContent).toContain('Introduction to Computer Systems');
    expect(first.textContent).toContain('3 credits');
  });

  it('does not solve the width with a scroll container', () => {
    render(<DashboardPage transcript={transcript} />);
    // A grade you have to swipe sideways to reach may as well not be rendered.
    for (const el of document.querySelectorAll('main *')) {
      expect(el.className.toString()).not.toContain('overflow-x-auto');
    }
  });

  it('drops the grade column for courses that do not have one yet', () => {
    const registered: Transcript = {
      ...transcript,
      terms: [],
      inProgress: [
        {
          // `NG` is what the parser writes for a course you are only
          // registered for — the transcript prints no grade at all.
          ...course('CMSC351', 'Algorithms', 'NG'),
          countsTowardGpa: false,
          gradePoints: null,
          termId: '2026-Spring',
        },
      ],
    };
    render(<DashboardPage transcript={registered} />);

    const first = cardList().querySelectorAll('li')[0]!;
    expect(first.textContent).toContain('CMSC351');
    expect(first.textContent).toContain('3 credits');
  });
});
