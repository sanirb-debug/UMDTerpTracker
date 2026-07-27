#!/usr/bin/env node
/**
 * Cache section meeting times from api.umd.io.
 *
 * Sections are what turn "you are registered for INST466" into "Monday and
 * Wednesday, 12:00–1:15, TWS 1310, Alia Reza". They are fetched in bulk per
 * semester and filtered to the departments already in the catalog cache, so the
 * bundle stays a sane size.
 *
 * **This is slow — budget about 13 minutes for two semesters.** Three things
 * about the endpoint are worth knowing before trying to speed it up:
 *
 *   - `dept_id` is silently ignored here, unlike on `/courses`. There is no way
 *     to ask for one department, so filtering happens client-side.
 *   - `per_page` is capped at 100 however much you ask for.
 *   - Every page costs ~7s, first or last. That is the endpoint's floor, not
 *     an offset-scanning problem, so there is nothing to optimise around.
 *
 * Run it on its own. Sharing umd.io with another job pushes page times past
 * 18s, which is what makes this look like depth-related slowdown when it is
 * really just contention — and it is rude to a service students run for free.
 *
 * Fetching per course is only better when you know the courses: `course_id=`
 * answers in ~1s, but a thousand courses times two semesters is half an hour.
 *
 *   node tools/fetch-sections.mjs [SEMESTER ...]
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CATALOG = join(ROOT, 'data', 'cache', 'courses.json');
const OUTPUT = join(ROOT, 'data', 'cache', 'sections.json');

const USER_AGENT = 'TerpTracker/0.1 (student project; caching at build time)';
const PAGE_SIZE = 100;
const DELAY_MS = 150;
/** How many of the most recent semesters to cache when none are named. */
const RECENT_SEMESTERS = 3;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getJson(url) {
  const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
  return response.json();
}

/** Keep only what a schedule needs. The rest of umd.io's payload is noise here. */
function compact(section) {
  const meetings = (section.meetings ?? [])
    .filter((meeting) => meeting.days && meeting.start_time)
    .map((meeting) => ({
      days: meeting.days,
      start: meeting.start_time,
      end: meeting.end_time,
      building: meeting.building || '',
      room: meeting.room || '',
    }));
  return {
    number: section.number,
    meetings,
    instructors: section.instructors ?? [],
    openSeats: Number(section.open_seats ?? 0),
    seats: Number(section.seats ?? 0),
  };
}

async function fetchSemester(semester, departments) {
  const byCourse = {};
  let kept = 0;
  for (let page = 1; ; page += 1) {
    const url = `https://api.umd.io/v1/courses/sections?semester=${semester}&per_page=${PAGE_SIZE}&page=${page}`;
    const batch = await getJson(url);
    if (!Array.isArray(batch) || batch.length === 0) break;
    for (const section of batch) {
      const courseId = String(section.course ?? '').toUpperCase();
      if (!courseId || !departments.has(courseId.slice(0, 4))) continue;
      (byCourse[courseId] ??= []).push(compact(section));
      kept += 1;
    }
    if (page % 10 === 0) process.stderr.write(`  ${semester}: page ${page}, ${kept} kept\n`);
    if (batch.length < PAGE_SIZE) break;
    await sleep(DELAY_MS);
  }
  return { byCourse, kept };
}

async function main() {
  const catalog = JSON.parse(readFileSync(CATALOG, 'utf8'));
  const departments = new Set(Object.values(catalog.courses).map((course) => course.dept));

  let semesters = process.argv.slice(2);
  if (semesters.length === 0) {
    const all = await getJson('https://api.umd.io/v1/courses/semesters');
    semesters = all.slice(-RECENT_SEMESTERS).map(String);
  }

  const sections = {};
  for (const semester of semesters) {
    process.stderr.write(`fetching sections for ${semester}...\n`);
    const { byCourse, kept } = await fetchSemester(semester, departments);
    sections[semester] = byCourse;
    process.stderr.write(`  ${semester}: ${kept} sections across ${Object.keys(byCourse).length} courses\n`);
    await sleep(DELAY_MS);
  }

  const payload = {
    source: 'https://api.umd.io/v1/courses/sections',
    fetchedAt: new Date().toISOString().slice(0, 10),
    semesters,
    departments: [...departments].sort(),
    sections,
  };

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, `${JSON.stringify(payload)}\n`);
  process.stderr.write(`wrote ${OUTPUT}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
