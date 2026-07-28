#!/usr/bin/env node
/**
 * Author the requirements files for majors that share large blocks of rules.
 *
 * Gen Ed is identical for every UMD undergraduate and the Smith School core is
 * identical for every business major. Transcribing those by hand into each file
 * is four chances to get them subtly different; building them from one function
 * makes them identical by construction. The major-specific rules below are
 * transcribed literally from the catalog page each file records as its `source`.
 *
 *   node tools/generate-requirements.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'data', 'requirements');
const VERIFIED = '2026-07-28';

const GENED_SOURCE = 'https://gened.umd.edu/node/35';

/**
 * The University's General Education programme. Same for every undergraduate.
 * Diversity and I-Series deliberately double-count with Distributive Studies,
 * which UMD allows, so they do not spend the courses they use.
 */
const genEd = () => [
  { type: 'credits', label: '[CORE/GenEd] General Education Required Credits', credits: 40, genEd: ['FSAW', 'FSPW', 'FSOC', 'FSMA', 'FSAR', 'DSHS', 'DSHU', 'DSNS', 'DSNL', 'DSSP', 'SCIS', 'DVUP', 'DVCC'], consumes: false, pool: 'gened' },
  { type: 'credits', label: '[GenEd] Academic Writing (FSAW)', credits: 3, genEd: ['FSAW'], pool: 'gened' },
  { type: 'credits', label: '[GenEd] Professional Writing (FSPW)', credits: 3, genEd: ['FSPW'], pool: 'gened' },
  { type: 'credits', label: '[GenEd] Oral Communication (FSOC)', credits: 3, genEd: ['FSOC'], pool: 'gened' },
  { type: 'credits', label: '[GenEd] Mathematics (FSMA)', credits: 3, genEd: ['FSMA'], pool: 'gened' },
  { type: 'credits', label: '[GenEd] Analytic Reasoning (FSAR)', credits: 3, genEd: ['FSAR'], pool: 'gened' },
  { type: 'credits', label: '[GenEd] History and Social Sciences (DSHS)', credits: 6, genEd: ['DSHS'], pool: 'gened' },
  { type: 'credits', label: '[GenEd] Humanities (DSHU)', credits: 6, genEd: ['DSHU'], pool: 'gened' },
  { type: 'credits', label: '[GenEd] Natural Sciences (DSNS/DSNL)', credits: 7, genEd: ['DSNS', 'DSNL'], pool: 'gened' },
  { type: 'one_of', label: '[GenEd] Natural Science with a lab (DSNL)', genEd: ['DSNL'], consumes: false, pool: 'gened' },
  { type: 'credits', label: '[GenEd] Scholarship in Practice (DSSP)', credits: 6, genEd: ['DSSP'], pool: 'gened' },
  { type: 'credits', label: '[GenEd] The Big Question / I-Series (SCIS)', credits: 6, genEd: ['SCIS'], consumes: false, pool: 'gened' },
  { type: 'n_of', label: '[GenEd] Diversity (DVUP/DVCC)', n: 2, genEd: ['DVUP', 'DVCC'], consumes: false, pool: 'gened' },
  { type: 'one_of', label: '[GenEd] At least one Understanding Plural Societies (DVUP)', genEd: ['DVUP'], consumes: false, pool: 'gened' },
];

/** Rules every degree carries, whatever the major. */
const university = () => [
  { type: 'gpa', label: '[UNIV] Cumulative GPA Requirement', minimum: 2.0 },
  { type: 'credits', label: '[UNIV] UMD Degree Requirements', credits: 120 },
  { type: 'credits', label: '[UNIV] Credits in residence at UMD', credits: 30, source: 'institution', pool: 'residency' },
];

/**
 * Smith School requirements shared by every business major, transcribed from
 * the college page rather than any one major's page.
 */
