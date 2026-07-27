import { describe, expect, it } from 'vitest';
import { ProfessorIndex } from './professors.ts';
import type { ProfessorsFile } from './professors.ts';

const file: ProfessorsFile = {
  source: 'test',
  fetchedAt: '2026-07-27',
  courses: {
    INST466: [
      { name: 'Irene Pasquetto', students: 300, sections: 3, avgGpa: 3.62, aOrBetter: 0.71, rating: 4.83 },
      { name: 'Alia Reza', students: 80, sections: 1, avgGpa: 3.41, aOrBetter: 0.58, rating: 4.1 },
      { name: 'Jessica Vitak', students: 250, sections: 3, avgGpa: 3.05, aOrBetter: 0.34, rating: 4.5 },
      // Highest grade average of anyone here, but nobody has reviewed them.
      { name: 'Unreviewed Star', students: 90, sections: 1, avgGpa: 3.95, aOrBetter: 0.9 },
    ],
    INST377: [{ name: 'Solo Teacher', students: 120, sections: 2, avgGpa: 3.2, aOrBetter: 0.4 }],
  },
};

const index = new ProfessorIndex(file);

describe('topRatedFor', () => {
  it('ranks on PlanetTerp rating, not on grade average', () => {
    expect(index.topRatedFor('INST466').map((r) => r.name)).toEqual([
      'Irene Pasquetto',
      'Jessica Vitak',
      'Alia Reza',
    ]);
  });

  /**
   * Shrinkage pulls a rating toward the population mean, so the population has
   * to look like the real one. Actual PlanetTerp ratings average around 4.2;
   * an index holding two professors who both scored ~5 has a mean of 4.9, and
   * shrinking toward 4.9 correctly declines to punish a 5.0.
   */
  function populated(extra: ProfessorsFile['courses']): ProfessorIndex {
    const backdrop = [3.2, 3.6, 4.0, 4.2, 4.4, 4.6, 4.9].map((rating, i) => ({
      name: `Backdrop ${i}`,
      students: 100,
      sections: 1,
      avgGpa: 3.3,
      aOrBetter: 0.5,
      rating,
      reviews: 20,
    }));
    return new ProfessorIndex({ ...file, courses: { BACKDROP: backdrop, ...extra } });
  }

  it('does not let a perfect score from two reviews beat a strong one from fifty', () => {
    // PlanetTerp reports a bare score out of 5, so unqualified 5.0s otherwise
    // crowd out better-evidenced ratings.
    const thin = populated({
      X100: [
        { name: 'Two Reviews', students: 40, sections: 1, avgGpa: 3.4, aOrBetter: 0.5, rating: 5, reviews: 2 },
        { name: 'Fifty Reviews', students: 400, sections: 4, avgGpa: 3.6, aOrBetter: 0.6, rating: 4.8, reviews: 50 },
      ],
    });
    expect(thin.topRatedFor('X100').map((r) => r.name)).toEqual(['Fifty Reviews', 'Two Reviews']);
  });

  it('still ranks a perfect score first once enough people agree', () => {
    const solid = populated({
      X100: [
        { name: 'Loved', students: 300, sections: 3, avgGpa: 3.4, aOrBetter: 0.5, rating: 5, reviews: 60 },
        { name: 'Liked', students: 400, sections: 4, avgGpa: 3.6, aOrBetter: 0.6, rating: 4.4, reviews: 50 },
      ],
    });
    expect(solid.topRatedFor('X100')[0]?.name).toBe('Loved');
  });

  it('treats an uncounted rating as barely evidenced rather than dropping it', () => {
    const mixed = populated({
      X100: [
        { name: 'No Count', students: 100, sections: 1, avgGpa: 3.4, aOrBetter: 0.5, rating: 5 },
        { name: 'Counted', students: 100, sections: 1, avgGpa: 3.4, aOrBetter: 0.5, rating: 4.7, reviews: 40 },
      ],
    });
    const names = mixed.topRatedFor('X100').map((r) => r.name);
    expect(names).toContain('No Count');
    expect(names[0]).toBe('Counted');
  });

  it('leaves out professors nobody has reviewed', () => {
    // Unreviewed Star has the best grade average in the course and still must
    // not appear — there is no rating to rank them on.
    expect(index.topRatedFor('INST466').map((r) => r.name)).not.toContain('Unreviewed Star');
  });

  it('returns at most three', () => {
    expect(index.topRatedFor('INST466')).toHaveLength(3);
    expect(index.topRatedFor('INST466', 2)).toHaveLength(2);
  });

  it('breaks a tie on the better evidenced average', () => {
    const tied = new ProfessorIndex({
      ...file,
      courses: {
        X100: [
          { name: 'Few Students', students: 25, sections: 1, avgGpa: 3.9, aOrBetter: 0.9, rating: 4.5 },
          { name: 'Many Students', students: 900, sections: 9, avgGpa: 3.1, aOrBetter: 0.3, rating: 4.5 },
        ],
      },
    });
    expect(tied.topRatedFor('X100').map((r) => r.name)).toEqual(['Many Students', 'Few Students']);
  });

  it('says nothing for a course with no ratings at all', () => {
    expect(index.topRatedFor('INST377')).toEqual([]);
    expect(index.topRatedFor('CMSC999')).toEqual([]);
  });

  it('is exposed on the recommendation too', () => {
    expect(index.recommend('INST466', [], []).topRated.map((r) => r.name)).toEqual([
      'Irene Pasquetto',
      'Jessica Vitak',
      'Alia Reza',
    ]);
  });
});

