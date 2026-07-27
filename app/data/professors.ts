import professorsJson from '../../data/cache/professors.json';
import { ProfessorIndex } from '../../lib/professors.ts';
import type { ProfessorsFile } from '../../lib/professors.ts';

/**
 * Per-professor grade history and PlanetTerp ratings.
 *
 * Split from the section cache so the planner can suggest professors for a
 * course you have not registered for without also downloading every meeting
 * time at UMD.
 */
export const professorData = professorsJson as unknown as ProfessorsFile;
export const professors = new ProfessorIndex(professorData);
