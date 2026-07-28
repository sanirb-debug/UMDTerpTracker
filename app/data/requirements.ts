import instBs2026 from '../../data/requirements/inst-bs-2026.json';
import type { Requirements } from '../../lib/audit/index.ts';

/**
 * Every hand-authored major.
 *
 * One so far. Each file is transcribed from the official catalog by hand and
 * carries the URL it came from and the date somebody last checked it — see
 * `data/requirements/README.md`. Adding a major means adding a file and a line
 * here, not touching the evaluator.
 */
export const allRequirements: Requirements[] = [instBs2026 as unknown as Requirements];
