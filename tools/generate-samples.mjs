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

/** `['CMSC131', 'A-', 'FSAR']` → a course row. */
const parseSpec = ([id, grade, genEd]) => ({ id, grade, genEd, credits: creditsFor(id) });

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
      ['2308', 'CALCULUS AB/SCR 4', 'P', 'MATH120', 'FSMA'],
      ['', 'PSYCHOLOGY/SCR 5', 'P', 'PSYC100', 'DSHS'],
    ],
    semesters: [
      [['INST126', 'A-'], ['ENGL101', 'B', 'FSAW'], ['HIST200', 'A-', 'DSHS'], ['SOCY100', 'B+', 'DSHS'], ['AMST101', 'A', 'DSHU']],
      [['INST201', 'A', 'DSHS'], ['STAT100', 'B+', 'FSAR'], ['COMM107', 'A', 'FSOC'], ['AMST203', 'A-', 'DSHU, DVUP'], ['ECON200', 'B', 'DSHS']],
      [['INST311', 'B+'], ['INST314', 'B'], ['ENGL393', 'A', 'FSPW'], ['BSCI170', 'B+', 'DSNS'], ['BSCI171', 'A', 'DSNL'], ['MATH121', 'W']],
      [['INST326', 'A-'], ['INST327', 'A', 'DSSP'], ['GVPT170', 'B+', 'DSHS'], ['AMST205', 'A-', 'DSHU'], ['SOCY241', 'B', 'DSHS, DVCC']],
      [['INST335', 'A-'], ['INST346', 'B+'], ['INST366', 'A', 'SCIS'], ['AOSC200', 'B+', 'DSNS, SCIS'], ['ENES210', 'A-', 'DSSP']],
      [['INST352', 'A'], ['INST362', 'A-'], ['INST354', 'B+'], ['INST341', 'A-'], ['ECON201', 'B', 'DSHS']],
      [['INST466', 'A-'], ['INST377', 'B+'], ['BMGT220', 'A'], ['PSYC221', 'A-'], ['ENGL222', 'B+'], ['GVPT200', 'A-']],
      [['INST490', 'B+'], ['BMGT230', 'A-'], ['SOCY230', 'B+'], ['HIST111', 'A'], ['MATH121', 'B']],
    ],
  },
  'computer-science': {
    major: 'Computer Science',
    transfer: [
      ['2308', 'CALCULUS AB/SCR 5', 'P', 'MATH140', 'FSMA'],
      ['', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101', 'FSAW'],
    ],
    semesters: [
      [['CMSC131', 'A-', 'FSAR'], ['MATH141', 'B+'], ['HIST200', 'A-', 'DSHS'], ['SOCY100', 'B', 'DSHS'], ['AMST203', 'A', 'DSHU, DVUP']],
      [['CMSC132', 'A'], ['CMSC250', 'B+'], ['MATH240', 'B'], ['COMM107', 'A', 'FSOC'], ['AMST205', 'A-', 'DSHU']],
      [['CMSC216', 'B+'], ['MATH241', 'B'], ['BSCI170', 'B+', 'DSNS'], ['BSCI171', 'A', 'DSNL'], ['ENGL393', 'A', 'FSPW']],
      [['CMSC330', 'A-'], ['CMSC351', 'B'], ['STAT400', 'B+'], ['AOSC200', 'B+', 'DSNS, SCIS'], ['SOCY241', 'B', 'DSHS, DVCC']],
      [['CMSC411', 'B+'], ['CMSC420', 'A-'], ['ENES210', 'A', 'DSSP, SCIS'], ['ECON300', 'B'], ['GVPT170', 'A-', 'DSHS']],
      [['CMSC421', 'B'], ['CMSC451', 'B+'], ['CMSC434', 'A-', 'DSSP'], ['ECON305', 'B+'], ['ECON306', 'B']],
      [['CMSC430', 'A-'], ['ECON330', 'B+'], ['PSYC100', 'A', 'DSHS'], ['ENGL222', 'B+'], ['GVPT200', 'A-']],
      [['CMSC417', 'A'], ['MATH246', 'B'], ['HIST111', 'A-'], ['SOCY105', 'B+'], ['BMGT110', 'A']],
    ],
  },
  management: {
    major: 'Management',
    transfer: [
      ['2308', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101', 'FSAW'],
      ['', 'PSYCHOLOGY/SCR 4', 'P', 'PSYC100', 'DSHS'],
    ],
    semesters: [
      [['BMGT110', 'A', 'DSSP'], ['MATH120', 'B+', 'FSMA'], ['ECON200', 'B', 'DSHS'], ['AMST203', 'A-', 'DSHU, DVUP'], ['COMM107', 'A', 'FSOC']],
      [['BMGT220', 'B+'], ['ECON201', 'B', 'DSHS'], ['BMGT230', 'A-', 'FSAR'], ['HIST200', 'B+', 'DSHS, SCIS'], ['AMST205', 'A', 'DSHU']],
      [['BMGT221', 'B'], ['BMGT301', 'B+'], ['BSCI170', 'B', 'DSNS'], ['BSCI171', 'A-', 'DSNL'], ['ENGL393', 'A', 'FSPW']],
      [['BMGT340', 'B+'], ['BMGT350', 'A-'], ['AOSC200', 'B+', 'DSNS, SCIS'], ['SOCY241', 'B', 'DSHS, DVCC'], ['BMGT364', 'A', 'DSSP']],
      [['BMGT363', 'A-'], ['BMGT380', 'B+'], ['BMGT360', 'A'], ['GVPT170', 'B+', 'DSHS'], ['SOCY100', 'A-', 'DSHS']],
      [['BMGT362', 'B+'], ['BMGT366', 'A-'], ['BMGT461', 'B'], ['ENGL222', 'B+'], ['HIST111', 'A-']],
      [['BMGT463', 'A-'], ['BMGT495', 'B+'], ['BMGT466', 'B'], ['PSYC221', 'A-'], ['GVPT200', 'B+']],
      [['BMGT332', 'A'], ['ECON230', 'B+'], ['SOCY105', 'A-'], ['AMST101', 'B+'], ['COMM200', 'A']],
    ],
  },
  finance: {
    major: 'Finance',
    transfer: [
      ['2308', 'CALCULUS AB/SCR 4', 'P', 'MATH120', 'FSMA'],
      ['', 'ENG LANG/COMP/SCR 4', 'P', 'ENGL101', 'FSAW'],
    ],
    semesters: [
      [['BMGT110', 'A-', 'DSSP'], ['ECON200', 'A', 'DSHS'], ['AMST203', 'B+', 'DSHU, DVUP'], ['COMM107', 'A-', 'FSOC'], ['SOCY100', 'B', 'DSHS']],
      [['BMGT220', 'A'], ['ECON201', 'B+', 'DSHS'], ['BMGT230', 'A-', 'FSAR'], ['HIST200', 'B', 'DSHS, SCIS'], ['AMST205', 'A-', 'DSHU']],
      [['BMGT221', 'B+'], ['BMGT301', 'A-'], ['BSCI170', 'B', 'DSNS'], ['BSCI171', 'A', 'DSNL'], ['ENGL393', 'A-', 'FSPW']],
      [['BMGT340', 'A-'], ['ECON305', 'B+'], ['AOSC200', 'B', 'DSNS, SCIS'], ['SOCY241', 'B+', 'DSHS, DVCC'], ['BMGT364', 'A-', 'DSSP']],
      [['BMGT343', 'B+'], ['BMGT310', 'A-'], ['BMGT341', 'B'], ['GVPT170', 'A-', 'DSHS'], ['ENGL234', 'B+']],
      [['BMGT440', 'B'], ['BMGT347', 'B+'], ['BMGT441', 'A-'], ['ECON230', 'B'], ['HIST111', 'A-']],
      [['BMGT444', 'B+'], ['BMGT446', 'A-'], ['BMGT350', 'B'], ['SOCY230', 'A-'], ['GVPT200', 'B+']],
      [['BMGT495', 'A-'], ['ECON330', 'B+'], ['AMST101', 'A-'], ['SOCY105', 'B+'], ['COMM200', 'A']],
    ],
  },
  'information-systems': {
    major: 'Information Systems',
    transfer: [
      ['2308', 'CALCULUS AB/SCR 4', 'P', 'MATH120', 'FSMA'],
      ['', 'PSYCHOLOGY/SCR 5', 'P', 'PSYC100', 'DSHS'],
    ],
    semesters: [
      [['BMGT110', 'A', 'DSSP'], ['ENGL101', 'B+', 'FSAW'], ['ECON200', 'A-', 'DSHS'], ['AMST203', 'B+', 'DSHU, DVUP'], ['COMM107', 'A', 'FSOC']],
      [['BMGT220', 'A-'], ['ECON201', 'B+', 'DSHS'], ['BMGT230', 'A', 'FSAR'], ['HIST200', 'B+', 'DSHS, SCIS'], ['AMST101', 'B', 'DSHU']],
      [['BMGT221', 'B+'], ['BMGT302', 'A'], ['BSCI170', 'B+', 'DSNS'], ['BSCI171', 'A-', 'DSNL'], ['ENGL393', 'A', 'FSPW']],
      [['BMGT301', 'A-'], ['BMGT403', 'B+'], ['AOSC200', 'B', 'DSNS, SCIS'], ['SOCY241', 'A-', 'DSHS, DVCC'], ['BMGT364', 'B+', 'DSSP']],
      [['BMGT402', 'A-'], ['BMGT430', 'B+'], ['BMGT340', 'B'], ['GVPT170', 'A-', 'DSHS'], ['SOCY105', 'B+', 'DSHS']],
      [['BMGT407', 'A'], ['BMGT401', 'B+'], ['BMGT350', 'A-'], ['ENGL234', 'B'], ['HIST111', 'B+']],
      [['BMGT484', 'A-'], ['BMGT495', 'B+'], ['BMGT380', 'A-'], ['SOCY230', 'B+'], ['GVPT200', 'A-']],
      [['BMGT485', 'A'], ['ECON230', 'B+'], ['AMST205', 'A-'], ['PSYC221', 'B'], ['COMM200', 'A-']],
    ],
  },
  psychology: {
    major: 'Psychology',
    transfer: [
      ['2308', 'ENG LANG/COMP/SCR 5', 'P', 'ENGL101', 'FSAW'],
      ['', 'CALCULUS AB/SCR 3', 'P', 'MATH120', 'FSMA'],
    ],
    semesters: [
      [['PSYC100', 'A', 'DSHS'], ['SOCY100', 'A-', 'DSHS'], ['AMST203', 'B+', 'DSHU, DVUP'], ['COMM107', 'A', 'FSOC'], ['HIST200', 'B+', 'DSHU']],
      [['PSYC200', 'B+', 'FSAR'], ['PSYC221', 'A-', 'SCIS'], ['BSCI170', 'B', 'DSNS'], ['BSCI171', 'A-', 'DSNL'], ['ENGL393', 'A', 'FSPW']],
      [['PSYC300', 'B'], ['SOCY241', 'B+', 'DSHS, DVCC'], ['AOSC200', 'B+', 'DSNS, SCIS'], ['ENES210', 'A-', 'DSSP'], ['AMST205', 'B+', 'DSHU']],
      [['PSYC336', 'A-'], ['PSYC341', 'B+'], ['GVPT170', 'B', 'DSHS'], ['ECON200', 'B+', 'DSHS'], ['ENGL222', 'A-']],
      [['PSYC353', 'A-', 'DSSP'], ['PSYC355', 'B+'], ['SOCY105', 'A-'], ['HIST111', 'B+'], ['GVPT200', 'B']],
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
  const semesters = plan.semesters.slice(0, snapshot.through + 1).map((spec) => spec.map(parseSpec));
  const registered = plan.semesters[snapshot.registered].map(parseSpec);
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
    ...plan.transfer.map(([term, title, grade, equiv, genEd]) =>
      row([[XFER.term, term], [XFER.title, title], [XFER.grade, grade],
        [XFER.credits, money(creditsFor(equiv))], [XFER.equiv, equiv], [XFER.gened, genEd]]),
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
