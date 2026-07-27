import { describe, expect, it } from 'vitest';
import { ProfessorIndex } from './professors.ts';
import type { ProfessorsFile } from './professors.ts';

const file: ProfessorsFile = {
  source: 'test',
  fetchedAt: '2026-07-27',
  courses: {
    INST466: [
      { name: 'Irene Pasquetto', students: 300, sections: 3, avgGpa: 3.62, aOrBetter: 0.71 },
      { name: 'Alia Reza', students: 80, sections: 1, avgGpa: 3.41, aOrBetter: 0.58 },
      { name: 'Jessica Vitak', students: 250, sections: 3, avgGpa: 3.05, aOrBetter: 0.34 },
    ],
    INST377: [{ name: 'Solo Teacher', students: 120, sections: 2, avgGpa: 3.2, aOrBetter: 0.4 }],
  },
};

const index = new ProfessorIndex(file);

describe('forCourse', () => {
  it('ranks by average, best first', () => {
    expect(index.forCourse('INST466').map((r) => r.name)).toEqual([
      'Irene Pasquetto',
      'Alia Reza',
      'Jessica Vitak',
    ]);
  });

  it('is case-insensitive about the course id', () => {
    expect(index.forCourse('inst466')).toHaveLength(3);
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
