import type { PlannedCourse, Transcript } from '../lib/types.ts';

/**
 * localStorage is the only place anything is kept. There is no account, no
 * sync and no server — clearing this is the whole of "delete my data".
 */
const TRANSCRIPT_KEY = 'terptracker.transcript.v1';
const PLAN_KEY = 'terptracker.plan.v1';
/** Whether what is stored is the demo rather than somebody's real record. */
const SAMPLE_KEY = 'terptracker.isSample.v1';

export interface StoredPlan {
  courses: PlannedCourse[];
  targetGpa: number;
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

export const loadTranscript = (): Transcript | null => read<Transcript>(TRANSCRIPT_KEY);
export const loadIsSample = (): boolean => read<boolean>(SAMPLE_KEY) === true;

export function saveTranscript(transcript: Transcript, isSample = false): void {
  write(TRANSCRIPT_KEY, transcript);
  write(SAMPLE_KEY, isSample);
}
export const loadPlan = (): StoredPlan | null => read<StoredPlan>(PLAN_KEY);
export const savePlan = (plan: StoredPlan): void => write(PLAN_KEY, plan);

export function clearEverything(): void {
  try {
    window.localStorage.removeItem(TRANSCRIPT_KEY);
    window.localStorage.removeItem(PLAN_KEY);
    window.localStorage.removeItem(SAMPLE_KEY);
  } catch {
    // Ignore.
  }
}
