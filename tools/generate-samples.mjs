#!/usr/bin/env node
/**
 * Generate the demo transcripts: one fictional Information Science student at
 * four points in a four-year degree.
 *
 * Everything here is invented. No real transcript is involved, not even a
 * redacted one — a PDF carries metadata a redaction does not remove, and this
 * repo is public.
 *
 * ## Why generate fixed-width text rather than Transcript objects
 *
 * The samples are written as the text a Testudo PDF extracts to and then run
 * through the real parser, so the demo exercises row reconstruction, the
 * section state machine and the stated-GPA self-check exactly as an upload
 * does. Hand-writing `Transcript` objects would skip all of that and put the
 * burden of getting `gradePoints` and `countsTowardGpa` right on whoever edits
 * the file next.
 *
 * It also makes the totals self-checking. This script computes every semester
 * and cumulative line from the course rows, and the parser then recomputes
 * them independently and compares. A typo in a grade cannot produce a sample
 * that looks fine.
 *
 *   node tools/generate-samples.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FIXTURES = join(ROOT, 'fixtures');

// Column positions measured off a real Testudo PDF.
const HIST = { id: 0, title: 9, grade: 34, att: 37, earn: 43, qp: 48, gened: 54 };
const XFER = { term: 0, title: 6, grade: 30, credits: 34, equiv: 39, gened: 49 };
const CUR = { id: 0, sec: 8, credits: 13, meth: 19, status: 23, add: 26, drop: 35, gened: 53 };

const POINTS = {
  'A+': 4, A: 4, 'A-': 3.7, 'B+': 3.3, B: 3, 'B-': 2.7,
  'C+': 2.3, C: 2, 'C-': 1.7, 'D+': 1.3, D: 1, 'D-': 0.7, F: 0,
};
/** Marks that earn no credit and never touch the GPA. */
const NO_CREDIT = new Set(['W', 'I', 'AU', 'NG']);

function row(cells) {
  let line = '';
  for (const [col, text] of cells) {
    if (text === undefined || text === '') continue;
    if (line.length > col) throw new Error(`column overflow at ${col}: "${line}" + "${text}"`);
    line = line.padEnd(col) + text;
  }
  return line;
}

const money = (n) => n.toFixed(2);
const gpaStr = (n) => n.toFixed(3);

// --- the student -----------------------------------------------------------

/** AP credit, which carries credits but no quality points. */
const TRANSFER = [
  { term: '2308', title: 'CALCULUS AB/SCR 4', grade: 'P', credits: 3, equiv: 'MATH120', genEd: 'FSMA' },
  { term: '', title: 'PSYCHOLOGY/SCR 5', grade: 'P', credits: 3, equiv: 'PSYC100', genEd: 'DSHS' },
];

const c = (id, title, grade, credits, genEd) => ({ id, title, grade, credits, genEd });

const SEMESTERS = [
  {
    term: 'Fall 2023',
    courses: [
      c('INST126', 'INTRO PROGRAM INFO SCI', 'A-', 3),
      c('ENGL101', 'ACADEMIC WRITING', 'B', 3, 'FSAW'),
      c('HIST200', 'INTERPRET AMER HISTORY', 'A-', 3, 'DSHS'),
      c('SOCY100', 'INTRO TO SOCIOLOGY', 'B+', 3, 'DSHS'),
      c('AMST101', 'INTRO AMERICAN STUDIES', 'A', 3, 'DSHU'),
    ],
  },
  {
    term: 'Spring 2024',
    courses: [
      c('INST201', 'INTRO INFORMATION SCI', 'A', 3, 'DSHS'),
      c('STAT100', 'ELEMENTARY STATISTICS', 'B+', 3, 'FSAR'),
      c('COMM107', 'ORAL COMMUNICATION', 'A', 3, 'FSOC'),
      c('AMST203', 'POP CULTURE IN AMER', 'A-', 3, 'DSHU, DVUP'),
      c('ECON200', 'PRIN MICROECONOMICS', 'B', 3, 'DSHS'),
    ],
  },
  {
    term: 'Fall 2024',
    courses: [
      c('INST311', 'INFORMATION ORGANIZATION', 'B+', 3),
      c('INST314', 'STATISTICS FOR INFO SCI', 'B', 3),
      c('ENGL393', 'TECHNICAL WRITING', 'A', 3, 'FSPW'),
      c('BSCI170', 'PRIN MOLECULAR BIOLOGY', 'B+', 3, 'DSNS'),
      c('BSCI171', 'MOLECULAR BIOLOGY LAB', 'A', 1, 'DSNL'),
      // Withdrawn and retaken in the final term, so the samples exercise a W.
      c('MATH121', 'ELEMENTARY CALCULUS II', 'W', 3),
    ],
  },
  {
    term: 'Spring 2025',
    courses: [
      c('INST326', 'OBJ-ORIENT PROG INFO SCI', 'A-', 3),
      c('INST327', 'DATABASE DESIGN MODELING', 'A', 3, 'DSSP'),
      c('GVPT170', 'AMERICAN GOVERNMENT', 'B+', 3, 'DSHS'),
      c('AMST205', 'MATERIAL ASPECTS AMER', 'A-', 3, 'DSHU'),
      c('SOCY241', 'INEQUALITY AMER SOCIETY', 'B', 3, 'DSHS, DVCC'),
    ],
  },
  {
    term: 'Fall 2025',
    courses: [
      c('INST335', 'ORG MANAGEMENT TEAMWORK', 'A-', 3),
      c('INST346', 'TECH INFRASTRUCTURE ARCH', 'B+', 3),
      c('INST366', 'PRIV SEC ETHICS BIG DATA', 'A', 3, 'SCIS'),
      c('AOSC200', 'WEATHER AND CLIMATE', 'B+', 3, 'DSNS, SCIS'),
      c('ENES210', 'ENTREPRENEURIAL OPPS', 'A-', 3, 'DSSP'),
    ],
  },
  {
    term: 'Spring 2026',
    courses: [
      c('INST352', 'INFO USER NEEDS ASSESS', 'A', 3),
      c('INST362', 'USER-CENTERED DESIGN', 'A-', 3),
      c('INST354', 'DECISION-MAKING INFO SCI', 'B+', 3),
      c('INST341', 'LEGAL ETHICAL ISSUES', 'A-', 3),
      c('ECON201', 'PRIN MACROECONOMICS', 'B', 3, 'DSHS'),
    ],
  },
  {
    term: 'Fall 2026',
    courses: [
      c('INST466', 'TECHNOLOGY CULTURE SOC', 'A-', 3),
      c('INST377', 'DYNAMIC WEB APPLICATIONS', 'B+', 3),
      c('BMGT220', 'PRIN OF ACCOUNTING I', 'A', 3),
      c('PSYC221', 'SOCIAL PSYCHOLOGY', 'A-', 3),
      c('ENGL222', 'AMERICAN LITERATURE', 'B+', 3),
      c('GVPT200', 'INTL POLITICAL RELATIONS', 'A-', 3),
    ],
  },
];

