#!/usr/bin/env node
/**
 * Cache the UMD course catalog to a static JSON file.
 *
 * api.umd.io is student-run: it goes down, it goes stale, and it is not
 * something a page load should ever depend on. Run this when you want fresher
 * data and commit the result.
 *
 *   node tools/fetch-catalog.mjs [DEPT ...]
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT = join(ROOT, 'data', 'cache', 'courses.json');

/** Departments worth caching by default: the ones most students have on a transcript. */
const DEFAULT_DEPARTMENTS = ['CMSC', 'MATH', 'STAT', 'ENGL'];

const USER_AGENT = 'TerpTracker/0.1 (student project; caching at build time)';
const PAGE_SIZE = 100;
const DELAY_MS = 200;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getJson(url) {
  const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
  return response.json();
}

async function fetchDepartment(dept) {
  const courses = [];
  for (let page = 1; ; page += 1) {
    const url = `https://api.umd.io/v1/courses?dept_id=${dept}&per_page=${PAGE_SIZE}&page=${page}`;
    const batch = await getJson(url);
    if (!Array.isArray(batch) || batch.length === 0) break;
    courses.push(...batch);
    if (batch.length < PAGE_SIZE) break;
    await sleep(DELAY_MS);
  }
  return courses;
}

async function main() {
  const departments = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_DEPARTMENTS;
  /** @type {Record<string, {title: string, credits: number, genEd: string[], dept: string}>} */
  const catalog = {};

  for (const dept of departments) {
    process.stderr.write(`fetching ${dept}... `);
    const courses = await fetchDepartment(dept);
    for (const course of courses) {
      const courseId = String(course.course_id ?? '').toUpperCase();
      if (!courseId) continue;
      // Later semesters overwrite earlier ones, which is what we want.
      catalog[courseId] = {
        title: course.name ?? '',
        credits: Number(course.credits ?? 0),
        genEd: normalizeGenEd(course.gen_ed),
        dept: course.dept_id ?? dept,
      };
    }
    process.stderr.write(`${courses.length} sections, ${Object.keys(catalog).length} courses total\n`);
    await sleep(DELAY_MS);
  }

  const payload = {
    source: 'https://api.umd.io/v1/courses',
    fetchedAt: new Date().toISOString().slice(0, 10),
    departments,
    courses: Object.fromEntries(Object.entries(catalog).sort(([a], [b]) => a.localeCompare(b))),
  };

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`);
  process.stderr.write(`wrote ${Object.keys(catalog).length} courses to ${OUTPUT}\n`);
}

/** umd.io returns gen_ed as an array of arrays, or as an array of strings. Flatten it. */
function normalizeGenEd(genEd) {
  if (!Array.isArray(genEd)) return [];
  return [...new Set(genEd.flat().filter((tag) => typeof tag === 'string'))];
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
