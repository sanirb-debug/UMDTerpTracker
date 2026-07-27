#!/usr/bin/env node
/**
 * Cache PlanetTerp grade distributions for every course in the cached catalog.
 *
 * PlanetTerp is community-run and has no bulk endpoint, so this is one request
 * per course, sequential, with a delay. Be patient and do not raise the rate.
 *
 *   node tools/fetch-catalog.mjs && node tools/fetch-grades.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CATALOG = join(ROOT, 'data', 'cache', 'courses.json');
const OUTPUT = join(ROOT, 'data', 'cache', 'grades.json');
const PROFESSORS = join(ROOT, 'data', 'cache', 'professors.json');

const USER_AGENT = 'TerpTracker/0.1 (student project; caching at build time)';
/** One request every 350ms. Somebody else pays for this API. */
const DELAY_MS = 350;
const COUNTED = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F', 'W'];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchCourse(courseId) {
  const url = `https://planetterp.com/api/v1/grades?course=${encodeURIComponent(courseId)}`;
  const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (response.status === 400 || response.status === 404) return null; // No data for this course.
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${courseId}`);
  const sections = await response.json();
  return Array.isArray(sections) ? sections : null;
}

function aggregate(courseId, sections) {
  const counts = {};
  let total = 0;
  for (const section of sections) {
    for (const grade of COUNTED) {
      const count = Number(section[grade] ?? 0);
      if (!Number.isFinite(count) || count <= 0) continue;
      counts[grade] = (counts[grade] ?? 0) + count;
      total += count;
    }
  }
  return { courseId, counts, total, sections: sections.length };
}

/** Quality points per grade. A+ and A are both 4.0 at UMD. */
const POINTS = {
  'A+': 4, A: 4, 'A-': 3.7, 'B+': 3.3, B: 3, 'B-': 2.7,
  'C+': 2.3, C: 2, 'C-': 1.7, 'D+': 1.3, D: 1, 'D-': 0.7, F: 0,
};
const A_OR_BETTER = ['A+', 'A', 'A-'];
/** Below this many students a professor's average says more about luck than teaching. */
const MIN_STUDENTS = 20;
const MAX_PER_COURSE = 15;

/**
 * Per-professor summaries for one course.
 *
 * The same `/grades?course=` response already carries a `professor` on every
 * section — the course-level aggregate throws that away. Keeping it costs no
 * extra requests and is what makes "who should I take this with" answerable.
 */
function byProfessor(sections) {
  const professors = new Map();

  for (const section of sections) {
    const name = String(section.professor ?? '').trim();
    if (!name) continue;
    let entry = professors.get(name);
    if (!entry) {
      entry = { name, students: 0, points: 0, aOrBetter: 0, sections: 0 };
      professors.set(name, entry);
    }
    entry.sections += 1;
    for (const grade of Object.keys(POINTS)) {
      const count = Number(section[grade] ?? 0);
      if (!Number.isFinite(count) || count <= 0) continue;
      entry.students += count;
      entry.points += count * POINTS[grade];
      if (A_OR_BETTER.includes(grade)) entry.aOrBetter += count;
    }
  }

  return [...professors.values()]
    .filter((entry) => entry.students >= MIN_STUDENTS)
    .map((entry) => ({
      name: entry.name,
      students: entry.students,
      sections: entry.sections,
      avgGpa: Number((entry.points / entry.students).toFixed(3)),
      aOrBetter: Number((entry.aOrBetter / entry.students).toFixed(3)),
    }))
    .sort((a, b) => b.avgGpa - a.avgGpa)
    .slice(0, MAX_PER_COURSE);
}

async function main() {
  const catalog = JSON.parse(readFileSync(CATALOG, 'utf8'));
  const courseIds = Object.keys(catalog.courses);
  const distributions = {};
  const professors = {};
  let done = 0;

  for (const courseId of courseIds) {
    done += 1;
    try {
      const sections = await fetchCourse(courseId);
      if (sections && sections.length > 0) {
        const distribution = aggregate(courseId, sections);
        if (distribution.total > 0) distributions[courseId] = distribution;
        const staff = byProfessor(sections);
        if (staff.length > 0) professors[courseId] = staff;
      }
    } catch (error) {
      process.stderr.write(`\n  ${courseId}: ${error.message}\n`);
    }
    if (done % 25 === 0) {
      process.stderr.write(`${done}/${courseIds.length} (${Object.keys(distributions).length} with data)\n`);
    }
    await sleep(DELAY_MS);
  }

  const fetchedAt = new Date().toISOString().slice(0, 10);
  const source = 'https://planetterp.com/api/v1/grades';

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, `${JSON.stringify({ source, fetchedAt, distributions }, null, 2)}\n`);
  writeFileSync(PROFESSORS, `${JSON.stringify({ source, fetchedAt, courses: professors })}\n`);
  process.stderr.write(
    `wrote ${Object.keys(distributions).length} distributions to ${OUTPUT}\n` +
      `wrote professors for ${Object.keys(professors).length} courses to ${PROFESSORS}\n`,
  );
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
