/**
 * Which professor to take a course with.
 *
 * PlanetTerp's grade rows already carry a professor per section — the
 * course-level distribution used by the planner throws that away. Keeping it
 * turns "this course averages a 3.1" into "with Pasquetto it averages 3.5, with
 * Vitak 2.9", which is the version you can actually act on at registration.
 */

export interface ProfessorRecord {
  name: string;
  /** Students graded across every section on record. */
  students: number;
  sections: number;
  /** Mean quality points per credit across those students. */
  avgGpa: number;
  /** Share who earned an A-, A or A+. */
  aOrBetter: number;
}

/** Shape of `data/cache/professors.json`, written by `tools/fetch-grades.mjs`. */
export interface ProfessorsFile {
  source: string;
  fetchedAt: string;
  courses: Record<string, ProfessorRecord[]>;
}

export interface Recommendation {
  /** Everyone with a record for this course, best average first. */
  history: ProfessorRecord[];
  /** Records for the people actually teaching it this term, best first. */
  teaching: ProfessorRecord[];
  /** Professors teaching it this term with no grade history. */
  unknown: string[];
  /** The best-rated option among those teaching, if any. */
  best: ProfessorRecord | null;
  /** Your own professor's record, when you are already registered. */
  yours: ProfessorRecord | null;
  /** True when someone teaching this term has a better record than yours. */
  betterAvailable: boolean;
}

/** Names come from two different services, so compare them loosely. */
function normalize(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.,]/g, '');
}

export class ProfessorIndex {
  readonly fetchedAt: string;
  private readonly courses: Map<string, ProfessorRecord[]>;

  constructor(file: ProfessorsFile) {
    this.fetchedAt = file.fetchedAt;
    this.courses = new Map(
      Object.entries(file.courses).map(([courseId, records]) => [courseId.toUpperCase(), records]),
    );
  }

  /** Everyone on record for a course, best average first. */
  forCourse(courseId: string): ProfessorRecord[] {
    const records = this.courses.get(courseId.toUpperCase()) ?? [];
    return [...records].sort((a, b) => b.avgGpa - a.avgGpa);
  }

  /**
   * Rank the people teaching a course this term against their own history.
   *
   * `instructors` is who umd.io says is teaching it; `yourInstructors` is who
   * you are actually registered with. When you are not registered yet those are
   * the same thing, and `yours` comes back null.
   */
  recommend(
    courseId: string,
    instructors: readonly string[] = [],
    yourInstructors: readonly string[] = [],
  ): Recommendation {
    const history = this.forCourse(courseId);
    const byName = new Map(history.map((record) => [normalize(record.name), record]));

    const teaching: ProfessorRecord[] = [];
    const unknown: string[] = [];
    for (const instructor of instructors) {
      const record = byName.get(normalize(instructor));
      if (record) {
        if (!teaching.includes(record)) teaching.push(record);
      } else if (!unknown.includes(instructor)) {
        unknown.push(instructor);
      }
    }
    teaching.sort((a, b) => b.avgGpa - a.avgGpa);

    const yourNames = new Set(yourInstructors.map(normalize));
    const yours = history.find((record) => yourNames.has(normalize(record.name))) ?? null;
    const best = teaching[0] ?? null;

    return {
      history,
      teaching,
      unknown,
      best,
      yours,
      // A hundredth of a grade point is noise, not a reason to switch sections.
      betterAvailable: Boolean(best && yours && best.avgGpa - yours.avgGpa > 0.1),
    };
  }
}

/** `3.512` → `3.51`. */
export function formatGpa(value: number): string {
  return value.toFixed(2);
}
