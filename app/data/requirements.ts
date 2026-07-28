import instBs2026 from '../../data/requirements/inst-bs-2026.json';
import cmscBs2026 from '../../data/requirements/cmsc-bs-2026.json';
import managementBs2026 from '../../data/requirements/bmgt-management-bs-2026.json';
import financeBs2026 from '../../data/requirements/bmgt-finance-bs-2026.json';
import informationSystemsBs2026 from '../../data/requirements/bmgt-information-systems-bs-2026.json';
import type { Requirements } from '../../lib/audit/index.ts';

/**
 * Every hand-authored major.
 *
 * Each file is transcribed from the official catalog and carries the URL it
 * came from and the date somebody last checked it — see
 * `data/requirements/README.md`. Adding a major means adding a file and a line
 * here, not touching the evaluator.
 *
 * Majors absent from this list are not broken: the requirements page detects
 * that nothing matches and says the audit is unavailable, rather than showing
 * an empty one that reads like a completed degree.
 */
export const allRequirements: Requirements[] = [
  instBs2026,
  cmscBs2026,
  managementBs2026,
  financeBs2026,
  informationSystemsBs2026,
] as unknown as Requirements[];
