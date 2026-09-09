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
/** The eight majors added later, checked against the 2026-2027 catalog. */
const VERIFIED_SEP = '2026-09-09';

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

/**
 * Psychology's three thematic areas.
 *
 * The catalog does not list them: it defers to the department's course page,
 * which is what `crossChecked` on the major records. They are transcribed from
 * there rather than from the catalog, which is why that source is cited.
 */
const PSYC_MIND_BRAIN = ['PSYC202', 'PSYC206', 'PSYC301', 'PSYC302', 'PSYC304', 'PSYC307', 'PSYC310', 'PSYC341', 'PSYC355', 'PSYC401', 'PSYC402', 'PSYC403', 'PSYC404', 'PSYC406', 'PSYC407', 'PSYC411', 'PSYC413', 'PSYC414', 'PSYC417', 'PSYC431', 'PSYC440', 'PSYC442', 'PSYC443', 'PSYC455', 'PSYC489G', 'PSYC489J', 'PSYC489N', 'PSYC489X'];
const PSYC_MENTAL_HEALTH = ['PSYC210', 'PSYC234', 'PSYC262', 'PSYC330', 'PSYC332', 'PSYC336', 'PSYC344', 'PSYC353', 'PSYC381', 'PSYC391', 'PSYC425', 'PSYC432', 'PSYC433', 'PSYC435', 'PSYC436', 'PSYC437', 'PSYC457', 'PSYC459A', 'PSYC489A', 'PSYC489E', 'PSYC489M', 'PSYC489Q', 'PSYC489V', 'PSYC489W'];
const PSYC_SOCIAL_DEV = ['PSYC221', 'PSYC221H', 'PSYC232', 'PSYC237', 'PSYC309D', 'PSYC334', 'PSYC354', 'PSYC356', 'PSYC357', 'PSYC361', 'PSYC362', 'PSYC416', 'PSYC420', 'PSYC424', 'PSYC426', 'PSYC450', 'PSYC456', 'PSYC460', 'PSYC463', 'PSYC464', 'PSYC465'];
/** The designated multicultural courses, which live inside two of the themes. */
const PSYC_MULTICULTURAL = ['PSYC262', 'PSYC336', 'PSYC391', 'PSYC489E', 'PSYC489Q', 'PSYC232', 'PSYC354'];