describe('forCourse', () => {
  it('ranks by average, best first', () => {
    expect(index.forCourse('INST466').map((r) => r.name)).toEqual([
      'Unreviewed Star',
      'Irene Pasquetto',
      'Alia Reza',
      'Jessica Vitak',
    ]);
  });

  it('is case-insensitive about the course id', () => {
    expect(index.forCourse('inst466')).toHaveLength(4);
  });

  it('returns nothing for a course with no record', () => {
    expect(index.forCourse('CMSC999')).toEqual([]);
  });
});

describe('recommend', () => {
  it('only recommends professors actually teaching this term', () => {
    // Pasquetto is the best on record but is not teaching this section list.
    const result = index.recommend('INST466', ['Alia Reza', 'Jessica Vitak'], ['Alia Reza']);
    expect(result.teaching.map((r) => r.name)).toEqual(['Alia Reza', 'Jessica Vitak']);
    expect(result.best?.name).toBe('Alia Reza');
  });

  it('flags a better option when one is on offer', () => {
    const result = index.recommend('INST466', ['Alia Reza', 'Irene Pasquetto'], ['Alia Reza']);
    expect(result.yours?.name).toBe('Alia Reza');
    expect(result.best?.name).toBe('Irene Pasquetto');
    expect(result.betterAvailable).toBe(true);
  });

  it('does not nag over a rounding-error difference', () => {
    const close = new ProfessorIndex({
      ...file,
      courses: {
        X100: [
          { name: 'A Teacher', students: 100, sections: 1, avgGpa: 3.5, aOrBetter: 0.5 },
          { name: 'B Teacher', students: 100, sections: 1, avgGpa: 3.55, aOrBetter: 0.5 },
        ],
      },
    });
    const result = close.recommend('X100', ['A Teacher', 'B Teacher'], ['A Teacher']);
    expect(result.best?.name).toBe('B Teacher');
    expect(result.betterAvailable).toBe(false);
  });

  it('never says a better option exists when you already have the best', () => {
    const result = index.recommend('INST466', ['Irene Pasquetto', 'Alia Reza'], ['Irene Pasquetto']);
    expect(result.betterAvailable).toBe(false);
  });

  it('separates instructors with no history from those with it', () => {
    const result = index.recommend('INST466', ['Alia Reza', 'Brand New'], ['Brand New']);
    expect(result.teaching.map((r) => r.name)).toEqual(['Alia Reza']);
    expect(result.unknown).toEqual(['Brand New']);
    expect(result.yours).toBeNull();
  });

  it('matches names loosely, since the two services spell them differently', () => {
    const result = index.recommend('INST466', ['  irene   pasquetto '], ['irene pasquetto']);
    expect(result.yours?.name).toBe('Irene Pasquetto');
  });

  it('has nothing to say about a course with no data', () => {
    const result = index.recommend('CMSC999', ['Someone'], ['Someone']);
    expect(result.history).toEqual([]);
    expect(result.best).toBeNull();
    expect(result.betterAvailable).toBe(false);
  });
});
