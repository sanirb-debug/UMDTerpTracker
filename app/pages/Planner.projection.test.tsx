// @vitest-environment happy-dom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { PlannerPage } from './Planner.tsx';
import type { CourseEntry, Transcript } from '../../lib/types.ts';

/**
 * The pinned summary exists so the number moves where somebody can see it.
 * These tests are about that number: that a grade picked in the editor reaches
 * it, and that it is the projection rather than a restatement of the target.
 */

afterEach(cleanup);
beforeEach(() => window.localStorage.clear());

function graded(courseId: string, grade: CourseEntry['grade'], gradePoints: number): CourseEntry {
  return {
    courseId,
    title: '',
    credits: 3,
    creditsEarned: 3,
    grade,
    gradePoints,
    countsTowardGpa: true,
    source: 'institution',
  };
}

/** 6 graded credits at 3.0 flat, so the arithmetic below is checkable by hand. */
const transcript: Transcript = {
  major: 'Computer Science',
  terms: [
    {
      id: '2025-Fall',
      season: 'Fall',
      year: 2025,
      courses: [graded('CMSC131', 'B', 3), graded('MATH140', 'B', 3)],
      statedTermGpa: 3,
      statedTermCredits: 6,
    },
  ],
  nonGpaCredits: [],
  inProgress: [
    {
      courseId: 'CMSC132',
      title: '',
      credits: 3,
      grade: 'NG',
      gradePoints: null,
      countsTowardGpa: false,
      source: 'institution',
      termId: '2026-Spring',
    },
  ],
  statedCumulativeGpa: 3,
  statedCumulativeCredits: 6,
  warnings: [],
};

const summary = () => screen.getByRole('status').textContent ?? '';

/**
 * The planned course's credits come from the cached catalog, so the expected
 * GPA is derived rather than hard-coded: 6 credits already at 3.0 is 18 quality
 * points, and the planned course adds its own credits at the grade's value.
 */
function expected(gradePoints: number): string {
  const credits = Number(
    (screen.getByLabelText('credits for CMSC132') as HTMLInputElement).value,
  );
  return ((18 + gradePoints * credits) / (6 + credits)).toFixed(3);
}

describe('the pinned summary', () => {
  it('shows the standing and what the target needs before any grade is set', () => {
    render(<PlannerPage transcript={transcript} />);
    expect(summary()).toContain('Cumulative GPA');
    expect(summary()).toContain('3.000');
  });

  it('switches to the projection as soon as a grade is tried on', () => {
    render(<PlannerPage transcript={transcript} />);
    const grade = screen.getByLabelText('grade to try for CMSC132');
    expect((grade as HTMLSelectElement).tagName).toBe('SELECT');

    fireEvent.change(grade, { target: { value: 'A' } });

    expect(summary()).toContain('Projected GPA');
    expect(summary()).toContain(expected(4.0));
    expect(summary()).toContain('1 of 1 graded');
  });

  it('moves with the grade rather than sticking on the first one', () => {
    render(<PlannerPage transcript={transcript} />);
    const grade = screen.getByLabelText('grade to try for CMSC132');

    fireEvent.change(grade, { target: { value: 'A' } });
    expect(summary()).toContain(expected(4.0));
    fireEvent.change(grade, { target: { value: 'C' } });
    expect(summary()).toContain(expected(2.0));
  });

  it('goes back to the standing when the grade is cleared', () => {
    render(<PlannerPage transcript={transcript} />);
    const grade = screen.getByLabelText('grade to try for CMSC132');

    fireEvent.change(grade, { target: { value: 'A' } });
    expect(summary()).toContain('Projected GPA');
    fireEvent.change(grade, { target: { value: '' } });
    expect(summary()).toContain('Cumulative GPA');
  });

  it('is a status region, so a screen reader mentions it without interrupting', () => {
    render(<PlannerPage transcript={transcript} />);
    const bar = screen.getByRole('status');
    expect(bar.getAttribute('aria-live')).toBeNull();
    // Hidden from `sm` up: on a desktop the editor and the verdict are both
    // already on screen, which is what this is standing in for.
    expect(bar.className).toContain('sm:hidden');
  });

  it('stays away until there is something to project', () => {
    const empty: Transcript = { ...transcript, inProgress: [] };
    render(<PlannerPage transcript={empty} />);
    expect(screen.queryByRole('status')).toBeNull();
  });
});

describe('the grade picker', () => {
  it('offers plannable letter grades and an unset option', () => {
    render(<PlannerPage transcript={transcript} />);
    const grade = screen.getByLabelText('grade to try for CMSC132') as HTMLSelectElement;
    const values = [...grade.options].map((option) => option.value);

    expect(values[0]).toBe('');
    expect(values).toContain('A');
    expect(values).toContain('D-');
    // F is deliberately absent — nobody plans one.
    expect(values).not.toContain('F');
  });
});