/**
 * What each snapshot is registered for. Section numbers for Fall 2026 are real
 * ones from the cached schedule, so that snapshot renders a full weekly grid;
 * the others are plausible but their terms predate the section cache.
 */
const REGISTRATIONS = {
  'Fall 2024': [
    ['INST311', '0101'], ['INST314', '0201'], ['ENGL393', '0101'],
    ['BSCI170', '0301'], ['BSCI171', '0401'],
  ],
  'Fall 2025': [
    ['INST335', '0101'], ['INST346', '0201'], ['INST366', '0101'],
    ['AOSC200', '0101'], ['ENES210', '0101'],
  ],
  'Fall 2026': [
    ['INST466', '0101'], ['INST377', '0101'], ['BMGT220', '0101'],
    ['PSYC221', '0101'], ['ENGL222', '0301'], ['GVPT200', '0101'],
  ],
  'Spring 2027': [
    ['INST490', '0101'], ['BMGT230', '0101'], ['SOCY230', '0101'],
    ['HIST111', '0101'], ['MATH121', '0201'],
  ],
};

const CREDITS = Object.fromEntries(
  SEMESTERS.flatMap((s) => s.courses.map((course) => [course.id, course.credits])),
);
const EXTRA_CREDITS = { INST490: 3, BMGT230: 3, SOCY230: 3, HIST111: 3, MATH121: 3 };

const SNAPSHOTS = [
  { slug: 'sample-1-freshman', label: 'Freshman', through: 'Spring 2024', registered: 'Fall 2024' },
  { slug: 'sample-2-sophomore', label: 'Sophomore', through: 'Spring 2025', registered: 'Fall 2025' },
  { slug: 'sample-3-junior', label: 'Junior', through: 'Spring 2026', registered: 'Fall 2026' },
  { slug: 'sample-4-senior', label: 'Senior', through: 'Fall 2026', registered: 'Spring 2027' },
];

// --- rendering -------------------------------------------------------------

function totalsFor(courses) {
  let gpaCredits = 0;
  let points = 0;
  let earned = 0;
  for (const course of courses) {
    const grade = POINTS[course.grade];
    if (grade !== undefined) {
      gpaCredits += course.credits;
      points += course.credits * grade;
      if (grade > 0) earned += course.credits;
    } else if (!NO_CREDIT.has(course.grade)) {
      // P and S earn the credit without quality points.
      earned += course.credits;
    }
  }
  return { gpaCredits, points, earned };
}

function courseRow(course) {
  const grade = POINTS[course.grade];
  const earned = grade === undefined ? (NO_CREDIT.has(course.grade) ? 0 : course.credits)
    : grade > 0 ? course.credits : 0;
  const quality = grade === undefined ? 0 : course.credits * grade;
  return row([
    [HIST.id, course.id],
    [HIST.title, course.title],
    [HIST.grade, course.grade],
    [HIST.att, money(course.credits)],
    [HIST.earn, money(earned)],
    [HIST.qp, money(quality)],
    [HIST.gened, course.genEd],
  ]);
}