const smithCore = () => [
  { type: 'all_of', label: 'Business lower-level core', courses: ['BMGT110', 'BMGT220', 'BMGT221', 'ECON200', 'ECON201', 'BMGT230'], pool: 'major' },
  { type: 'one_of', label: 'Mathematics (MATH120 or MATH140)', courses: ['MATH120', 'MATH140'], pool: 'major' },
  { type: 'one_of', label: 'Communication (COMM100, COMM107 or COMM200)', courses: ['COMM100', 'COMM107', 'COMM200'], pool: 'major' },
  // "At least 45 hours ... must be in business and management subjects."
  { type: 'credits', label: 'Business and management subjects', credits: 45, prefixes: ['BMGT'], consumes: false, pool: 'business' },
  // "50% of the required BMGT credit hours must be completed at UMD College Park."
  { type: 'credits', label: 'Half the BMGT credits taken at UMD', credits: 22.5, prefixes: ['BMGT'], source: 'institution', consumes: false, pool: 'residency' },
  // "A minimum of 58 hours of the required 120 hours must be in 300- or 400-level courses."
  { type: 'credits', label: 'Credits at the 300-400 level', credits: 58, minLevel: 300, consumes: false, pool: 'level' },
];

const MAJORS = [
  {
    id: 'cmsc-bs-2026',
    major: 'Computer Science',
    degree: 'BS',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/computer-mathematical-natural-sciences/computer-science/computer-science-major/',
    minGrade: 'C-',
    rules: [
      ...university(),
      { type: 'gpa', label: 'Major GPA', minimum: 2.0, prefixes: ['CMSC'] },
      { type: 'all_of', label: 'Computer Science core', courses: ['CMSC131', 'CMSC132', 'CMSC216', 'CMSC250', 'CMSC330', 'CMSC351'], pool: 'major' },
      { type: 'all_of', label: 'Calculus', courses: ['MATH140', 'MATH141'], pool: 'major' },
      { type: 'credits', label: 'STAT 400-level course', credits: 3, prefixes: ['STAT'], minLevel: 400, pool: 'major' },
      // The catalog qualifies this with "prerequisite of MATH141 or higher".
      // Prerequisites are not in the cached catalog, so the level is checked and
      // the prerequisite is not — said plainly in the label rather than silently.
      { type: 'credits', label: 'Upper-level MATH/AMSC/STAT (prerequisite not checked)', credits: 3, prefixes: ['MATH', 'AMSC', 'STAT'], minLevel: 200, pool: 'major' },
      // "Select five 400 level courses from at least three of the following
      // areas with no more than three courses in a given area."
      {
        type: 'distribute',
        label: 'Upper-level CMSC across at least three areas',
        n: 5,
        minGroups: 3,
        pool: 'major',
        groups: [
          { label: 'Systems', courses: ['CMSC411', 'CMSC412', 'CMSC414', 'CMSC416', 'CMSC417'], max: 3 },
          { label: 'Information Processing', courses: ['CMSC420', 'CMSC421', 'CMSC422', 'CMSC423', 'CMSC424', 'CMSC426', 'CMSC427', 'CMSC470', 'CMSC471', 'CMSC472'], max: 3 },
          { label: 'Software Engineering and Programming Languages', courses: ['CMSC430', 'CMSC433', 'CMSC434', 'CMSC435', 'CMSC436', 'CMSC471'], max: 3 },
          { label: 'Theory', courses: ['CMSC451', 'CMSC452', 'CMSC454', 'CMSC456', 'CMSC457', 'CMSC474'], max: 3 },
          { label: 'Numerical Analysis', courses: ['CMSC460', 'CMSC466'], max: 3 },
        ],
      },
      // "Select at least 12 credits of 300-400 level courses from one
      // discipline outside of CMSC."
      { type: 'credits', label: 'Twelve credits in one discipline outside CMSC', credits: 12, minLevel: 300, excludePrefixes: ['CMSC'], sameDiscipline: true, pool: 'outside' },
      ...genEd(),
    ],
  },
  {
    id: 'bmgt-management-bs-2026',
    major: 'Management',
    degree: 'BS',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/management/management-major/',
    crossChecked: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/',
    minGrade: 'C-',
    rules: [
      ...university(),
      { type: 'gpa', label: 'Major GPA', minimum: 2.0, prefixes: ['BMGT'] },
      ...smithCore(),
      { type: 'all_of', label: 'Management core', courses: ['BMGT362', 'BMGT363'], pool: 'major' },
      // "A maximum combined total of 6 credits of BMGT468 and BMGT469
      // coursework can satisfy Management major requirements."
      {
        type: 'distribute',
        label: 'Management electives (four courses)',
        n: 4,
        pool: 'major',
        groups: [
          { label: 'Management electives', courses: ['BMGT360', 'BMGT366', 'BMGT461', 'BMGT463', 'BMGT466'] },
          { label: 'Special topics and study abroad', courses: ['BMGT468', 'BMGT469'], max: 2 },
        ],
      },
      ...genEd(),
    ],
  },
  {
    id: 'bmgt-finance-bs-2026',
    major: 'Finance',
    degree: 'BS',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/finance/finance-major/',
    crossChecked: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/',
    minGrade: 'C-',
    rules: [
      ...university(),
      { type: 'gpa', label: 'Major GPA', minimum: 2.0, prefixes: ['BMGT'] },
      ...smithCore(),
      { type: 'all_of', label: 'Finance core', courses: ['BMGT343', 'BMGT440'], pool: 'major' },
      // "A MAXIMUM OF ONE of the following courses (3cr) may be applied
      // towards this 12 cr requirement."
      {
        type: 'distribute',
        label: 'Finance electives (four courses)',
        n: 4,
        pool: 'major',
        groups: [
          { label: 'Finance electives', courses: ['BMGT342', 'BMGT347', 'BMGT441', 'BMGT442', 'BMGT443', 'BMGT444', 'BMGT445', 'BMGT446'] },
          { label: 'Special topics', courses: ['BMGT349', 'BMGT448', 'BMGT449'], max: 1 },
        ],
      },
      { type: 'one_of', label: 'Intermediate economics', courses: ['ECON305', 'ECON325', 'ECON306', 'ECON326'], pool: 'major' },
      { type: 'one_of', label: 'Quantitative or analytical course', courses: ['BMGT310', 'BMGT313', 'BMGT332', 'BMGT430'], pool: 'major' },
      { type: 'one_of', label: 'Upper-level economics (ECON330 or BMGT341)', courses: ['ECON330', 'BMGT341'], pool: 'major' },
      ...genEd(),
    ],
  },
  {
    id: 'bmgt-information-systems-bs-2026',
    major: 'Information Systems',
    degree: 'BS',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/decision-operations-information-technologies/information-systems-major/',
    crossChecked: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/',
    minGrade: 'C-',
    rules: [
      ...university(),
      { type: 'gpa', label: 'Major GPA', minimum: 2.0, prefixes: ['BMGT'] },
      ...smithCore(),
      { type: 'all_of', label: 'Information Systems core', courses: ['BMGT302', 'BMGT402', 'BMGT403', 'BMGT407'], pool: 'major' },
      // "Select two courses from list 'A' or one course from 'A' and one
      // course from list 'B'."
      {
        type: 'distribute',
        label: 'Information Systems electives',
        n: 2,
        pool: 'major',
        groups: [
          { label: 'List A', courses: ['BMGT400', 'BMGT401', 'BMGT404', 'BMGT406', 'BMGT408', 'BMGT485'] },
          { label: 'List B', courses: ['BMGT326', 'BMGT430', 'BMGT461', 'BMGT476', 'BMGT484'], max: 1 },
        ],
      },
      ...genEd(),
    ],
  },
];

for (const major of MAJORS) {
  const payload = {
    id: major.id,
    major: major.major,
    degree: major.degree,
    catalogYear: 2026,
    source: major.source,
    ...(major.crossChecked ? { crossChecked: major.crossChecked } : {}),
    genEdSource: GENED_SOURCE,
    lastVerified: VERIFIED,
    minGrade: major.minGrade,
    rules: major.rules,
  };
  writeFileSync(join(OUT, `${major.id}.json`), `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`${major.id}: ${major.rules.length} rules`);
}
