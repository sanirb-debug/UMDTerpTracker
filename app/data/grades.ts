import gradesJson from '../../data/cache/grades.json';
import { distributionIndexFrom } from '../../lib/catalog.ts';
import type { GradesFile } from '../../lib/catalog.ts';

/** Course-level PlanetTerp grade distributions. Only the planner needs these. */
export const gradeData = gradesJson as unknown as GradesFile;
export const distributions = distributionIndexFrom(gradeData);
