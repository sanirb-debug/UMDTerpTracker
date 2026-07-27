#!/usr/bin/env node
/**
 * Add PlanetTerp star ratings to the cached professor summaries.
 *
 * Reads `data/cache/professors.json` (written by fetch-grades.mjs), looks up
 * each professor's `average_rating`, and writes the file back with a `rating`
 * on every record. Run it after fetch-grades.
 *
 * Runs in two passes:
 *
 *   1. Page the `/api/v1/professors` list for `average_rating`. ~130 requests
 *      covers every professor at UMD, against ~2,300 if asked one at a time.
 *   2. For each professor that *has* a rating, fetch their reviews to count
 *      them. This is one request each and there is no bulk alternative —
 *      `/api/v1/reviews` is a 404 — so it is the expensive half.
 *
 * Pass 2 exists because pass 1 alone produces a useless ranking. Rating out of
 * 5 with no denominator puts three unqualified 5.0s at the top of a course and
 * pushes down a 4.83 drawn from real volume. The review count is what lets the
 * ranking discount a perfect score from two people, so it is worth the
 * requests. Nothing here runs at page load.
 *
 *   node tools/fetch-ratings.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PROFESSORS = join(ROOT, 'data', 'cache', 'professors.json');

const USER_AGENT = 'TerpTracker/0.1 (student project; caching at build time)';
const PAGE_SIZE = 100;
const DELAY_MS = 300;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Names come from two PlanetTerp endpoints; compare them loosely. */
const normalize = (name) => name.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.,]/g, '');

async function main() {
  const file = JSON.parse(readFileSync(PROFESSORS, 'utf8'));

  const wanted = new Set();
  for (const records of Object.values(file.courses)) {
    for (const record of records) wanted.add(normalize(record.name));
  }
  process.stderr.write(`looking for ratings for ${wanted.size} professors\n`);

  const ratings = new Map();
  for (let offset = 0; ; offset += PAGE_SIZE) {
    const url = `https://planetterp.com/api/v1/professors?limit=${PAGE_SIZE}&offset=${offset}`;
    const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText} at offset ${offset}`);
    const batch = await response.json();
    if (!Array.isArray(batch) || batch.length === 0) break;

    for (const professor of batch) {
      const key = normalize(String(professor.name ?? ''));
      if (!key || !wanted.has(key)) continue;
      const rating = professor.average_rating;
      if (typeof rating === 'number' && Number.isFinite(rating)) {
        ratings.set(key, Number(rating.toFixed(2)));
      }
    }

    if (offset % 2000 === 0) {
      process.stderr.write(`  offset ${offset}: ${ratings.size} matched\n`);
    }
    if (batch.length < PAGE_SIZE) break;
    await sleep(DELAY_MS);
  }

  // --- pass 2: how many reviews is each rating drawn from ---------------
  const reviewCounts = new Map();
  const rated = [...ratings.keys()];
  const displayNames = new Map();
  for (const records of Object.values(file.courses)) {
    for (const record of records) displayNames.set(normalize(record.name), record.name);
  }

  process.stderr.write(`counting reviews for ${rated.length} rated professors\n`);
  let done = 0;
  for (const key of rated) {
    done += 1;
    const name = displayNames.get(key) ?? key;
    try {
      const url = `https://planetterp.com/api/v1/professor?name=${encodeURIComponent(name)}&reviews=true`;
      const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
      if (response.ok) {
        const professor = await response.json();
        if (Array.isArray(professor.reviews)) reviewCounts.set(key, professor.reviews.length);
      }
    } catch {
      // A professor we cannot count is just one without a count; keep going.
    }
    if (done % 200 === 0) process.stderr.write(`  ${done}/${rated.length}\n`);
    await sleep(DELAY_MS);
  }

  let annotated = 0;
  for (const records of Object.values(file.courses)) {
    for (const record of records) {
      const key = normalize(record.name);
      const rating = ratings.get(key);
      if (rating !== undefined) {
        record.rating = rating;
        const reviews = reviewCounts.get(key);
        if (reviews !== undefined) record.reviews = reviews;
        annotated += 1;
      }
    }
  }

  file.ratingSource = 'https://planetterp.com/api/v1/professors';
  file.ratingsFetchedAt = new Date().toISOString().slice(0, 10);
  writeFileSync(PROFESSORS, `${JSON.stringify(file)}\n`);
  process.stderr.write(
    `matched ${ratings.size} of ${wanted.size} professors; annotated ${annotated} course records\n`,
  );
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
