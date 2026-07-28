import { describe, expect, it } from 'vitest';
import { evaluate } from './evaluate.ts';
import type { Requirements } from './types.ts';
import type { CourseEntry, Transcript } from '../types.ts';

/**
 * The `distribute` rule and the prefix/level selectors, tested against the
 * exact wording that forced them:
 *
 *   CMSC — "Select five 400 level courses from at least three of the following
 *   areas with no more than three courses in a given area"
 *   CMSC — "Select at least 12 credits of 300-400 level courses from one
 *   discipline outside of CMSC"
 *   Information Systems — "Select two courses from list 'A' or one course from
 *   'A' and one course from list 'B'"
 */

function done(courseId: string, credits = 3): CourseEntry {
  return {
    courseId,
    title: courseId,
    credits,
    creditsEarned: credits,
    grade: 'A',
    gradePoints: 4,
    countsTowardGpa: true,
    source: 'institution',
  };
}

function transcript(courses: CourseEntry[], inProgress: CourseEntry[] = []): Transcript {
  return {
    major: 'Test',
    terms: [
      { id: '2025-Fall', season: 'Fall', year: 2025, courses, statedTermGpa: null, statedTermCredits: null },
    ],
    nonGpaCredits: [],
    inProgress,
    statedCumulativeGpa: null,
    statedCumulativeCredits: null,
    warnings: [],
  };
}

function withRules(rules: Requirements['rules']): Requirements {
  return {
    id: 'test',
    major: 'Test',
    degree: 'BS',
    catalogYear: 2026,
    source: 'test',
    lastVerified: '2026-07-28',
    rules,
  };
}

const CMSC_AREAS = withRules([
  {
    type: 'distribute',
    label: 'Upper-level areas',
    n: 5,
    minGroups: 3,
    groups: [
      { label: 'Systems', courses: ['CMSC411', 'CMSC412', 'CMSC414', 'CMSC416', 'CMSC417'], max: 3 },
      { label: 'Information Processing', courses: ['CMSC420', 'CMSC421', 'CMSC422', 'CMSC471'], max: 3 },
      { label: 'Software Engineering', courses: ['CMSC430', 'CMSC433', 'CMSC434', 'CMSC471'], max: 3 },
      { label: 'Theory', courses: ['CMSC451', 'CMSC452', 'CMSC454'], max: 3 },
      { label: 'Numerical Analysis', courses: ['CMSC460', 'CMSC466'], max: 3 },
    ],
  },
]);

describe('distribute', () => {
  it('is satisfied by five courses spanning three areas', () => {
    const result = evaluate(
      transcript([done('CMSC411'), done('CMSC412'), done('CMSC420'), done('CMSC421'), done('CMSC451')]),
      CMSC_AREAS,
    );
    expect(result.results[0]).toMatchObject({ satisfied: true, have: 5, groupsUsed: 3 });
  });

  it('refuses five courses crammed into two areas', () => {
    // Breadth is the point of the rule, and a count-only check would pass this.
    const result = evaluate(
      transcript([done('CMSC411'), done('CMSC412'), done('CMSC414'), done('CMSC420'), done('CMSC421')]),
      CMSC_AREAS,
    );
    expect(result.results[0]!.groupsUsed).toBe(2);
    expect(result.results[0]!.satisfied).toBe(false);
  });

  it('caps a single area at three courses', () => {
    // Five Systems courses count as three; the other two are over the cap.
    const result = evaluate(
      transcript([
        done('CMSC411'), done('CMSC412'), done('CMSC414'), done('CMSC416'), done('CMSC417'),
      ]),
      CMSC_AREAS,
    );
    expect(result.results[0]).toMatchObject({ have: 3, groupsUsed: 1, satisfied: false });
  });

  it('places a course listed in two areas where it adds breadth', () => {
    // CMSC471 is in both Information Processing and Software Engineering. With
    // Information Processing already used, it should open the second area.
    const result = evaluate(
      transcript([done('CMSC420'), done('CMSC421'), done('CMSC471'), done('CMSC451'), done('CMSC411')]),
      CMSC_AREAS,
    );
    expect(result.results[0]).toMatchObject({ satisfied: true, groupsUsed: 4 });
  });

  it('counts registered courses separately from finished ones', () => {
    const result = evaluate(
      transcript([done('CMSC411'), done('CMSC420')], [done('CMSC451'), done('CMSC452')]),
      CMSC_AREAS,
    );
    expect(result.results[0]).toMatchObject({ have: 2, pending: 2, satisfied: false });
  });
});

describe('distribute with a capped list', () => {
  // Information Systems: two from A, or one from A and one from B.
  const infoSys = withRules([
    {
      type: 'distribute',
      label: 'IS electives',
      n: 2,
      groups: [
        { label: 'List A', courses: ['BMGT400', 'BMGT401', 'BMGT404'] },
        { label: 'List B', courses: ['BMGT326', 'BMGT430', 'BMGT484'], max: 1 },
      ],
    },
  ]);

  it('accepts two from list A', () => {
    expect(evaluate(transcript([done('BMGT400'), done('BMGT401')]), infoSys).results[0]!.satisfied).toBe(
      true,
    );
  });

  it('accepts one from each list', () => {
    expect(evaluate(transcript([done('BMGT400'), done('BMGT326')]), infoSys).results[0]!.satisfied).toBe(
      true,
    );
  });

  it('refuses two from list B, which the catalog does not allow', () => {
    const result = evaluate(transcript([done('BMGT326'), done('BMGT430')]), infoSys);
    expect(result.results[0]).toMatchObject({ have: 1, satisfied: false });
  });
});

describe('prefix and level selectors', () => {
  it('counts credits at or above a course level', () => {
    const rules = withRules([{ type: 'credits', label: 'Upper level', credits: 6, minLevel: 300 }]);
    const result = evaluate(transcript([done('BMGT301'), done('BMGT401'), done('BMGT110')]), rules);
    expect(result.results[0]).toMatchObject({ have: 6, satisfied: true });
  });

  it('counts credits within a subject prefix', () => {
    const rules = withRules([
      { type: 'credits', label: 'Business subjects', credits: 6, prefixes: ['BMGT'] },
    ]);
    const result = evaluate(transcript([done('BMGT301'), done('BMGT401'), done('ECON200')]), rules);
    expect(result.results[0]).toMatchObject({ have: 6, satisfied: true });
  });
});

describe('sameDiscipline', () => {
  const outside = withRules([
    {
      type: 'credits',
      label: 'Outside discipline',
      credits: 12,
      minLevel: 300,
      excludePrefixes: ['CMSC'],
      sameDiscipline: true,
    },
  ]);

  it('accepts twelve credits all from one outside department', () => {
    const result = evaluate(
      transcript([done('MATH340'), done('MATH401'), done('MATH403'), done('MATH410')]),
      outside,
    );
    expect(result.results[0]).toMatchObject({ have: 12, satisfied: true });
  });

  it('refuses twelve credits scattered across departments', () => {
    // Four unrelated upper-level courses are not "one discipline", and counting
    // them would pass a student who has not done the concentration.
    const result = evaluate(
      transcript([done('MATH340'), done('ECON300'), done('PSYC300'), done('HIST300')]),
      outside,
    );
    expect(result.results[0]).toMatchObject({ have: 3, satisfied: false });
  });

  it('ignores CMSC courses even at the right level', () => {
    const result = evaluate(
      transcript([done('CMSC430'), done('CMSC433'), done('CMSC434'), done('CMSC435')]),
      outside,
    );
    expect(result.results[0]).toMatchObject({ have: 0, satisfied: false });
  });
});
