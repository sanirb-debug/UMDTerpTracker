import type { CourseEntry, Season } from './types.ts';

/**
 * Turning "you are registered for INST466 section 0101" into a weekly
 * timetable, using the cached umd.io section data.
 *
 * The section number is what makes this exact rather than a guess: `WB21` and
 * `WB11` are different sessions of the same summer course, and `0101` and
 * `0103` are different rooms at different hours.
 */

export type Weekday = 'M' | 'Tu' | 'W' | 'Th' | 'F' | 'Sa' | 'Su';

export const WEEKDAYS: Weekday[] = ['M', 'Tu', 'W', 'Th', 'F'];

export const WEEKDAY_LABELS: Record<Weekday, string> = {
  M: 'Monday',
  Tu: 'Tuesday',
  W: 'Wednesday',
  Th: 'Thursday',
  F: 'Friday',
  Sa: 'Saturday',
  Su: 'Sunday',
};

export interface CachedMeeting {
  days: string;
  start: string;
  end: string;
  building: string;
  room: string;
}

export interface CachedSection {
  number: string;
  meetings: CachedMeeting[];
  instructors: string[];
  openSeats: number;
  seats: number;
}

/** Shape of `data/cache/sections.json`, written by `tools/fetch-sections.mjs`. */
export interface SectionsFile {
  source: string;
  fetchedAt: string;
  semesters: string[];
  departments: string[];
  /** semester code → course id → sections */
  sections: Record<string, Record<string, CachedSection[]>>;
}

export interface ScheduledMeeting {
  days: Weekday[];
  /** Minutes since midnight, for layout and overlap maths. */
  start: number;
  end: number;
  startLabel: string;
  endLabel: string;
  /** `TWS 1310`, or `Online` when there is no room. */
  location: string;
}

export interface ScheduleEntry {
  courseId: string;
  title: string;
  credits: number;
  section: string | undefined;
  /** Who teaches *your* section. */
  instructors: string[];
  /**
   * Everyone teaching this course this term, across every section.
   *
   * This is the set worth comparing against: "is someone better teaching this?"
   * is only a real question when they are actually on offer. Comparing against
   * your own instructor alone can only ever conclude you already have the best.
   */
  offeredBy: string[];
  meetings: ScheduledMeeting[];
  /**
   * Why there are no meetings, when there are none. `unmatched` means the
   * section was not in the cache; `async` means it was, but meets at no fixed
   * time. The difference matters — one is missing data, the other is a fact
   * about the course.
   */
  status: 'scheduled' | 'async' | 'unmatched';
}

/**
 * UMD semester codes are `YYYYMM`: 01 spring, 05 summer, 08 fall, 12 winter.
 * Winter belongs to the *previous* year's code because the term starts in
 * January — Winter 2026 is `202512`.
 */
const SEASON_CODES: Record<Season, string> = {
  Spring: '01',
  Summer: '05',
  Fall: '08',
  Winter: '12',
};

export function semesterCode(year: number, season: Season): string {
  const code = SEASON_CODES[season];
  return season === 'Winter' ? `${year - 1}${code}` : `${year}${code}`;
}

/** `2026-Summer II` → `202605`. Both summer sessions share one umd.io code. */
export function semesterCodeForTermId(termId: string): string | null {
  const match = /^(\d{4})-(Fall|Spring|Summer|Winter)/.exec(termId);
  if (!match) return null;
  return semesterCode(Number(match[1]), match[2] as Season);
}

const DAY_TOKENS: Weekday[] = ['Tu', 'Th', 'Sa', 'Su', 'M', 'W', 'F'];

/** `TuTh` → `['Tu', 'Th']`. Two-letter days are matched first so `Th` is not `T` + `h`. */
export function parseDays(days: string): Weekday[] {
  const found: Weekday[] = [];
  let rest = days.trim();
  while (rest.length > 0) {
    const token = DAY_TOKENS.find((day) => rest.startsWith(day));
    if (!token) {
      rest = rest.slice(1);
      continue;
    }
    if (!found.includes(token)) found.push(token);
    rest = rest.slice(token.length);
  }
  return found;
}

/** `1:15pm` → 795 minutes past midnight. Returns null on anything unparseable. */
export function parseTime(value: string): number | null {
  const match = /^(\d{1,2}):(\d{2})\s*(am|pm)$/i.exec(value.trim());
  if (!match) return null;
  const hour = Number(match[1]) % 12;
  const minute = Number(match[2]);
  if (minute > 59) return null;
  const offset = match[3]!.toLowerCase() === 'pm' ? 12 * 60 : 0;
  return hour * 60 + minute + offset;
}

