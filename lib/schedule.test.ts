import { describe, expect, it } from 'vitest';
import {
  buildSchedule,
  findConflicts,
  formatTime,
  parseDays,
  parseTime,
  scheduleBounds,
  semesterCode,
  semesterCodeForTermId,
  weeklyGrid,
} from './schedule.ts';
import type { SectionsFile } from './schedule.ts';
import type { CourseEntry } from './types.ts';

const sections: SectionsFile = {
  source: 'test',
  fetchedAt: '2026-07-27',
  semesters: ['202605', '202608'],
  departments: ['INST'],
  sections: {
    '202608': {
      INST466: [
        {
          number: '0101',
          meetings: [
            { days: 'MW', start: '12:00pm', end: '1:15pm', building: 'TWS', room: '1310' },
          ],
          instructors: ['Alia Reza'],
          openSeats: 26,
          seats: 75,
        },
        {
          number: '0102',
          meetings: [
            { days: 'TuTh', start: '11:00am', end: '12:15pm', building: 'PLS', room: '1130' },
          ],
          instructors: ['Irene Pasquetto'],
          openSeats: 0,
          seats: 75,
        },
      ],
      INST377: [
        {
          number: '0202',
          meetings: [
            { days: 'MW', start: '12:30pm', end: '1:45pm', building: 'HBK', room: '0105' },
          ],
          instructors: ['Somebody Else'],
          openSeats: 5,
          seats: 40,
        },
      ],
      INST314: [{ number: 'ESG1', meetings: [], instructors: ['Online Staff'], openSeats: 3, seats: 30 }],
    },
    '202605': {},
  },
};

function registered(courseId: string, section?: string): CourseEntry {
  const entry: CourseEntry = {
    courseId,
    title: '',
    credits: 3,
    grade: 'NG',
    gradePoints: null,
    countsTowardGpa: false,
    source: 'institution',
  };
  if (section) entry.section = section;
  return entry;
}

describe('semester codes', () => {
  it('maps a season to UMD’s YYYYMM code', () => {
    expect(semesterCode(2026, 'Spring')).toBe('202601');
    expect(semesterCode(2026, 'Summer')).toBe('202605');
    expect(semesterCode(2026, 'Fall')).toBe('202608');
  });

  it('puts winter under the previous year, because the term starts in January', () => {
    expect(semesterCode(2026, 'Winter')).toBe('202512');
  });

  it('reads a code off a term id, collapsing both summer sessions', () => {
    expect(semesterCodeForTermId('2026-Fall')).toBe('202608');
    expect(semesterCodeForTermId('2026-Summer II')).toBe('202605');
    expect(semesterCodeForTermId('2026-Summer I')).toBe('202605');
    expect(semesterCodeForTermId('nonsense')).toBeNull();
  });
});

describe('parseDays', () => {
  it('reads two-letter days before single letters', () => {
    // The trap: `Th` must not become `T` + a stray `h`.
    expect(parseDays('TuTh')).toEqual(['Tu', 'Th']);
    expect(parseDays('MWF')).toEqual(['M', 'W', 'F']);
    expect(parseDays('MTuWThF')).toEqual(['M', 'Tu', 'W', 'Th', 'F']);
  });

  it('handles single days and weekends', () => {
    expect(parseDays('M')).toEqual(['M']);
    expect(parseDays('Sa')).toEqual(['Sa']);
    expect(parseDays('')).toEqual([]);
  });
});

describe('parseTime', () => {
  it('reads twelve-hour times', () => {
    expect(parseTime('1:15pm')).toBe(13 * 60 + 15);
    expect(parseTime('10:00am')).toBe(600);
  });

  it('gets noon and midnight right', () => {
    expect(parseTime('12:00pm')).toBe(720);
    expect(parseTime('12:00am')).toBe(0);
  });

  it('refuses nonsense rather than guessing', () => {
    expect(parseTime('')).toBeNull();
    expect(parseTime('ONLINE')).toBeNull();
    expect(parseTime('25:99pm')).toBeNull();
  });

  it('round-trips through formatTime', () => {
    for (const label of ['8:00am', '12:00pm', '1:15pm', '11:45pm']) {
      expect(formatTime(parseTime(label)!)).toBe(label);
    }
  });
});

