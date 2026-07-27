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

async function main() {
  const catalog = JSON.parse(readFileSync(CATALOG, 'utf8'));
  const courseIds = Object.keys(catalog.courses);
  const distributions = {};
  let done = 0;

  for (const courseId of courseIds) {
    done += 1;
    try {
      const sections = await fetchCourse(courseId);
      if (sections && sections.length > 0) {
        const distribution = aggregate(courseId, sections);
        if (distribution.total > 0) distributions[courseId] = distribution;
      }
    } catch (error) {
      process.stderr.write(`\n  ${courseId}: ${error.message}\n`);
    }
    if (done % 25 === 0) {
      process.stderr.write(`${done}/${courseIds.length} (${Object.keys(distributions).length} with data)\n`);
    }
    await sleep(DELAY_MS);
  }

  const payload = {
    source: 'https://planetterp.com/api/v1/grades',
    fetchedAt: new Date().toISOString().slice(0, 10),
    distributions,
  };

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`);
  process.stderr.write(`wrote ${Object.keys(distributions).length} distributions to ${OUTPUT}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
