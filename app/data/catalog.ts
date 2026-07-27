import coursesJson from '../../data/cache/courses.json';
import { Catalog } from '../../lib/catalog.ts';
import type { CatalogFile } from '../../lib/catalog.ts';

/**
 * The cached course catalog: titles, credits, Gen Ed tags.
 *
 * Each cache lives in its own module so the bundler can split them apart. They
 * come to about 1.4MB together, and no single page needs all of it — the
 * dashboard wants titles, the planner wants grade distributions, the schedule
 * wants sections. Importing them from one barrel file made every page pay for
 * all four.
 *
 * Nothing here is fetched at runtime. api.umd.io and PlanetTerp are run by
 * other people, and a page that only works when somebody else's server is up is
 * a page that does not work.
 */
export const catalog = new Catalog(coursesJson as unknown as CatalogFile);
