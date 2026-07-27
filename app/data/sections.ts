import professorsJson from '../../data/cache/professors.json';
import sectionsJson from '../../data/cache/sections.json';
import { ProfessorIndex } from '../../lib/professors.ts';
import type { ProfessorsFile } from '../../lib/professors.ts';
import type { SectionsFile } from '../../lib/schedule.ts';

/**
 * Meeting times and per-professor grade history. Between them these are the
 * bulk of the cached data, and only the schedule page uses either.
 */
export const sectionData = sectionsJson as unknown as SectionsFile;
export const professors = new ProfessorIndex(professorsJson as unknown as ProfessorsFile);
