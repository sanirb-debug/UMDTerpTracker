import { describe, expect, it } from 'vitest';
import { evaluate } from './evaluate.ts';
import type { Requirements } from './types.ts';
import type { CourseEntry, Grade, Transcript } from '../types.ts';
import { gradePoints, isGpaBearing } from '../grades.ts';

function done(courseId: string, grade: Grade = 'A', credits = 3): CourseEntry {
  return {
    courseId,
    title: courseId,
    credits,
    creditsEarned: grade === 'F' ? 0 : credits,
    grade,
    gradePoints: gradePoints(grade),
    countsTowardGpa: isGpaBearing(grade),
    source: 'institution',
  };
}

function transferred(courseId: string, credits = 3): CourseEntry {
  return {
    courseId,
    title: courseId,
    credits,
    creditsEarned: credits,
    grade: 'C',
    gradePoints: null,
    countsTowardGpa: false,
    source: 'transfer',
  };
}

function registered(courseId: string, credits = 3): CourseEntry {
  return {
    courseId,
    title: '',
    credits,
    grade: 'NG',
    gradePoints: null,
    countsTowardGpa: false,
    source: 'institution',
  };
}

function transcript(completed: CourseEntry[], inProgress: CourseEntry[] = [], transfer: CourseEntry[] = []): Transcript {
  return {
    major: 'Information Science',
    terms: [
      {
        id: '2025-Fall',
        season: 'Fall',
        year: 2025,
        courses: completed,
        statedTermGpa: null,
        statedTermCredits: null,
      },
    ],
    nonGpaCredits: transfer,
    inProgress,
    statedCumulativeGpa: null,
    statedCumulativeCredits: null,
    warnings: [],
  };
}

const requirements: Requirements = {
  id: 'test',
  major: 'Information Science',
  degree: 'BS',
  catalogYear: 2026,
  source: 'test',
  lastVerified: '2026-07-27',
  minGrade: 'C-',
  rules: [
    { type: 'all_of', label: 'Core', courses: ['INST201', 'INST311'] },
    { type: 'credits', label: 'Electives', credits: 6, from: ['INST366', 'INST466', 'INST309'] },
  ],
};