describe('buildSchedule', () => {
  it('matches the section you are actually registered for', () => {
    const [entry] = buildSchedule([registered('INST466', '0101')], sections, '2026-Fall');
    expect(entry).toMatchObject({ status: 'scheduled', instructors: ['Alia Reza'] });
    expect(entry!.meetings[0]).toMatchObject({
      days: ['M', 'W'],
      startLabel: '12:00pm',
      endLabel: '1:15pm',
      location: 'TWS 1310',
    });
  });

  it('does not hand back a different section of the same course', () => {
    // 0102 is a different room, time and professor — picking either would be wrong.
    const [entry] = buildSchedule([registered('INST466', '0199')], sections, '2026-Fall');
    expect(entry?.status).toBe('unmatched');
    expect(entry?.meetings).toEqual([]);
  });

  it('separates an online course from a missing one', () => {
    const [online] = buildSchedule([registered('INST314', 'ESG1')], sections, '2026-Fall');
    expect(online?.status).toBe('async');
    const [missing] = buildSchedule([registered('CMSC999', '0101')], sections, '2026-Fall');
    expect(missing?.status).toBe('unmatched');
  });

  it('keeps unmatched courses in the list rather than dropping them', () => {
    const entries = buildSchedule(
      [registered('INST466', '0101'), registered('CMSC999', '0101')],
      sections,
      '2026-Fall',
    );
    expect(entries).toHaveLength(2);
  });

  it('lists everyone teaching the course, not just your own section', () => {
    // This is what makes "someone better is teaching it" answerable. Your own
    // instructor alone can only ever compare equal to themselves.
    const [entry] = buildSchedule([registered('INST466', '0101')], sections, '2026-Fall');
    expect(entry?.instructors).toEqual(['Alia Reza']);
    expect(entry?.offeredBy).toEqual(['Alia Reza', 'Irene Pasquetto']);
  });

  it('does not repeat a professor who teaches several sections', () => {
    const many: SectionsFile = {
      ...sections,
      sections: {
        '202608': {
          X100: [
            { number: '0101', meetings: [], instructors: ['Repeat Teacher'], openSeats: 1, seats: 1 },
            { number: '0102', meetings: [], instructors: ['Repeat Teacher'], openSeats: 1, seats: 1 },
          ],
        },
      },
    };
    const [entry] = buildSchedule([registered('X100', '0101')], many, '2026-Fall');
    expect(entry?.offeredBy).toEqual(['Repeat Teacher']);
  });

  it('falls back to the catalog for a missing title', () => {
    const [entry] = buildSchedule([registered('INST466', '0101')], sections, '2026-Fall', {
      titleFor: () => 'Technology, Culture, and Society',
    });
    expect(entry?.title).toBe('Technology, Culture, and Society');
  });

  it('returns everything unmatched when the term has no cached sections', () => {
    const entries = buildSchedule([registered('INST466', '0101')], sections, '2026-Spring');
    expect(entries[0]?.status).toBe('unmatched');
  });
});

describe('weeklyGrid', () => {
  it('puts a class on every day it meets, in time order', () => {
    const entries = buildSchedule(
      [registered('INST377', '0202'), registered('INST466', '0101')],
      sections,
      '2026-Fall',
    );
    const grid = weeklyGrid(entries);
    expect(grid.M.map((block) => block.entry.courseId)).toEqual(['INST466', 'INST377']);
    expect(grid.W.map((block) => block.entry.courseId)).toEqual(['INST466', 'INST377']);
    expect(grid.Tu).toEqual([]);
  });
});

describe('findConflicts', () => {
  it('flags two classes that overlap on the same day', () => {
    // INST466 runs 12:00–1:15 and INST377 12:30–1:45, both MW.
    const entries = buildSchedule(
      [registered('INST466', '0101'), registered('INST377', '0202')],
      sections,
      '2026-Fall',
    );
    const conflicts = findConflicts(entries);
    expect(conflicts.map((c) => c.day)).toEqual(['M', 'W']);
  });

  it('says nothing when classes merely sit next to each other', () => {
    const entries = buildSchedule([registered('INST466', '0102')], sections, '2026-Fall');
    expect(findConflicts(entries)).toEqual([]);
  });
});

describe('scheduleBounds', () => {
  it('rounds out to whole hours around the day', () => {
    const entries = buildSchedule([registered('INST466', '0101')], sections, '2026-Fall');
    expect(scheduleBounds(entries)).toEqual({ start: 12 * 60, end: 14 * 60 });
  });

  it('falls back to a normal school day when nothing is scheduled', () => {
    expect(scheduleBounds([])).toEqual({ start: 8 * 60, end: 18 * 60 });
  });
});
