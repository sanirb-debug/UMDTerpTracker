import sectionsJson from '../../data/cache/sections.json';
import type { SectionsFile } from '../../lib/schedule.ts';

/** Meeting times, rooms and instructors. Only the schedule page needs these. */
export const sectionData = sectionsJson as unknown as SectionsFile;
