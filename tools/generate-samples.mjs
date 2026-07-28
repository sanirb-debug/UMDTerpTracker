#!/usr/bin/env node
/**
 * Generate the demo transcripts: one fictional student per major, each at four
 * points in a four-year degree.
 *
 * Everything here is invented. No real transcript is involved, not even a
 * redacted one — a PDF carries metadata a redaction does not remove, and this
 * repo is public.
 *
 * ## Why fixed-width text rather than Transcript objects
 *
 * The samples are written as the text a Testudo PDF extracts to and then run
 * through the real parser, so the demo exercises row reconstruction, the
 * section state machine and the stated-GPA self-check exactly as an upload
 * does. Hand-writing `Transcript` objects would skip all of that.
 *
 * It also makes the totals self-checking: this script computes every semester
 * and cumulative line from the course rows, and the parser then recomputes them
 * independently and compares. A mistyped grade cannot produce a sample whose
 * numbers merely look plausible.
 *
 * Credits and titles are read from the cached umd.io catalog rather than typed
 * here, per the standing rule against hardcoding a course's credits.
 *
 *   node tools/generate-samples.mjs
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FIXTURES = join(ROOT, 'fixtures');
const CATALOG = JSON.parse(readFileSync(join(ROOT, 'data/cache/courses.json'), 'utf8')).courses;

const HIST = { id: 0, title: 9, grade: 34, att: 37, earn: 43, qp: 48, gened: 54 };
const XFER = { term: 0, title: 6, grade: 30, credits: 34, equiv: 39, gened: 49 };
const CUR = { id: 0, sec: 8, credits: 13, meth: 19, status: 23, add: 26, drop: 35, gened: 53 };

const POINTS = {
  'A+': 4, A: 4, 'A-': 3.7, 'B+': 3.3, B: 3, 'B-': 2.7,
  'C+': 2.3, C: 2, 'C-': 1.7, 'D+': 1.3, D: 1, 'D-': 0.7, F: 0,
};
const NO_CREDIT = new Set(['W', 'I', 'AU', 'NG']);

/** Titles have 24 columns before the grade; the catalog's are often longer. */
function titleFor(id) {
  const raw = CATALOG[id]?.title;
  if (!raw) throw new Error(`${id} is not in the cached catalog`);
  return raw.toUpperCase().replace(/[^A-Z0-9 &/-]/g, '').replace(/\s+/g, ' ').trim().slice(0, 24).trim();
}

function creditsFor(id) {
  const credits = CATALOG[id]?.credits;
  if (!credits) throw new Error(`${id} has no credits in the cached catalog`);
  return credits;
}

const row = (cells) => {
  let line = '';
  for (const [col, text] of cells) {
    if (text === undefined || text === '') continue;
    if (line.length > col) throw new Error(`column overflow at ${col}: "${line}" + "${text}"`);
    line = line.padEnd(col) + text;
  }
  return line;
};
const money = (n) => n.toFixed(2);
const gpaStr = (n) => n.toFixed(3);

/**
 * Gen Ed codes come from the cached catalog, never from this file.
 *
 * umd.io records what UMD actually credits a course for, including the
 * conditional form `DSNL|BSCI171`, which grants the lab category only when the
 * paired course is also taken. Writing these by hand would be inventing
 * academic facts; reading them means the samples can only claim what the
 * catalog claims.
 */
function genEdFor(id, taken) {
  const raw = CATALOG[id]?.genEd ?? [];
  const codes = [];
  for (const tag of raw) {
    const [code, requires] = tag.split('|');
    if (requires && !taken.has(requires)) continue;
    if (!codes.includes(code)) codes.push(code);
  }
  return codes.length > 0 ? codes.join(', ') : undefined;
}

/** `['CMSC131', 'A-']` → a course row. Gen Ed is looked up, not declared. */
const parseSpec = (taken) => ([id, grade]) => ({
  id,
  grade,
  genEd: genEdFor(id, taken),
  credits: creditsFor(id),
});