export function formatTime(minutes: number): string {
  const hour24 = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const suffix = hour24 >= 12 ? 'pm' : 'am';
  const hour = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour}:${String(minute).padStart(2, '0')}${suffix}`;
}

function toScheduledMeeting(meeting: CachedMeeting): ScheduledMeeting | null {
  const days = parseDays(meeting.days);
  const start = parseTime(meeting.start);
  const end = parseTime(meeting.end);
  if (days.length === 0 || start === null || end === null || end <= start) return null;
  const room = [meeting.building, meeting.room].filter(Boolean).join(' ').trim();
  return {
    days,
    start,
    end,
    startLabel: formatTime(start),
    endLabel: formatTime(end),
    location: room && room !== 'ONLINE' ? room : 'Online',
  };
}

function findSection(
  sections: Record<string, CachedSection[]> | undefined,
  courseId: string,
  sectionNumber: string | undefined,
): CachedSection | undefined {
  const candidates = sections?.[courseId.toUpperCase()];
  if (!candidates || candidates.length === 0) return undefined;
  if (!sectionNumber) return undefined;
  return candidates.find(
    (section) => section.number.toUpperCase() === sectionNumber.toUpperCase(),
  );
}

export interface BuildScheduleOptions {
  /** Falls back to the catalog when the transcript carries no title. */
  titleFor?: (courseId: string) => string | undefined;
}

/**
 * Build the schedule for one term from the courses you are registered for.
 *
 * Courses whose section is missing from the cache are still returned, marked
 * `unmatched`, rather than silently dropped. A schedule that quietly omits a
 * class is worse than one that admits it does not know.
 */
export function buildSchedule(
  courses: readonly CourseEntry[],
  sectionsFile: SectionsFile | undefined,
  termId: string,
  options: BuildScheduleOptions = {},
): ScheduleEntry[] {
  const code = semesterCodeForTermId(termId);
  const semester = code ? sectionsFile?.sections[code] : undefined;

  return courses.map((course) => {
    const offered = semester?.[course.courseId.toUpperCase()] ?? [];
    const section = findSection(semester, course.courseId, course.section);
    const meetings = (section?.meetings ?? [])
      .map(toScheduledMeeting)
      .filter((meeting): meeting is ScheduledMeeting => meeting !== null);

    const offeredBy: string[] = [];
    for (const candidate of offered) {
      for (const instructor of candidate.instructors) {
        if (!offeredBy.includes(instructor)) offeredBy.push(instructor);
      }
    }

    let status: ScheduleEntry['status'] = 'scheduled';
    if (!section) status = 'unmatched';
    else if (meetings.length === 0) status = 'async';

    return {
      courseId: course.courseId,
      title: course.title || options.titleFor?.(course.courseId) || '',
      credits: course.credits,
      section: course.section,
      instructors: section?.instructors ?? [],
      offeredBy,
      meetings,
      status,
    };
  });
}

export interface GridBlock {
  entry: ScheduleEntry;
  meeting: ScheduledMeeting;
}

/** Blocks per weekday, each sorted by start time. */
export function weeklyGrid(entries: readonly ScheduleEntry[]): Record<Weekday, GridBlock[]> {
  const grid = Object.fromEntries(WEEKDAYS.map((day) => [day, [] as GridBlock[]])) as Record<
    Weekday,
    GridBlock[]
  >;

  for (const entry of entries) {
    for (const meeting of entry.meetings) {
      for (const day of meeting.days) {
        if (day in grid) grid[day].push({ entry, meeting });
      }
    }
  }

  for (const day of WEEKDAYS) {
    grid[day].sort((a, b) => a.meeting.start - b.meeting.start);
  }
  return grid;
}

export interface Conflict {
  day: Weekday;
  a: ScheduleEntry;
  b: ScheduleEntry;
}

/** Pairs of classes that overlap on the same day. Registration usually prevents these, but not always. */
export function findConflicts(entries: readonly ScheduleEntry[]): Conflict[] {
  const conflicts: Conflict[] = [];
  const grid = weeklyGrid(entries);

  for (const day of WEEKDAYS) {
    const blocks = grid[day];
    for (let i = 0; i < blocks.length; i += 1) {
      for (let j = i + 1; j < blocks.length; j += 1) {
        const first = blocks[i]!;
        const second = blocks[j]!;
        if (first.entry.courseId === second.entry.courseId) continue;
        if (first.meeting.start < second.meeting.end && second.meeting.start < first.meeting.end) {
          conflicts.push({ day, a: first.entry, b: second.entry });
        }
      }
    }
  }
  return conflicts;
}

/** Earliest start and latest end across the week, for sizing a grid. */
export function scheduleBounds(entries: readonly ScheduleEntry[]): { start: number; end: number } {
  let start = Number.POSITIVE_INFINITY;
  let end = Number.NEGATIVE_INFINITY;
  for (const entry of entries) {
    for (const meeting of entry.meetings) {
      start = Math.min(start, meeting.start);
      end = Math.max(end, meeting.end);
    }
  }
  // A sane default when nothing is scheduled.
  if (!Number.isFinite(start)) return { start: 8 * 60, end: 18 * 60 };
  return { start: Math.floor(start / 60) * 60, end: Math.ceil(end / 60) * 60 };
}
