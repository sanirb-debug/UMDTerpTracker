import { describe, expect, it } from 'vitest';
import { DistributionIndex, aggregateSections, averageGpa, probabilityOfAtLeast } from './distributions.ts';
import type { PlanetTerpSection } from './distributions.ts';

const sections: PlanetTerpSection[] = [
  { course: 'CMSC351', section: '0101', 'A+': 5, A: 10, 'A-': 5, B: 20, C: 10, W: 5 },
  { course: 'CMSC351', section: '0201', A: 10, 'B+': 10, B: 20, C: 5, F: 5, W: 5 },
];

describe('aggregateSections', () => {
  it('sums every section of a course into one distribution', () => {
    const [distribution] = aggregateSections(sections);
    expect(distribution?.courseId).toBe('CMSC351');
    expect(distribution?.sections).toBe(2);
    expect(distribution?.counts.A).toBe(20);
    expect(distribution?.counts.B).toBe(40);
  });
});

describe('probabilityOfAtLeast', () => {
  it('excludes withdrawals from the denominator', () => {
    const [distribution] = aggregateSections(sections);
    // 100 students graded, 10 withdrew.
    expect(distribution!.total).toBe(110);
    // A+ 5 + A 20 + A- 5 = 30 of the 100 who finished.
    expect(probabilityOfAtLeast(distribution!, 'A')).toBeCloseTo(0.25, 6);
    expect(probabilityOfAtLeast(distribution!, 'A-')).toBeCloseTo(0.3, 6);
  });

  it('is monotonic — an easier grade is never less likely', () => {
    const [distribution] = aggregateSections(sections);
    expect(probabilityOfAtLeast(distribution!, 'B')).toBeGreaterThanOrEqual(
      probabilityOfAtLeast(distribution!, 'B+')!,
    );
    expect(probabilityOfAtLeast(distribution!, 'D-')).toBeCloseTo(0.95, 6);
  });
});

describe('averageGpa', () => {
  it('matches a hand-computed mean', () => {
    const [distribution] = aggregateSections([sections[0]!]);
    // (5+10)*4 + 5*3.7 + 20*3 + 10*2 = 60 + 18.5 + 60 + 20 = 158.5 over 50
    expect(averageGpa(distribution!)).toBeCloseTo(158.5 / 50, 6);
  });
});

describe('DistributionIndex', () => {
  const index = new DistributionIndex(aggregateSections(sections));

  it('uses the course data when it has it', () => {
    expect(index.chanceOfAtLeast('CMSC351', 'A')).toEqual({ probability: 0.25, estimated: false });
    expect(index.chanceOfAtLeast('cmsc351', 'A').estimated).toBe(false);
  });

  it('falls back to the all-courses average and says it did', () => {
    const result = index.chanceOfAtLeast('HIST200', 'A');
    expect(result.estimated).toBe(true);
    expect(result.probability).toBeCloseTo(0.25, 6);
  });

  it('reports nothing rather than guessing when there is no data at all', () => {
    expect(new DistributionIndex([]).chanceOfAtLeast('CMSC351', 'A')).toEqual({
      probability: null,
      estimated: true,
    });
  });
});