// --- the students ----------------------------------------------------------
//
// Each major is a different person with a different shape of degree: business
// students carry the Smith core and take their Gen Ed science late, the CMSC
// student front-loads calculus, the psychology student spreads social science
// across all four years.

const TERMS = ['Fall 2023', 'Spring 2024', 'Fall 2024', 'Spring 2025', 'Fall 2025', 'Spring 2026', 'Fall 2026', 'Spring 2027'];

const PLANS = {
  'information-science': {
    major: 'Information Science',
    transfer: [
      ['2308', 'CALCULUS AB/SCR 4', 'P', 'MATH120'],
      ['', 'PSYCHOLOGY/SCR 5', 'P', 'PSYC100'],
    ],
    semesters: [
      [['INST126', 'A-'], ['ENGL101', 'B'], ['HIST200', 'A-'], ['SOCY100', 'B+'], ['AMST101', 'A']],
      [['INST201', 'A'], ['STAT100', 'B+'], ['COMM107', 'A'], ['AMST203', 'A-'], ['ECON200', 'B']],
      [['INST311', 'B+'], ['INST314', 'B'], ['ENGL393', 'A'], ['BSCI170', 'B+'], ['BSCI171', 'A'], ['MATH121', 'W']],
      [['INST326', 'A-'], ['INST327', 'A'], ['GVPT170', 'B+'], ['AMST205', 'A-'], ['SOCY241', 'B']],
      [['INST335', 'A-'], ['INST346', 'B+'], ['INST366', 'A'], ['AOSC200', 'B+'], ['ENES210', 'A-']],
      [['INST352', 'A'], ['INST362', 'A-'], ['INST354', 'B+'], ['INST341', 'A-'], ['ECON201', 'B']],
      [['INST466', 'A-'], ['INST377', 'B+'], ['BMGT220', 'A'], ['PSYC221', 'A-'], ['ENGL222', 'B+'], ['GVPT200', 'A-']],
      [['INST490', 'B+'], ['BMGT230', 'A-'], ['SOCY230', 'B+'], ['HIST111', 'A'], ['MATH121', 'B']],
    ],
  },
  'computer-science': {
    major: 'Computer Science',
    transfer: [
      ['2308', 'CALCULUS AB/SCR 5', 'P', 'MATH140'],
      ['', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101'],
    ],
    semesters: [
      [['CMSC131', 'A-'], ['MATH141', 'B+'], ['HIST200', 'A-'], ['SOCY100', 'B'], ['AMST203', 'A']],
      [['CMSC132', 'A'], ['CMSC250', 'B+'], ['MATH240', 'B'], ['COMM107', 'A'], ['AMST205', 'A-']],
      [['CMSC216', 'B+'], ['MATH241', 'B'], ['BSCI170', 'B+'], ['BSCI171', 'A'], ['ENGL393', 'A']],
      [['CMSC330', 'A-'], ['CMSC351', 'B'], ['STAT400', 'B+'], ['AOSC200', 'B+'], ['SOCY241', 'B']],
      [['CMSC411', 'B+'], ['CMSC420', 'A-'], ['ENES210', 'A'], ['ECON300', 'B'], ['GVPT170', 'A-']],
      [['CMSC421', 'B'], ['CMSC451', 'B+'], ['CMSC434', 'A-'], ['ECON305', 'B+'], ['ECON306', 'B']],
      [['CMSC430', 'A-'], ['ECON330', 'B+'], ['PSYC100', 'A'], ['ENGL222', 'B+'], ['GVPT200', 'A-']],
      [['CMSC417', 'A'], ['MATH246', 'B'], ['HIST111', 'A-'], ['SOCY105', 'B+'], ['BMGT110', 'A']],
    ],
  },
  management: {
    major: 'Management',
    transfer: [
      ['2308', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101'],
      ['', 'PSYCHOLOGY/SCR 4', 'P', 'PSYC100'],
    ],
    semesters: [
      [['BMGT110', 'A'], ['MATH120', 'B+'], ['ECON200', 'B'], ['AMST203', 'A-'], ['COMM107', 'A']],
      [['BMGT220', 'B+'], ['ECON201', 'B'], ['BMGT230', 'A-'], ['HIST200', 'B+'], ['AMST205', 'A']],
      [['BMGT221', 'B'], ['BMGT301', 'B+'], ['BSCI170', 'B'], ['BSCI171', 'A-'], ['ENGL393', 'A']],
      [['BMGT340', 'B+'], ['BMGT350', 'A-'], ['AOSC200', 'B+'], ['SOCY241', 'B'], ['BMGT364', 'A']],
      [['BMGT363', 'A-'], ['BMGT380', 'B+'], ['BMGT360', 'A'], ['GVPT170', 'B+'], ['SOCY100', 'A-']],
      [['BMGT362', 'B+'], ['BMGT366', 'A-'], ['BMGT461', 'B'], ['ENGL222', 'B+'], ['HIST111', 'A-']],
      [['BMGT463', 'A-'], ['BMGT495', 'B+'], ['BMGT466', 'B'], ['PSYC221', 'A-'], ['GVPT200', 'B+']],
      [['BMGT332', 'A'], ['ECON230', 'B+'], ['SOCY105', 'A-'], ['AMST101', 'B+'], ['COMM200', 'A']],
    ],
  },
  finance: {
    major: 'Finance',
    transfer: [
      ['2308', 'CALCULUS AB/SCR 4', 'P', 'MATH120'],
      ['', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101'],
    ],
    semesters: [
      [['BMGT110', 'A-'], ['ECON200', 'A'], ['AMST203', 'B+'], ['COMM107', 'A-'], ['SOCY100', 'B']],
      [['BMGT220', 'A'], ['ECON201', 'B+'], ['BMGT230', 'A-'], ['HIST200', 'B'], ['AMST205', 'A-']],
      [['BMGT221', 'B+'], ['BMGT301', 'A-'], ['BSCI170', 'B'], ['BSCI171', 'A'], ['ENGL393', 'A-']],
      [['BMGT340', 'A-'], ['ECON305', 'B+'], ['AOSC200', 'B'], ['SOCY241', 'B+'], ['BMGT364', 'A-']],
      [['BMGT343', 'B+'], ['BMGT310', 'A-'], ['BMGT341', 'B'], ['GVPT170', 'A-'], ['ENGL234', 'B+']],
      [['BMGT440', 'B'], ['BMGT347', 'B+'], ['BMGT441', 'A-'], ['ECON230', 'B'], ['HIST111', 'A-']],
      [['BMGT444', 'B+'], ['BMGT446', 'A-'], ['BMGT350', 'B'], ['SOCY230', 'A-'], ['GVPT200', 'B+']],
      [['BMGT495', 'A-'], ['ECON330', 'B+'], ['AMST101', 'A-'], ['SOCY105', 'B+'], ['COMM200', 'A']],
    ],
  },
  'information-systems': {
    major: 'Information Systems',
    transfer: [
      ['2308', 'CALCULUS AB/SCR 4', 'P', 'MATH120'],
      ['', 'PSYCHOLOGY/SCR 5', 'P', 'PSYC100'],
    ],
    semesters: [
      [['BMGT110', 'A'], ['ENGL101', 'B+'], ['ECON200', 'A-'], ['AMST203', 'B+'], ['COMM107', 'A']],
      [['BMGT220', 'A-'], ['ECON201', 'B+'], ['BMGT230', 'A'], ['HIST200', 'B+'], ['AMST101', 'B']],
      [['BMGT221', 'B+'], ['BMGT302', 'A'], ['BSCI170', 'B+'], ['BSCI171', 'A-'], ['ENGL393', 'A']],
      [['BMGT301', 'A-'], ['BMGT403', 'B+'], ['AOSC200', 'B'], ['SOCY241', 'A-'], ['BMGT364', 'B+']],
      [['BMGT402', 'A-'], ['BMGT430', 'B+'], ['BMGT340', 'B'], ['GVPT170', 'A-'], ['SOCY105', 'B+']],
      [['BMGT407', 'A'], ['BMGT401', 'B+'], ['BMGT350', 'A-'], ['ENGL234', 'B'], ['HIST111', 'B+']],
      [['BMGT484', 'A-'], ['BMGT495', 'B+'], ['BMGT380', 'A-'], ['SOCY230', 'B+'], ['GVPT200', 'A-']],
      [['BMGT485', 'A'], ['ECON230', 'B+'], ['AMST205', 'A-'], ['PSYC221', 'B'], ['COMM200', 'A-']],
    ],
  },
  criminology: {
    major: 'Criminology and Criminal Justice',
    transfer: [
      ['2308', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101'],
      ['', 'PSYCHOLOGY/SCR 4', 'P', 'PSYC100'],
    ],
    semesters: [
      [['CCJS100', 'A-'], ['SOCY100', 'B+'], ['MATH120', 'B'], ['HIST200', 'A'], ['AMST203', 'A-']],
      [['CCJS105', 'B+'], ['GVPT170', 'A-'], ['COMM107', 'A'], ['SOCY105', 'B'], ['AMST205', 'B+']],
      [['CCJS200', 'B'], ['CCJS230', 'B+'], ['STAT100', 'A-'], ['BSCI170', 'B'], ['BSCI171', 'A-']],
      [['CCJS300', 'A-'], ['PSYC221', 'B+'], ['ENGL393', 'A'], ['AOSC200', 'B'], ['ECON200', 'B+']],
      [['CCJS320', 'B+'], ['CCJS340', 'A-'], ['GVPT200', 'B'], ['SOCY241', 'B+'], ['HIST111', 'A-']],
      [['CCJS352', 'A-'], ['CCJS360', 'B'], ['CCJS370', 'B+'], ['ENGL222', 'A-'], ['SOCY230', 'B']],
      [['CCJS310', 'B+'], ['CCJS325', 'A-'], ['CCJS345', 'B'], ['GVPT201', 'B+'], ['COMM200', 'A-']],
      [['CCJS321', 'A-'], ['CCJS330', 'B+'], ['PSYC300', 'B'], ['AMST101', 'A-'], ['SOCY105', 'B+']],
    ],
  },
  economics: {
    major: 'Economics',
    transfer: [
      ['2308', 'CALCULUS AB/SCR 5', 'P', 'MATH140'],
      ['', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101'],
    ],
    semesters: [
      [['ECON200', 'A'], ['MATH141', 'B+'], ['HIST200', 'B'], ['AMST203', 'A-'], ['SOCY100', 'B+']],
      [['ECON201', 'A-'], ['MATH240', 'B'], ['COMM107', 'A'], ['AMST205', 'B+'], ['GVPT170', 'B']],
      [['ECON230', 'B+'], ['MATH241', 'B'], ['BSCI170', 'B+'], ['BSCI171', 'A'], ['ENGL393', 'A-']],
      [['ECON305', 'B'], ['ECON306', 'B+'], ['STAT400', 'A-'], ['AOSC200', 'B'], ['HIST111', 'B+']],
      [['ECON300', 'A-'], ['ECON317', 'B+'], ['ECON321', 'B'], ['SOCY241', 'B+'], ['ENGL222', 'A-']],
      [['ECON330', 'B+'], ['ECON312', 'A-'], ['ECON315', 'B'], ['PSYC100', 'A-'], ['GVPT200', 'B+']],
      [['ECON327', 'B'], ['ECON326', 'B+'], ['ECON401', 'A-'], ['SOCY105', 'B+'], ['COMM200', 'A-']],
      [['ECON386', 'A-'], ['ECON396', 'B+'], ['BMGT110', 'A'], ['AMST101', 'B+'], ['SOCY230', 'B']],
    ],
  },
  biology: {
    major: 'Biological Sciences',
    transfer: [
      ['2308', 'CALCULUS AB/SCR 4', 'P', 'MATH140'],
      ['', 'ENG LANG/COMP/SCR 5', 'P', 'ENGL101'],
    ],
    semesters: [
      [['BSCI170', 'A-'], ['BSCI171', 'A'], ['CHEM131', 'B+'], ['CHEM132', 'A-'], ['MATH141', 'B']],
      [['BSCI160', 'B+'], ['BSCI161', 'A-'], ['CHEM231', 'B'], ['CHEM232', 'B+'], ['COMM107', 'A']],
      [['BSCI201', 'B+'], ['PHYS121', 'B'], ['ENGL393', 'A-'], ['AMST203', 'B+'], ['HIST200', 'A-']],
      [['BSCI202', 'A-'], ['PHYS122', 'B+'], ['STAT100', 'B'], ['SOCY100', 'B+'], ['AMST205', 'A-']],
      [['BSCI222', 'B+'], ['BSCI207', 'A-'], ['PSYC100', 'A'], ['GVPT170', 'B'], ['HIST111', 'B+']],
      [['BSCI331', 'B'], ['BSCI353', 'B+'], ['BSCI363', 'A-'], ['SOCY241', 'B'], ['ENGL222', 'B+']],
      [['BSCI361', 'B+'], ['BSCI370', 'A-'], ['BSCI333', 'B'], ['GVPT200', 'B+']],
      [['BSCI403', 'A-'], ['BSCI366', 'B+'], ['BSCI355', 'B'], ['COMM200', 'A-'], ['AMST101', 'B+']],
    ],
  },
  government: {
    major: 'Government and Politics',
    transfer: [
      ['2308', 'US GOVERNMENT/SCR 5', 'P', 'GVPT170'],
      ['', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101'],
    ],
    semesters: [
      [['GVPT200', 'A-'], ['HIST200', 'B+'], ['SOCY100', 'B'], ['MATH120', 'B+'], ['AMST203', 'A']],
      [['GVPT241', 'B+'], ['GVPT273', 'A-'], ['COMM107', 'A'], ['ECON200', 'B'], ['AMST205', 'B+']],
      [['GVPT201', 'B'], ['GVPT280', 'B+'], ['STAT100', 'A-'], ['BSCI170', 'B'], ['BSCI171', 'A-']],
      [['GVPT202', 'A-'], ['GVPT217', 'B+'], ['ENGL393', 'A'], ['AOSC200', 'B'], ['ECON201', 'B+']],
      [['GVPT306', 'B+'], ['GVPT354', 'A-'], ['HIST111', 'B'], ['SOCY241', 'B+'], ['PSYC100', 'A-']],
      [['GVPT390', 'A-'], ['GVPT404', 'B'], ['GVPT411', 'B+'], ['ENGL222', 'A-'], ['SOCY105', 'B']],
      [['GVPT410', 'B+'], ['GVPT412', 'A-'], ['GVPT356', 'B'], ['COMM200', 'B+'], ['AMST101', 'A-']],
      [['GVPT413', 'A-'], ['GVPT377', 'B+'], ['GVPT221', 'B'], ['SOCY230', 'B+'], ['HIST200', 'A-']],
    ],
  },
  'mechanical-engineering': {
    major: 'Mechanical Engineering',
    transfer: [
      ['2308', 'CALCULUS AB/SCR 5', 'P', 'MATH140'],
      ['', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101'],
    ],
    semesters: [
      [['ENES100', 'A-'], ['MATH141', 'B+'], ['CHEM135', 'B'], ['HIST200', 'A-'], ['AMST203', 'B+']],
      [['ENME202', 'B+'], ['MATH241', 'B'], ['PHYS161', 'B+'], ['COMM107', 'A-'], ['AMST205', 'B']],
      [['ENME272', 'A-'], ['MATH246', 'B'], ['PHYS260', 'B+'], ['PHYS261', 'A-'], ['ENGL393', 'A']],
      [['ENME331', 'B'], ['ENME350', 'B+'], ['ENES220', 'B'], ['SOCY100', 'B+'], ['HIST111', 'A-']],
      [['ENME361', 'B+'], ['ENME382', 'B'], ['ENME392', 'A-'], ['GVPT170', 'B+'], ['ENGL222', 'B']],
      [['ENME400', 'A-'], ['ENME423', 'B+'], ['ENME332', 'B'], ['SOCY241', 'B+'], ['PSYC100', 'A-']],
      [['ENME425', 'B+'], ['ENME408', 'A-'], ['ENME416', 'B'], ['AMST101', 'B+']],
      [['ENME401', 'A-'], ['ENME405', 'B+'], ['ENME422', 'B'], ['COMM200', 'A-'], ['SOCY105', 'B+']],
    ],
  },
  communication: {
    major: 'Communication',
    transfer: [
      ['2308', 'ENG LANG/COMP/SCR 5', 'P', 'ENGL101'],
      ['', 'PSYCHOLOGY/SCR 4', 'P', 'PSYC100'],
    ],
    semesters: [
      [['COMM107', 'A'], ['SOCY100', 'B+'], ['MATH120', 'B'], ['AMST203', 'A-'], ['HIST200', 'B+']],
      [['COMM200', 'A-'], ['COMM201', 'B+'], ['GVPT170', 'B'], ['AMST205', 'A-'], ['SOCY105', 'B+']],
      [['COMM230', 'B+'], ['COMM250', 'A-'], ['STAT100', 'B'], ['BSCI170', 'B+'], ['BSCI171', 'A']],
      [['COMM301', 'A-'], ['COMM302', 'B+'], ['ENGL393', 'A'], ['AOSC200', 'B'], ['ECON200', 'B+']],
      [['COMM324', 'B+'], ['COMM330', 'A-'], ['COMM351', 'B'], ['PSYC221', 'B+'], ['HIST111', 'A-']],
      [['COMM353', 'A-'], ['COMM311', 'B+'], ['COMM312', 'B'], ['SOCY241', 'B+'], ['ENGL222', 'A-']],
      [['COMM320', 'B+'], ['COMM331', 'A-'], ['COMM345', 'B'], ['GVPT200', 'B+'], ['AMST101', 'A-']],
      [['COMM303', 'A-'], ['COMM304', 'B+'], ['COMM305', 'B'], ['SOCY230', 'B+'], ['COMM306', 'A-']],
    ],
  },
  kinesiology: {
    major: 'Kinesiology',
    transfer: [
      ['2308', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101'],
      ['', 'PSYCHOLOGY/SCR 5', 'P', 'PSYC100'],
    ],
    semesters: [
      [['KNES200', 'A-'], ['MATH120', 'B+'], ['BSCI170', 'B'], ['BSCI171', 'A-'], ['AMST203', 'B+']],
      [['KNES225', 'B+'], ['BSCI201', 'B'], ['COMM107', 'A-'], ['HIST200', 'B+'], ['SOCY100', 'A-']],
      [['KNES260', 'A-'], ['BSCI202', 'B+'], ['CHEM131', 'B'], ['CHEM132', 'B+'], ['ENGL393', 'A-']],
      [['KNES285', 'B+'], ['KNES286', 'A-'], ['STAT100', 'B'], ['AMST205', 'B+'], ['GVPT170', 'A-']],
      [['KNES300', 'B'], ['KNES320', 'B+'], ['PSYC221', 'A-'], ['HIST111', 'B+']],
      [['KNES350', 'A-'], ['KNES360', 'B'], ['KNES355', 'B+'], ['SOCY241', 'B'], ['ENGL222', 'A-']],
      [['KNES370', 'B+'], ['KNES385', 'A-'], ['KNES386', 'B'], ['SOCY105', 'B+']],
      [['KNES305', 'A-'], ['KNES306', 'B+'], ['KNES340', 'B'], ['COMM200', 'A-'], ['AMST101', 'B+']],
    ],
  },
  psychology: {
    major: 'Psychology',
    transfer: [
      ['2308', 'ENG LANG/COMP/SCR 5', 'P', 'ENGL101'],
      ['', 'CALCULUS AB/SCR 3', 'P', 'MATH120'],
    ],
    semesters: [
      [['PSYC100', 'A'], ['SOCY100', 'A-'], ['AMST203', 'B+'], ['COMM107', 'A'], ['HIST200', 'B+']],
      [['PSYC200', 'B+'], ['PSYC221', 'A-'], ['BSCI170', 'B'], ['BSCI171', 'A-'], ['ENGL393', 'A']],
      [['PSYC300', 'B'], ['SOCY241', 'B+'], ['AOSC200', 'B+'], ['ENES210', 'A-'], ['AMST205', 'B+']],
      [['PSYC336', 'A-'], ['PSYC341', 'B+'], ['GVPT170', 'B'], ['ECON200', 'B+'], ['ENGL222', 'A-']],
      [['PSYC353', 'A-'], ['PSYC355', 'B+'], ['SOCY105', 'A-'], ['HIST111', 'B+'], ['GVPT200', 'B']],
      [['PSYC361', 'B+'], ['PSYC432', 'A-'], ['STAT100', 'B+'], ['AMST101', 'A-'], ['ECON201', 'B']],
      [['PSYC436', 'A-'], ['PSYC404', 'B+'], ['SOCY230', 'A-'], ['COMM200', 'B+'], ['BMGT110', 'A-']],
      [['PSYC413', 'A'], ['PSYC330', 'B+'], ['HIST111', 'A-'], ['ENGL234', 'B+'], ['SOCY230', 'A-']],
    ],
  },
};

const SNAPSHOTS = [
  { year: 'freshman', label: 'Freshman', through: 1, registered: 2 },
  { year: 'sophomore', label: 'Sophomore', through: 3, registered: 4 },
  { year: 'junior', label: 'Junior', through: 5, registered: 6 },
  { year: 'senior', label: 'Senior', through: 6, registered: 7 },
];

function totalsFor(courses) {
  let gpaCredits = 0, points = 0, earned = 0;
  for (const course of courses) {
    const grade = POINTS[course.grade];
    if (grade !== undefined) {
      gpaCredits += course.credits;
      points += course.credits * grade;
      if (grade > 0) earned += course.credits;
    } else if (!NO_CREDIT.has(course.grade)) {
      earned += course.credits;
    }
  }
  return { gpaCredits, points, earned };
}

function courseRow(course) {
  const grade = POINTS[course.grade];
  const earned = grade === undefined ? (NO_CREDIT.has(course.grade) ? 0 : course.credits) : grade > 0 ? course.credits : 0;
  return row([
    [HIST.id, course.id], [HIST.title, titleFor(course.id)], [HIST.grade, course.grade],
    [HIST.att, money(course.credits)], [HIST.earn, money(earned)],
    [HIST.qp, money(grade === undefined ? 0 : course.credits * grade)], [HIST.gened, course.genEd],
  ]);
}

function build(plan, snapshot) {
  // Conditional Gen Ed tags depend on what else the student took.
  const taken = new Set(plan.semesters.flat().map(([id]) => id));
  const spec = parseSpec(taken);
  const semesters = plan.semesters.slice(0, snapshot.through + 1).map((s) => s.map(spec));
  const registered = plan.semesters[snapshot.registered].map(spec);
  const transferCredits = plan.transfer.reduce((sum, [, , , equiv]) => sum + creditsFor(equiv), 0);

  const lines = [
    row([[20, 'UNIVERSITY OF MARYLAND']]), row([[24, 'COLLEGE PARK']]),
    row([[20, 'Office of the Registrar']]), row([[20, 'UNOFFICIAL TRANSCRIPT']]),
    row([[18, 'FOR ADVISING PURPOSES ONLY']]), '',
    'Terrapin, Sample T', 'E-Mail: sample@terpmail.umd.edu', `Major: ${plan.major}`,
    'Undergraduate Degree Seeking',
    row([[0, 'GenEd Program'], [40, `Current Status: Registered ${TERMS[snapshot.registered]}`]]), '',
    'Transcripts received from the following institutions:',
    row([[0, 'Advanced Placement Exam'], [30, 'on 08/15/23']]), '',
    row([[0, '** Transfer Credit Information **'], [45, '** Equivalences **']]),
    'Advanced Placement Exam',
    ...plan.transfer.map(([term, title, grade, equiv]) =>
      row([[XFER.term, term], [XFER.title, title], [XFER.grade, grade],
        [XFER.credits, money(creditsFor(equiv))], [XFER.equiv, equiv],
        [XFER.gened, genEdFor(equiv, taken)]]),
    ),
    row([[0, 'Acceptable UG Inst. Credits:'], [34, money(transferCredits)]]),
    row([[0, 'Total UG Credits Applicable:'], [34, money(transferCredits)]]), '',
    'Historic Course Information is listed in the order:',
    'Course, Title, Grade, Credits Attempted, Earned and Quality Points', '',
  ];

  let cumGpaCredits = 0, cumPoints = 0, cumEarned = 0;
  semesters.forEach((courses, index) => {
    const { gpaCredits, points, earned } = totalsFor(courses);
    cumGpaCredits += gpaCredits; cumPoints += points; cumEarned += earned;
    lines.push(TERMS[index]);
    lines.push(row([[0, `MAJOR: ${plan.major.toUpperCase()}`]]));
    lines.push(...courses.map(courseRow));
    lines.push(row([[0, 'Semester:'], [14, `Attempted ${money(gpaCredits)}; Earned ${money(earned)}; QPoints ${money(points)}; GPA ${gpaStr(points / gpaCredits)}`]]));
    lines.push(row([[0, 'UG Cumulative:'], [26, `${money(cumGpaCredits)};`], [35, `${money(cumEarned)};`], [45, `${money(cumPoints)};`], [55, gpaStr(cumPoints / cumGpaCredits)]]));
    lines.push(index % 2 === 1 && index < semesters.length - 1 ? '\f' : '');
  });

  lines.push(row([[0, 'UG Cumulative Credit'], [30, `: ${money(cumEarned + transferCredits)}`]]));
  lines.push(row([[0, 'UG Cumulative GPA'], [30, ':'], [40, gpaStr(cumPoints / cumGpaCredits)]]));
  lines.push('', '** Current Course Information **');
  lines.push(row([[0, `${TERMS[snapshot.registered]} Course`], [20, 'Sec Credits Grd/ Drop'], [50, 'Add'], [60, 'Drop'], [70, 'Modified GenEd']]));
  lines.push(row([[20, 'Meth /Add Date'], [60, 'Date'], [70, 'Date']]));
  lines.push('======== ==== ======= ==== ==== ======== ======== ======== =============');
  registered.forEach((course, index) => {
    lines.push(row([[CUR.id, course.id], [CUR.sec, `010${index + 1}`], [CUR.credits, money(course.credits)],
      [CUR.meth, 'REG'], [CUR.status, 'A'], [CUR.add, '04/01/26'], [CUR.drop, '04/01/26']]));
  });
  lines.push('');

  return {
    text: lines.join('\n') + '\n',
    gpa: Number(gpaStr(cumPoints / cumGpaCredits)),
    gpaCredits: cumGpaCredits,
    earnedCredits: cumEarned + transferCredits,
  };
}

const summary = [];
for (const [slug, plan] of Object.entries(PLANS)) {
  for (const snapshot of SNAPSHOTS) {
    const built = build(plan, snapshot);
    const dir = join(FIXTURES, `sample-${slug}-${snapshot.year}`);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'transcript.txt'), built.text);
    summary.push({ major: plan.major, year: snapshot.label, gpa: built.gpa, gpaCredits: built.gpaCredits, earned: built.earnedCredits });
  }
}
console.table(summary);