function build(snapshot) {
  const upto = SEMESTERS.slice(0, SEMESTERS.findIndex((s) => s.term === snapshot.through) + 1);
  const transferCredits = TRANSFER.reduce((sum, t) => sum + t.credits, 0);

  const lines = [
    row([[20, 'UNIVERSITY OF MARYLAND']]),
    row([[24, 'COLLEGE PARK']]),
    row([[20, 'Office of the Registrar']]),
    row([[20, 'College Park, MD 20742']]),
    row([[20, 'UNOFFICIAL TRANSCRIPT']]),
    row([[18, 'FOR ADVISING PURPOSES ONLY']]),
    '',
    // Invented. The parser never reads these and no test asserts on them.
    'Terrapin, Sample T',
    'E-Mail: sample@terpmail.umd.edu',
    'Major: Information Science',
    'Undergraduate Degree Seeking',
    row([[0, 'GenEd Program'], [40, `Current Status: Registered ${snapshot.registered}`]]),
    '',
    'Transcripts received from the following institutions:',
    row([[0, 'Advanced Placement Exam'], [30, 'on 08/15/23']]),
    '',
    row([[0, '** Transfer Credit Information **'], [45, '** Equivalences **']]),
    'Advanced Placement Exam',
    ...TRANSFER.map((t) =>
      row([
        [XFER.term, t.term], [XFER.title, t.title], [XFER.grade, t.grade],
        [XFER.credits, money(t.credits)], [XFER.equiv, t.equiv], [XFER.gened, t.genEd],
      ]),
    ),
    row([[0, 'Acceptable UG Inst. Credits:'], [34, money(transferCredits)]]),
    row([[0, 'Total UG Credits Applicable:'], [34, money(transferCredits)]]),
    '',
    'Historic Course Information is listed in the order:',
    'Course, Title, Grade, Credits Attempted, Earned and Quality Points',
    '',
  ];

  let cumGpaCredits = 0;
  let cumPoints = 0;
  let cumEarned = 0;

  upto.forEach((semester, index) => {
    const { gpaCredits, points, earned } = totalsFor(semester.courses);
    cumGpaCredits += gpaCredits;
    cumPoints += points;
    cumEarned += earned;

    lines.push(semester.term);
    lines.push(row([[0, 'MAJOR: INFORMATION SCIENCE'], [32, 'COLLEGE: INFORMATION']]));
    lines.push(...semester.courses.map(courseRow));
    lines.push(
      row([
        [0, 'Semester:'],
        [14, `Attempted ${money(gpaCredits)}; Earned ${money(earned)}; QPoints ${money(points)}; GPA ${gpaStr(points / gpaCredits)}`],
      ]),
    );
    lines.push(
      row([
        [0, 'UG Cumulative:'], [26, `${money(cumGpaCredits)};`], [35, `${money(cumEarned)};`],
        [45, `${money(cumPoints)};`], [55, gpaStr(cumPoints / cumGpaCredits)],
      ]),
    );
    // Page breaks roughly where a real transcript would take them.
    lines.push(index % 2 === 1 && index < upto.length - 1 ? '\f' : '');
  });

  lines.push(row([[0, 'UG Cumulative Credit'], [30, `: ${money(cumEarned + transferCredits)}`]]));
  lines.push(row([[0, 'UG Cumulative GPA'], [30, ':'], [40, gpaStr(cumPoints / cumGpaCredits)]]));
  lines.push('');
  lines.push('** Current Course Information **');
  lines.push(
    row([[0, `${snapshot.registered} Course`], [20, 'Sec Credits Grd/ Drop'], [50, 'Add'], [60, 'Drop'], [70, 'Modified GenEd']]),
  );
  lines.push(row([[20, 'Meth /Add Date'], [60, 'Date'], [70, 'Date']]));
  lines.push('======== ==== ======= ==== ==== ======== ======== ======== =============');
  for (const [id, section] of REGISTRATIONS[snapshot.registered]) {
    const credits = CREDITS[id] ?? EXTRA_CREDITS[id];
    if (credits === undefined) throw new Error(`no credit count known for ${id}`);
    lines.push(
      row([
        [CUR.id, id], [CUR.sec, section], [CUR.credits, money(credits)],
        [CUR.meth, 'REG'], [CUR.status, 'A'], [CUR.add, '04/01/26'], [CUR.drop, '04/01/26'],
      ]),
    );
  }
  lines.push('');

  return {
    text: lines.join('\n') + '\n',
    expected: {
      cumulativeGpa: Number(gpaStr(cumPoints / cumGpaCredits)),
      gpaCredits: cumGpaCredits,
      earnedCredits: cumEarned + transferCredits,
    },
  };
}

const summary = [];
for (const snapshot of SNAPSHOTS) {
  const { text, expected } = build(snapshot);
  const dir = join(FIXTURES, snapshot.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'transcript.txt'), text);
  summary.push({ label: snapshot.label, slug: snapshot.slug, ...expected });
}

console.table(summary);
console.log('\nRegenerate expected.json for each with tools/expected-from-fixture.mjs');
