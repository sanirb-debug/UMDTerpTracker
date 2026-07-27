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
  /**
   * PlanetTerp star rating out of 5, from student reviews. Absent for about
   * half of all professors, and carries no review count — see
   * `tools/fetch-ratings.mjs` for why. A rating and a grade average measure
   * different things: whether people liked the course, and how they did in it.
   */
  rating?: number;
  /** How many reviews that rating is drawn from. */
  reviews?: number;
}

/**
 * How many reviews a rating needs before it is trusted over the average
 * professor. Five is enough to separate "everyone loves them" from "one
 * roommate posted", without burying genuinely well-liked people who teach
 * small sections.
 */
const RATING_PRIOR = 5;

/** Shape of `data/cache/professors.json`, written by `tools/fetch-grades.mjs`. */
export interface ProfessorsFile {
  source: string;
  fetchedAt: string;
  courses: Record<string, ProfessorRecord[]>;
}

export interface Recommendation {
  /**
   * The three best-reviewed professors on record for this course, rating first.
   *
   * Ranked on PlanetTerp rating, but drawn only from professors who also have
   * enough graded students to be in the cache at all — a five-star rating from
   * somebody who taught the course once is not a recommendation.
   */
  topRated: ProfessorRecord[];
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
  /** Mean rating across every rated professor, used as the shrinkage target. */
  readonly meanRating: number;
  private readonly courses: Map<string, ProfessorRecord[]>;

  constructor(file: ProfessorsFile) {
    this.fetchedAt = file.fetchedAt;
    this.courses = new Map(
      Object.entries(file.courses).map(([courseId, records]) => [courseId.toUpperCase(), records]),
    );

    const seen = new Map<string, number>();
    for (const records of this.courses.values()) {
      for (const record of records) {
        if (typeof record.rating === 'number') seen.set(normalize(record.name), record.rating);
      }
    }
    const ratings = [...seen.values()];
    this.meanRating =
      ratings.length > 0 ? ratings.reduce((sum, value) => sum + value, 0) / ratings.length : 4;
  }

  /**
   * A rating pulled toward the average by how little evidence backs it.
   *
   * Raw ratings are unusable for ranking: PlanetTerp hands back a bare score
   * out of 5, so a course can show three professors tied at a perfect 5.0 from
   * two reviews each while a genuinely well-liked 4.83 from fifty sits below
   * them. Weighting by review count puts those back in the right order.
   */
  confidenceAdjusted(record: ProfessorRecord): number | null {
    if (typeof record.rating !== 'number') return null;
    // A rating whose count we failed to fetch is treated as barely evidenced
    // rather than dropped, so it can still place if the score is strong.
    const reviews = record.reviews ?? 1;
    return (reviews * record.rating + RATING_PRIOR * this.meanRating) / (reviews + RATING_PRIOR);
  }

  /** Everyone on record for a course, best average first. */
  forCourse(courseId: string): ProfessorRecord[] {
    const records = this.courses.get(courseId.toUpperCase()) ?? [];
    return [...records].sort((a, b) => b.avgGpa - a.avgGpa);
  }

  /**
   * The best-reviewed professors on record for a course.
   *
   * Ties break on how many students the average is drawn from, so the better
   * evidenced of two equal ratings wins.
   */
  topRatedFor(courseId: string, limit = 3): ProfessorRecord[] {
    return this.forCourse(courseId)
      .filter((record) => typeof record.rating === 'number')
      .sort(
        (a, b) =>
          this.confidenceAdjusted(b)! - this.confidenceAdjusted(a)! || b.students - a.students,
      )
      .slice(0, limit);
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
      topRated: this.topRatedFor(courseId),
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

/** Whether two spellings refer to the same person. */
export function isSameProfessor(a: string, b: string): boolean {
  return normalize(a) === normalize(b);
}
