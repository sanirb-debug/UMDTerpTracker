import coursesJson from '../data/cache/courses.json';
import gradesJson from '../data/cache/grades.json';
import { Catalog, distributionIndexFrom } from '../lib/catalog.ts';
import type { CatalogFile, GradesFile } from '../lib/catalog.ts';

/**
 * Both caches are bundled at build time. Neither umd.io nor PlanetTerp is
 * touched at runtime — they are student- and community-run, and a page that
 * only works when somebody else's server is up is a page that does not work.
 */
export const catalog = new Catalog(coursesJson as unknown as CatalogFile);
export const gradeData = gradesJson as unknown as GradesFile;
export const distributions = distributionIndexFrom(gradeData);
