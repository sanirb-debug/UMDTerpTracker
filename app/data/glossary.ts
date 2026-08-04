/**
 * Plain-language definitions for everything this app puts on screen.
 *
 * The audience is a student who has never read a degree audit before. Two
 * rules held throughout:
 *
 * 1. No jargon explained with more jargon. "Distributive Studies" is not an
 *    explanation of DSHS; "one of the eight subject areas every UMD student
 *    has to cover, whatever their major" is.
 * 2. Anything that is a claim about UMD's rules carries a link to where UMD
 *    says it. Definitions written from memory are how a confident, wrong app
 *    gets built.
 */

export interface Term {
  /** Short heading shown when the explainer is opened. */
  title: string;
  /** One or two sentences. Written for somebody in their first semester. */
  body: string;
  /** Where UMD states this, when it is UMD's rule rather than ours. */
  source?: { label: string; url: string };
}

const GENED_SOURCE = {
  label: 'UMD General Education requirements',
  url: 'https://academiccatalog.umd.edu/undergraduate/general-education-requirements/',
};

export const GLOSSARY = {
  // ---------------------------------------------------------------- GPA ----
  cumulativeGpa: {
    title: 'Cumulative GPA',
    body: 'The average of every graded course you have taken at UMD, weighted by how many credits each course is worth. A 4-credit course moves it more than a 1-credit one. Transfer and AP credit are not in it.',
  },
  transcriptSays: {
    title: 'Transcript says',
    body: 'The GPA printed on your own transcript. We recompute yours from the individual course rows and show both, so if our reading of the PDF went wrong anywhere, the two numbers disagree and you can see it rather than trusting a wrong one.',
  },
  creditsEarned: {
    title: 'Credits earned',
    body: 'Every credit you have actually completed, including transfer and AP credit. This is the number that counts toward the 120 you need to graduate.',
  },
  gpaCredits: {
    title: 'GPA credits',
    body: 'The subset of your credits that actually affect your GPA — UMD coursework with a letter grade. It is lower than credits earned because transfer credit, AP credit and Pass/Fail courses give you credit without a grade.',
  },
  qualityPoints: {
    title: 'Quality points',
    body: 'Credits multiplied by the grade value — an A in a 3-credit course is 4.0 × 3 = 12 quality points. Your GPA is total quality points divided by total GPA credits. This is the arithmetic your transcript is doing in its right-hand columns.',
  },

  // ------------------------------------------------------------ progress ----
  creditsTowardDegree: {
    title: 'Credits toward a degree',
    body: 'UMD requires at least 120 credits for a bachelor’s degree, and your major may require more. This bar counts credits only — it does not know whether they are the right credits for your major. The Requirements tab is what checks that.',
    source: {
      label: 'UMD undergraduate degree requirements',
      url: 'https://academiccatalog.umd.edu/undergraduate/registration-academic-requirements-regulations/undergraduate-degree-requirements/',
    },
  },
  inProgress: {
    title: 'In progress',
    body: 'Courses you are registered for but have not been graded in yet. They count toward the credits you are on track to have, but not toward your GPA or your earned credits, because they have not happened yet.',
  },

  // --------------------------------------------------------------- audit ----
  degreeAudit: {
    title: 'What a degree audit is',
    body: 'A checklist of everything standing between you and graduating: your major’s courses, the university’s general requirements, and General Education. It matches courses you have taken against each rule and shows what is left. This one is unofficial — the registrar’s is the one that counts.',
  },
  noAuditAvailable: {
    title: 'Why some majors have no audit',
    body: 'Every major’s requirements have to be copied out of the catalog by hand, one at a time, and only some have been done. Rather than guess at yours and show you a confident wrong answer, the app says it does not know. Your GPA, schedule and planner all still work.',
  },
  genEd: {
    title: 'General Education (GenEd)',
    body: 'The courses every UMD undergraduate takes regardless of major — writing, maths, a lab science, humanities, and so on. Roughly 40 credits of your degree. Each one has a four-letter code, and many courses count for two categories at once.',
    source: GENED_SOURCE,
  },
  consumed: {
    title: 'Why a course only counts once',
    body: 'A course can satisfy one requirement, not several. If CMSC351 is used to fill your major’s algorithms requirement, it is no longer available to fill an elective slot too. That is why finishing one requirement can make another look emptier.',
  },
  inProgressCounts: {
    title: '"In progress" on a requirement',
    body: 'A requirement shown as covered by in-progress work is not finished — it is finished if you pass. The audit says so separately from what you have actually completed.',
  },

  // ------------------------------------------------------------- planner ----
  targetGpa: {
    title: 'Target GPA',
    body: 'The cumulative GPA you are aiming for. The planner works backwards from it: given what you have already earned and the courses you are about to take, it tells you what those courses have to average.',
  },
  neededAverage: {
    title: 'The average you need',
    body: 'What your planned courses have to average for your cumulative GPA to reach the target. Because your existing credits are already locked in, the more credits you have, the harder your GPA is to move — which is why a target can be out of reach in one semester even if it is not out of reach overall.',
  },
  projectedGpa: {
    title: 'Projected GPA',
    body: 'What your cumulative GPA becomes if you get exactly the grades you have picked. It updates as you change them.',
  },
  gradeOdds: {
    title: '"X% get that or better"',
    body: 'Out of everyone who has taken this course at UMD before, the share who finished with at least that grade, from PlanetTerp’s historical grade data. It describes past students in past semesters, not your chances — a different professor, a different exam and your own preparation all move it.',
    source: { label: 'PlanetTerp', url: 'https://planetterp.com/' },
  },
  combinedOdds: {
    title: 'Combined odds',
    body: 'The historical rates for each course multiplied together. That assumes your courses go independently of each other, which is optimistic — a bad semester tends to be bad across the board. Treat it as a way to rank the options, not a forecast.',
  },

  // ------------------------------------------------------------ schedule ----
  professorGpa: {
    title: 'Average GPA with a professor',
    body: 'The average grade students received from that professor in that specific course, from PlanetTerp. A high average can mean generous grading or a well-taught section, and the data cannot tell you which.',
    source: { label: 'PlanetTerp', url: 'https://planetterp.com/' },
  },
  rating: {
    title: 'PlanetTerp rating',
    body: 'A student-submitted score out of 5. Ratings with few reviews are pulled toward the average here, so one enthusiastic review does not outrank a professor with a hundred good ones.',
    source: { label: 'PlanetTerp', url: 'https://planetterp.com/' },
  },
  selfCheck: {
    title: 'How this page checks itself',
    body: 'Your transcript prints its own GPA. The app recomputes it from the rows it read and compares. If they disagree, something was misread, and you get a warning instead of a wrong number presented as fact.',
  },
} as const satisfies Record<string, Term>;

export type GlossaryKey = keyof typeof GLOSSARY;

/**
 * The General Education codes, with the names UMD gives them.
 *
 * These appear on the transcript as bare four-letter codes with no key, which
 * is a reasonable thing to be confused by.
 */
export const GENED_CODES: Record<string, string> = {
  FSAW: 'Academic Writing',
  FSPW: 'Professional Writing',
  FSMA: 'Mathematics',
  FSAR: 'Analytic Reasoning',
  FSOC: 'Oral Communication',
  DSHS: 'History and Social Sciences',
  DSHU: 'Humanities',
  DSNS: 'Natural Sciences',
  DSNL: 'Natural Sciences with a lab',
  DSSP: 'Scholarship in Practice',
  DVUP: 'Understanding Plural Societies',
  DVCC: 'Cultural Competence',
  SCIS: 'Big Question / I-Series',
};

export function describeGenEd(code: string): string | undefined {
  return GENED_CODES[code.toUpperCase()];
}