describe('evaluate', () => {
  it('marks a rule satisfied when every course is done', () => {
    const result = evaluate(transcript([done('INST201'), done('INST311')]), requirements);
    expect(result.results[0]).toMatchObject({ satisfied: true, have: 2, needed: 2, missing: [] });
  });

  it('names what is still outstanding', () => {
    const result = evaluate(transcript([done('INST201')]), requirements);
    expect(result.results[0]).toMatchObject({ satisfied: false, have: 1 });
    expect(result.results[0]!.missing).toEqual(['INST311']);
    expect(result.remainingCourses).toEqual(['INST311']);
  });

  it('does not count a course you are still taking as done', () => {
    const result = evaluate(transcript([done('INST201')], [registered('INST311')]), requirements);
    expect(result.results[0]).toMatchObject({ satisfied: false, have: 1, pending: 1 });
    expect(result.satisfied).toBe(false);
    expect(result.satisfiedIfInProgressPass).toBe(false); // electives still short
  });

  it('says when everything outstanding is already on your schedule', () => {
    const result = evaluate(
      transcript([done('INST201')], [registered('INST311'), registered('INST366'), registered('INST466')]),
      requirements,
    );
    expect(result.satisfied).toBe(false);
    expect(result.satisfiedIfInProgressPass).toBe(true);
  });

  it('lets two named rules point at the same course', () => {
    // INST201 is listed under both Benchmark II and the core in the real
    // catalog, and passing it satisfies both. Letting the first rule swallow it
    // reported the core short by a course the student had an A in.
    const shared: Requirements = {
      ...requirements,
      rules: [
        { type: 'all_of', label: 'Benchmark', courses: ['INST126', 'INST201'] },
        { type: 'all_of', label: 'Core', courses: ['INST201', 'INST311'] },
      ],
    };
    const result = evaluate(transcript([done('INST126'), done('INST201'), done('INST311')]), shared);
    expect(result.results[0]!.satisfied).toBe(true);
    expect(result.results[1]!.satisfied).toBe(true);
    expect(result.remainingCourses).toEqual([]);
  });

  it('spends only as many courses as an n_of asks for', () => {
    // Three options for a two-of rule leaves the third free for electives.
    const spare: Requirements = {
      ...requirements,
      rules: [
        { type: 'n_of', label: 'Two of three', n: 2, courses: ['INST366', 'INST466', 'INST309'] },
        { type: 'credits', label: 'Electives', credits: 3, from: ['INST366', 'INST466', 'INST309'] },
      ],
    };
    const result = evaluate(transcript([done('INST366'), done('INST466'), done('INST309')]), spare);
    expect(result.results[0]!.satisfied).toBe(true);
    expect(result.results[1]!.have).toBe(3);
  });

  it('never spends one course on two credit pools', () => {
    // INST201 is core. It must not also pay for the elective credits.
    const withOverlap: Requirements = {
      ...requirements,
      rules: [
        { type: 'all_of', label: 'Core', courses: ['INST201', 'INST311'] },
        { type: 'credits', label: 'Electives', credits: 6, from: ['INST201', 'INST311', 'INST366'] },
      ],
    };
    const result = evaluate(transcript([done('INST201'), done('INST311')]), withOverlap);
    expect(result.results[0]!.satisfied).toBe(true);
    expect(result.results[1]).toMatchObject({ satisfied: false, have: 0 });
  });

  it('counts credits rather than courses, so 1-credit seminars do not fake it', () => {
    // Three 1-credit courses is 3 credits, not 3 courses' worth of a 6-credit rule.
    const result = evaluate(
      transcript([done('INST201'), done('INST311'), done('INST309', 'A', 1)]),
      requirements,
    );
    expect(result.results[1]).toMatchObject({ have: 1, needed: 6, satisfied: false });
    expect(result.remainingCredits).toEqual([{ label: 'Electives', credits: 5 }]);
  });

  it('rejects a grade below the minimum', () => {
    const result = evaluate(transcript([done('INST201', 'D+'), done('INST311')]), requirements);
    expect(result.results[0]).toMatchObject({ satisfied: false, have: 1 });
    expect(result.results[0]!.missing).toEqual(['INST201']);
  });

  it('accepts the minimum grade itself', () => {
    const result = evaluate(transcript([done('INST201', 'C-'), done('INST311')]), requirements);
    expect(result.results[0]!.satisfied).toBe(true);
  });

  it('accepts transfer credit, which carries no UMD quality points', () => {
    const result = evaluate(transcript([done('INST311')], [], [transferred('INST201')]), requirements);
    expect(result.results[0]!.satisfied).toBe(true);
  });

  it('does not count a withdrawal or a failure', () => {
    const result = evaluate(transcript([done('INST201', 'W'), done('INST311', 'F')]), requirements);
    expect(result.results[0]).toMatchObject({ have: 0, satisfied: false });
  });

  it('measures an unscoped credit rule against the whole transcript', () => {
    const total: Requirements = {
      ...requirements,
      rules: [{ type: 'credits', label: 'Total', credits: 9 }],
    };
    const result = evaluate(transcript([done('INST201'), done('INST311'), done('INST366')]), total);
    expect(result.results[0]).toMatchObject({ have: 9, satisfied: true });
  });

  it('leaves the pool alone for an unscoped credit rule', () => {
    // Total-credit rules must not consume courses the named rules still need.
    const withTotal: Requirements = {
      ...requirements,
      rules: [
        { type: 'credits', label: 'Total', credits: 6 },
        { type: 'all_of', label: 'Core', courses: ['INST201', 'INST311'] },
      ],
    };
    const result = evaluate(transcript([done('INST201'), done('INST311')]), withTotal);
    expect(result.results[1]!.satisfied).toBe(true);
  });

  it('handles n_of and one_of', () => {
    const choices: Requirements = {
      ...requirements,
      rules: [
        { type: 'n_of', label: 'Two of three', n: 2, courses: ['A100', 'B100', 'C100'] },
        { type: 'one_of', label: 'Capstone', courses: ['X400', 'Y400'] },
      ],
    };
    const result = evaluate(transcript([done('A100'), done('B100'), done('Y400')]), choices);
    expect(result.results[0]).toMatchObject({ satisfied: true, have: 2, needed: 2 });
    expect(result.results[1]).toMatchObject({ satisfied: true, have: 1, needed: 1 });
  });
});
