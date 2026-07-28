import type { PlannedCourse, Transcript } from '../lib/types.ts';
import { PARSER_VERSION } from '../lib/parser/version.ts';

/**
 * localStorage is the only place anything is kept. There is no account, no
 * sync and no server — clearing this is the whole of "delete my data".
 */
const TRANSCRIPT_KEY = 'terptracker.transcript.v1';
const PLAN_KEY = 'terptracker.plan.v1';

export interface StoredPlan {
  courses: PlannedCourse[];
  targetGpa: number;
}

interface StoredTranscript {
  /** Parser version that produced this. See `lib/parser/version.ts`. */
  version: number;
  transcript: Transcript;
  /**
   * Which demo sample this is, or absent for somebody's real upload. Storing
   * the id rather than a flag means a sample cleared by a parser upgrade can
   * be rebuilt as the same sample.
   */
  sampleId?: string;
}

export interface LoadedTranscript {
  transcript: Transcript | null;
  sampleId?: string;
  /**
   * Something was stored, but an older parser produced it and it has been
   * thrown away. The UI owes the user an explanation — silently showing an
   * empty upload screen looks like data loss.
   */
  stale: boolean;
}

function read<T>(key: string): T | null {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    // Private browsing, quota, or a stale shape from an older version.
    return null;
  }
}

function write(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Nothing to do — the app works fine without persistence.
  }
}

export function loadTranscript(): LoadedTranscript {
  const stored = read<StoredTranscript | Transcript>(TRANSCRIPT_KEY);
  if (!stored) return { transcript: null, stale: false };

  // Anything without a version is from before versioning existed, which by
  // definition predates the current parser.
  const versioned = stored as StoredTranscript;
  if (typeof versioned.version !== 'number' || versioned.version !== PARSER_VERSION) {
    return { transcript: null, sampleId: versioned.sampleId, stale: true };
  }

  return { transcript: versioned.transcript, sampleId: versioned.sampleId, stale: false };
}

export function saveTranscript(transcript: Transcript, sampleId?: string): void {
  const payload: StoredTranscript = { version: PARSER_VERSION, transcript };
  if (sampleId) payload.sampleId = sampleId;
  write(TRANSCRIPT_KEY, payload);
}

export const loadPlan = (): StoredPlan | null => read<StoredPlan>(PLAN_KEY);
export const savePlan = (plan: StoredPlan): void => write(PLAN_KEY, plan);

export function clearEverything(): void {
  try {
    window.localStorage.removeItem(TRANSCRIPT_KEY);
    window.localStorage.removeItem(PLAN_KEY);
    // Written by an older build; remove it so nothing is left behind.
    window.localStorage.removeItem('terptracker.isSample.v1');
  } catch {
    // Ignore.
  }
}
