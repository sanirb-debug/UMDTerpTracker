import { describe, expect, it } from 'vitest';
import { canLinkCourse, normalizeCourseId, planetTerpCourseUrl } from './planetterp.ts';

describe('planetTerpCourseUrl', () => {
  it('builds a course page url', () => {
    expect(planetTerpCourseUrl('CMSC131')).toBe('https://planetterp.com/course/CMSC131');
  });

  it('normalizes whatever the transcript spelled', () => {
    expect(planetTerpCourseUrl('cmsc 131')).toBe('https://planetterp.com/course/CMSC131');
  });
});

describe('normalizeCourseId', () => {
  it('strips spacing and upper-cases', () => {
    expect(normalizeCourseId(' inst 326 ')).toBe('INST326');
  });
});

describe('canLinkCourse', () => {
  it('links a UMD course the catalog still lists', () => {
    expect(canLinkCourse({ courseId: 'CMSC131', source: 'institution', inCatalog: true })).toBe(true);
  });

  it('refuses a course the catalog has never heard of', () => {
    // Renumbered or discontinued: PlanetTerp would 404 on it.
    expect(canLinkCourse({ courseId: 'CMSC199', source: 'institution', inCatalog: false })).toBe(
      false,
    );
  });

  it('never links transfer credit', () => {
    // The transcript prints a UMD equivalent, but the course was taken elsewhere.
    expect(canLinkCourse({ courseId: 'STAT100', source: 'transfer', inCatalog: true })).toBe(false);
  });

  it('never links exam credit', () => {
    expect(canLinkCourse({ courseId: 'MATH120', source: 'exam', inCatalog: true })).toBe(false);
  });

  it('links a course with no source, which is one typed into the planner', () => {
    expect(canLinkCourse({ courseId: 'INST466', inCatalog: true })).toBe(true);
  });

  it('refuses a transfer row that has no UMD equivalent at all', () => {
    expect(canLinkCourse({ courseId: '', source: 'transfer', inCatalog: true })).toBe(false);
  });

  it('refuses anything that is not shaped like a course id', () => {
    expect(canLinkCourse({ courseId: 'INTRO STUDY RELIGION', inCatalog: true })).toBe(false);
    expect(canLinkCourse({ courseId: 'CMSC', inCatalog: true })).toBe(false);
  });

  it('accepts a lettered course number', () => {
    expect(canLinkCourse({ courseId: 'INST388E', inCatalog: true })).toBe(true);
  });
});