/** General Biology advanced-program areas. One course required from each. */
const BSCI_GENETICS = ['BCHM465', 'BSCI370', 'BSCI402', 'BSCI405', 'BSCI407', 'BSCI410', 'BSCI411', 'BSCI412', 'BSCI414', 'BSCI415', 'BSCI416', 'BSCI471'];
const BSCI_CELL = ['BCHM462', 'BCHM464', 'BSCI342', 'BSCI331', 'BSCI332', 'BSCI348', 'BSCI353', 'BSCI404', 'BSCI406', 'BSCI417', 'BSCI420', 'BSCI422', 'BSCI423', 'BSCI424', 'BSCI425', 'BSCI413', 'BSCI430', 'BSCI432', 'BSCI433', 'BSCI437', 'BSCI442', 'BSCI443', 'BSCI446', 'BSCI447', 'BSCI450', 'BSCI451', 'BSCI452', 'BSCI454'];
const BSCI_ECOLOGY = ['BSCI333', 'BSCI334', 'BSCI335', 'BSCI337', 'BSCI360', 'BSCI361', 'BSCI363', 'BSCI364', 'BSCI373', 'BSCI392', 'BSCI393', 'BSCI401', 'BSCI403', 'BSCI460', 'BSCI462', 'BSCI464', 'BSCI465', 'BSCI467', 'BSCI473', 'BSCI480', 'BSCI481', 'BSCI483', 'BSCI494'];

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
  {
    id: 'psyc-ba-2026',
    major: 'Psychology',
    degree: 'BA',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/behavioral-social-sciences/psychology/psychology-major/',
    crossChecked: 'https://psyc.umd.edu/undergraduate/psyc-courses-psyc-syllabi',
    verified: VERIFIED_SEP,
    minGrade: 'C-',
    rules: [
      ...university(),
      { type: 'all_of', label: 'Psychology core', courses: ['PSYC100', 'PSYC200', 'PSYC300'], pool: 'major' },
      { type: 'one_of', label: 'Calculus (MATH120 or MATH140)', courses: ['MATH120', 'MATH140'], pool: 'major' },
      { type: 'all_of', label: 'Biological science (BSCI170)', courses: ['BSCI170'], pool: 'major' },
      // The remaining 25 credits are drawn from the themes, which is why the
      // pool is the three lists rather than the PSYC prefix: the core above is
      // not allowed to pay for them twice.
      { type: 'credits', label: 'Further psychology coursework (25 credits)', credits: 25, courses: [...PSYC_MIND_BRAIN, ...PSYC_MENTAL_HEALTH, ...PSYC_SOCIAL_DEV], pool: 'major' },
      // "Minimum two courses from each of three thematic areas." Each theme is
      // its own rule because `distribute` caps a group rather than flooring it.
      // None of them spend: this is the same coursework as the 25 credits
      // above, counted a second way.
      { type: 'n_of', label: 'Theme: Mind, Brain and Behavior (two courses)', n: 2, courses: PSYC_MIND_BRAIN, consumes: false, pool: 'major' },
      { type: 'n_of', label: 'Theme: Mental Health and Interventions (two courses)', n: 2, courses: PSYC_MENTAL_HEALTH, consumes: false, pool: 'major' },
      { type: 'n_of', label: 'Theme: Social, Developmental and Organizational (two courses)', n: 2, courses: PSYC_SOCIAL_DEV, consumes: false, pool: 'major' },
      { type: 'one_of', label: 'One theme course must be multicultural', courses: PSYC_MULTICULTURAL, consumes: false, pool: 'major' },
      { type: 'n_of', label: 'Two PSYC courses at the 400 level', n: 2, prefixes: ['PSYC'], minLevel: 400, consumes: false, pool: 'major' },
      // Two rules the catalog states that this cannot check, so it does not
      // pretend to: one theme course must be a 4-credit lab, and PSYC100 needs
      // a B- rather than the C- that applies everywhere else. Which courses are
      // labs is not in any machine-readable source, and the schema carries one
      // minimum grade per major rather than one per course.
      ...genEd(),
    ],
  },
  {
    id: 'ccjs-ba-2026',
    major: 'Criminology and Criminal Justice',
    degree: 'BA',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/behavioral-social-sciences/criminology-criminal-justice/criminology-criminal-justice-major/',
    verified: VERIFIED_SEP,
    minGrade: 'C-',
    rules: [
      ...university(),
      { type: 'gpa', label: 'Major GPA', minimum: 2.0, prefixes: ['CCJS'] },
      { type: 'all_of', label: 'Criminology core', courses: ['CCJS100', 'CCJS105', 'CCJS200', 'CCJS230', 'CCJS300'], pool: 'major' },
      { type: 'n_of', label: 'Criminal justice (two of policing, courts, corrections)', n: 2, courses: ['CCJS340', 'CCJS345', 'CCJS342'], pool: 'major' },
      { type: 'one_of', label: 'Criminological theory', courses: ['CCJS450', 'CCJS451', 'CCJS454'], pool: 'major' },
      { type: 'credits', label: 'CCJS courses of choice (12 credits)', credits: 12, prefixes: ['CCJS'], pool: 'major' },
      { type: 'n_of', label: 'Two courses of choice at the 400 level', n: 2, prefixes: ['CCJS'], minLevel: 400, consumes: false, pool: 'major' },
      // "A calculus class may be substituted", so the calculus options are
      // listed alongside the two the catalog names first.
      { type: 'one_of', label: 'Statistics or calculus', courses: ['MATH107', 'STAT100', 'MATH120', 'MATH130', 'MATH140'], pool: 'major' },
      ...genEd(),
    ],
  },
  {
    id: 'econ-ba-2026',
    major: 'Economics',
    degree: 'BA',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/behavioral-social-sciences/economics/economics-major/',
    verified: VERIFIED_SEP,
    minGrade: 'C-',
    rules: [
      ...university(),
      { type: 'gpa', label: 'Major GPA', minimum: 2.0, prefixes: ['ECON'] },
      { type: 'all_of', label: 'Economics foundation', courses: ['ECON200', 'ECON201', 'ECON305', 'ECON306'], pool: 'major' },
      { type: 'one_of', label: 'Calculus (MATH120 or MATH140)', courses: ['MATH120', 'MATH140'], pool: 'major' },
      { type: 'one_of', label: 'Statistics (ECON230 or BMGT230)', courses: ['ECON230', 'BMGT230'], pool: 'major' },
      { type: 'one_of', label: 'Quantitative economics course', courses: ['ECON402', 'ECON414', 'ECON424', 'ECON425', 'ECON426'], pool: 'major' },
      // The catalog qualifies these with "designated for the B.A."; which
      // courses carry that designation is not published, so the level is
      // checked and the designation is not.
      { type: 'credits', label: 'Two upper-level ECON courses (designation not checked)', credits: 6, prefixes: ['ECON'], minLevel: 300, pool: 'major' },
      { type: 'credits', label: 'Three ECON courses at the 400 level (designation not checked)', credits: 9, prefixes: ['ECON'], minLevel: 400, pool: 'major' },
      { type: 'credits', label: 'Experiential learning or a further upper-level ECON course', credits: 3, prefixes: ['ECON'], minLevel: 300, pool: 'major' },
      ...genEd(),
    ],
  },
  {
    id: 'bsci-bs-2026',
    major: 'Biological Sciences',
    degree: 'BS',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/computer-mathematical-natural-sciences/biological-sciences/',
    verified: VERIFIED_SEP,
    minGrade: 'C-',
    rules: [
      ...university(),
      { type: 'gpa', label: 'Major GPA', minimum: 2.0, prefixes: ['BSCI', 'BCHM'] },
      { type: 'all_of', label: 'Biology basic program', courses: ['BSCI170', 'BSCI160', 'BSCI207', 'BSCI222'], pool: 'major' },
      // "Beginning in Fall 2026, BSCI161 and BSCI171 will be replaced with
      // BSCI180", so all three satisfy this during the changeover.
      { type: 'one_of', label: 'Principles of biology laboratory', courses: ['BSCI180', 'BSCI171', 'BSCI161'], pool: 'major' },
      // The catalog gives three acceptable two-course sequences rather than a
      // single pair, which the schema cannot express; the credit total is
      // checked and the particular pairing is not.
      { type: 'credits', label: 'Mathematics, eight credits (sequence not checked)', credits: 8, prefixes: ['MATH'], pool: 'major' },
      { type: 'all_of', label: 'Chemistry', courses: ['CHEM131', 'CHEM132', 'CHEM231', 'CHEM232', 'CHEM241', 'CHEM242', 'CHEM271', 'CHEM272'], pool: 'major' },
      { type: 'one_of', label: 'Physics I (PHYS131 or PHYS141)', courses: ['PHYS131', 'PHYS141'], pool: 'major' },
      { type: 'one_of', label: 'Physics II (PHYS132 or PHYS142)', courses: ['PHYS132', 'PHYS142'], pool: 'major' },
      { type: 'one_of', label: 'Biochemistry (BCHM461 or BCHM463)', courses: ['BCHM461', 'BCHM463'], pool: 'major' },
      { type: 'one_of', label: 'Quantitative course', courses: ['BIOM301', 'BSCI374', 'STAT400', 'STAT464', 'MATH240'], pool: 'major' },
      { type: 'one_of', label: 'Area: Genetics and Evolution', courses: BSCI_GENETICS, pool: 'major' },
      { type: 'one_of', label: 'Area: Cell Biology, Development and Physiology', courses: BSCI_CELL, pool: 'major' },
      { type: 'one_of', label: 'Area: Ecology, Behavior and Organismal', courses: BSCI_ECOLOGY, pool: 'major' },
      // The advanced program also requires two 300/400-level lab courses. Which
      // courses are labs is not in any machine-readable source, so that part is
      // not checked.
      { type: 'credits', label: 'Advanced program, 27 credits (two-lab rule not checked)', credits: 27, prefixes: ['BSCI', 'BCHM', 'BIOM'], minLevel: 300, consumes: false, pool: 'advanced' },
      ...genEd(),
    ],
  },
  {
    id: 'gvpt-ba-2026',
    major: 'Government and Politics',
    degree: 'BA',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/behavioral-social-sciences/government-politics/government-politics-major/',
    verified: VERIFIED_SEP,
    minGrade: 'C-',
    rules: [
      ...university(),
      { type: 'all_of', label: 'Government and Politics core', courses: ['GVPT170', 'GVPT241', 'GVPT201'], pool: 'major' },
      { type: 'one_of', label: 'Statistics or mathematics', courses: ['STAT100', 'MATH107', 'MATH113', 'MATH115', 'MATH120', 'MATH135', 'MATH136', 'MATH140'], pool: 'major' },
      { type: 'credits', label: 'GVPT courses of choice (9 credits, any level)', credits: 9, prefixes: ['GVPT'], pool: 'major' },
      { type: 'credits', label: 'GVPT at the 300-400 level (18 credits)', credits: 18, prefixes: ['GVPT'], minLevel: 300, pool: 'major' },
      { type: 'all_of', label: 'Microeconomics (ECON200)', courses: ['ECON200'], pool: 'major' },
      // The skills requirement also asks for elementary foreign language and
      // two further approved-list courses. The catalog defers those lists to
      // the department, which does not publish them, so they are left out
      // rather than approximated.
      ...genEd(),
    ],
  },
  {
    id: 'enme-bs-2026',
    major: 'Mechanical Engineering',
    degree: 'BS',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/engineering/mechanical-engineering/mechanical-engineering-major/',
    crossChecked: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/engineering/',
    verified: VERIFIED_SEP,
    minGrade: 'C-',
    rules: [
      ...university(),
      // This major's catalog page carries no requirements table, only a
      // four-year plan of study. These are transcribed from that plan, so they
      // are what a student is shown rather than a separate rule list.
      { type: 'all_of', label: 'Mechanical engineering core', courses: ['ENME202', 'ENME272', 'ENME331', 'ENME332', 'ENME350', 'ENME351', 'ENME361', 'ENME371', 'ENME382', 'ENME392', 'ENME400', 'ENME462', 'ENME472'], pool: 'major' },
      { type: 'all_of', label: 'Engineering science', courses: ['ENES100', 'ENES102', 'ENES220', 'ENES221', 'ENES232'], pool: 'major' },
      { type: 'one_of', label: 'Engineering ethics (ENES200 or ENEE200)', courses: ['ENES200', 'ENEE200'], pool: 'major' },
      { type: 'all_of', label: 'Mathematics', courses: ['MATH140', 'MATH141', 'MATH241', 'MATH246'], pool: 'major' },
      { type: 'all_of', label: 'Physics', courses: ['PHYS161', 'PHYS260', 'PHYS261', 'PHYS270', 'PHYS271'], pool: 'major' },
      { type: 'all_of', label: 'Chemistry (CHEM135)', courses: ['CHEM135'], pool: 'major' },
      // The catalog lists sample elective *topics*, not course ids, so there is
      // no approved list to check against.
      { type: 'credits', label: 'Technical electives, 15 credits (approved list not published)', credits: 15, prefixes: ['ENME'], minLevel: 300, consumes: false, pool: 'technical' },
      ...genEd(),
    ],
  },
  {
    id: 'comm-ba-2026',
    major: 'Communication',
    degree: 'BA',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/arts-humanities/communication/communication-major/',
    verified: VERIFIED_SEP,
    // No minimum grade: unlike every other major here, neither the catalog page
    // nor the department page states one, and inventing a C- would fail people
    // for a rule nobody published.
    rules: [
      ...university(),
      { type: 'one_of', label: 'Oral communication', courses: ['COMM107', 'COMM200', 'COMM230'], pool: 'major' },
      { type: 'all_of', label: 'Communication core', courses: ['COMM250', 'COMM130'], pool: 'major' },
      { type: 'one_of', label: 'Statistics', courses: ['BMGT230', 'STAT100', 'QMMS251', 'CCJS200', 'PSYC200', 'SOCY201'], pool: 'major' },
      // Five specializations exist. This is Communication Studies, the general
      // one; the others pin a different theory course and swap the elective
      // block for named lists.
      { type: 'n_of', label: 'Theory and principles (two courses)', n: 2, courses: ['COMM201', 'COMM301', 'COMM302', 'COMM303'], pool: 'major' },
      { type: 'all_of', label: 'Research methods (COMM304)', courses: ['COMM304'], pool: 'major' },
      { type: 'one_of', label: 'Second research methods course', courses: ['COMM305', 'COMM306', 'COMM307'], pool: 'major' },
      { type: 'one_of', label: 'Leadership and social change', courses: ['COMM330', 'COMM385', 'COMM420', 'COMM421', 'COMM422', 'COMM424', 'COMM425', 'COMM428', 'COMM436', 'COMM448', 'COMM449', 'COMM455', 'COMM459', 'COMM461', 'COMM462', 'COMM469', 'COMM470', 'COMM475'], pool: 'major' },
      { type: 'one_of', label: 'Diversity and inclusion', courses: ['COMM324', 'COMM360', 'COMM382', 'COMM454', 'COMM460'], pool: 'major' },
      { type: 'one_of', label: 'Applied communication', courses: ['COMM311', 'COMM386', 'COMM388'], pool: 'major' },
      { type: 'one_of', label: 'Second applied course', courses: ['COMM311', 'COMM330', 'COMM331', 'COMM370', 'COMM371', 'COMM375', 'COMM386', 'COMM388', 'COMM425', 'COMM426', 'COMM455'], pool: 'major' },
      { type: 'credits', label: 'Upper-level COMM electives (12 credits)', credits: 12, prefixes: ['COMM'], minLevel: 300, pool: 'major' },
      ...genEd(),
    ],
  },
  {
    id: 'knes-bs-2026',
    major: 'Kinesiology',
    degree: 'BS',
    source: 'https://academiccatalog.umd.edu/undergraduate/colleges-schools/public-health/kinesiology/kinesiology-major/',
    verified: VERIFIED_SEP,
    minGrade: 'C-',
    rules: [
      ...university(),
      { type: 'all_of', label: 'Supporting science', courses: ['BSCI170', 'BSCI201', 'BSCI202'], pool: 'major' },
      { type: 'one_of', label: 'Principles of biology laboratory', courses: ['BSCI180', 'BSCI171'], pool: 'major' },
      { type: 'one_of', label: 'Mathematics (MATH113 or higher)', courses: ['MATH113', 'MATH115', 'MATH120', 'MATH130', 'MATH135', 'MATH136', 'MATH140', 'MATH141'], pool: 'major' },
      // The catalog asks for a "MATH/STAT Statistics Course" without naming one.
      { type: 'credits', label: 'Statistics course (catalog names none specifically)', credits: 3, prefixes: ['STAT'], pool: 'major' },
      { type: 'all_of', label: 'Foundation', courses: ['SPHL100', 'KNES200'], pool: 'major' },
      { type: 'all_of', label: 'Kinesiology core', courses: ['KNES285', 'KNES287', 'KNES300', 'KNES350', 'KNES360', 'KNES370', 'KNES385'], pool: 'major' },
      // The option list is not in the catalog and the page it points at is
      // gone, so the level is checked and membership of the list is not.
      { type: 'credits', label: 'Upper-level KNES options, 15 credits (approved list not published)', credits: 15, prefixes: ['KNES'], minLevel: 300, pool: 'major' },
      // Four physical-activity courses are also required. That list is not
      // published anywhere reachable, so it is not checked at all.
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
    lastVerified: major.verified ?? VERIFIED,
    ...(major.minGrade ? { minGrade: major.minGrade } : {}),
    rules: major.rules,
  };
  writeFileSync(join(OUT, `${major.id}.json`), `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`${major.id}: ${major.rules.length} rules`);
}
