import type { Line } from './lines.ts';
import { allLines } from './lines.ts';
import type { TextPage } from './textItems.ts';
import type { CourseEntry, CreditSource, ParseWarning, Season, Term, Transcript } from '../types.ts';
import { looksLikeCourse, readHistoricCourse, readRegisteredCourse, readTransferCourse } from './rows.ts';

/**
 * `Fall 2025`, `Summer I 2026`. Summer runs in two sessions and the transcript
 * numbers them, so the numeral is part of the term's identity.
 */
const TERM_HEADER = /^(Fall|Spring|Summer|Winter)(?:\s+(I{1,2}))?\s+(\d{4})\b/i;

// Section markers. Testudo prints each as its own banner line.
const TRANSFER_SECTION = /\*\*\s*Transfer\s+Credit\s+Information/i;
const HISTORIC_SECTION = /\bHistoric\s+Course\s+Information/i;
const CURRENT_SECTION = /\*\*\s*Current\s+Course\s+Information/i;

/** Sub-headers inside the transfer block naming where the credit came from. */
const EXAM_SOURCE = /^(Advanced\s+Placement|AP\s+Exam|International\s+Baccalaureate|IB\s+Exam|CLEP)/i;
const SCHOOL_SOURCE = /\b(College|University|Institute|School|Academy)\b/i;

const SEMESTER_TOTALS =
  /^Semester:\s*Attempted\s+([\d.]+);\s*Earned\s+([\d.]+);\s*QPoints\s+([\d.]+);\s*GPA\s+([\d.]+)/i;
/** Running institution totals: attempted; earned; quality points; GPA. */
const CUMULATIVE_ROW = /^UG\s+Cumulative:\s*([\d.]+);\s*([\d.]+);\s*([\d.]+);\s*([\d.]+)/i;
/** Final totals, which unlike the running rows include transfer credit. */
const CUMULATIVE_CREDIT = /^UG\s+Cumulative\s+Credit\s*:\s*([\d.]+)/i;
const CUMULATIVE_GPA = /^UG\s+Cumulative\s+GPA\s*:\s*([\d.]+)/i;

const MAJOR = /^Major\s*:\s*(.+)$/i;
const SEPARATOR = /^[=\s]+$/;

type Section = 'header' | 'transfer' | 'historic' | 'current';

function readTermHeader(line: string): { season: Season; session?: string; year: number } | null {
  const match = TERM_HEADER.exec(line);
  if (!match) return null;
  const season = match[1]!;
  const term = {
    season: (season.charAt(0).toUpperCase() + season.slice(1).toLowerCase()) as Season,
    year: Number(match[3]),
  } as { season: Season; session?: string; year: number };
  if (match[2]) term.session = match[2].toUpperCase();
  return term;
}

/**
 * Turn reconstructed lines into a `Transcript`.
 *
 * A Testudo transcript is a sequence of banner-delimited sections — transfer
 * credit, then historic (graded) coursework broken into terms, then current
 * registration — so this walks the lines once, tracking which section it is in
 * and which row shape to expect there.
 *
 * Rows are only read inside a known section. Before the first banner there is
 * only the student's name, email and UID, which this deliberately never reads.
 */
export function parseTranscriptLines(lines: Line[]): Transcript {
  const warnings: ParseWarning[] = [];
  const terms: Term[] = [];
  const nonGpaCredits: CourseEntry[] = [];
  const inProgress: CourseEntry[] = [];

  let section: Section = 'header';
  let transferSource: CreditSource = 'transfer';
  let term: Term | null = null;
  let statedCumulativeGpa: number | null = null;
  let statedCumulativeCredits: number | null = null;
  let major: string | undefined;

  for (const line of lines) {
    const text = line.text;
    if (!text || SEPARATOR.test(text)) continue;

    // --- section banners ----------------------------------------------------
    if (TRANSFER_SECTION.test(text)) {
      section = 'transfer';
      term = null;
      continue;
    }
    if (HISTORIC_SECTION.test(text)) {
      section = 'historic';
      term = null;
      continue;
    }
    if (CURRENT_SECTION.test(text)) {
      section = 'current';
      term = null;
      continue;
    }

    if (section === 'header') {
      major ??= MAJOR.exec(text)?.[1]?.trim();
      continue;
    }

    // --- totals -------------------------------------------------------------
    const semester = SEMESTER_TOTALS.exec(text);
    if (semester) {
      if (term) {
        term.statedTermCredits = Number(semester[2]);
        term.statedTermGpa = Number(semester[4]);
      }
      continue;
    }
    // The running rows are institution-only; the final `UG Cumulative Credit`
    // line adds transfer on top. Both write here and the last one wins, which
    // is the order they appear in.
    const running = CUMULATIVE_ROW.exec(text);
    if (running) {
      statedCumulativeCredits = Number(running[2]);
      statedCumulativeGpa = Number(running[4]);
      continue;
    }
    const cumulativeCredit = CUMULATIVE_CREDIT.exec(text);
    if (cumulativeCredit) {
      statedCumulativeCredits = Number(cumulativeCredit[1]);
      continue;
    }
    const cumulativeGpa = CUMULATIVE_GPA.exec(text);
    if (cumulativeGpa) {
      statedCumulativeGpa = Number(cumulativeGpa[1]);
      continue;
    }

    // --- term headings ------------------------------------------------------
    const heading = readTermHeader(text);
    if (heading) {
      if (section === 'historic') {
        term = {
          id: `${heading.year}-${heading.season}${heading.session ? ` ${heading.session}` : ''}`,
          season: heading.season,
          year: heading.year,
          courses: [],
          statedTermGpa: null,
          statedTermCredits: null,
        };
        if (heading.session) term.session = heading.session;
        terms.push(term);
      } else {
        term = null;
      }
      continue;
    }

    // --- rows ---------------------------------------------------------------
    if (section === 'transfer') {
      // Sub-headers name the institution the following rows came from.
      if (EXAM_SOURCE.test(text)) {
        transferSource = 'exam';
        continue;
      }
      if (SCHOOL_SOURCE.test(text) && !/\d\.\d{2}/.test(text)) {
        transferSource = 'transfer';
        continue;
      }
      const entry = readTransferCourse(text, transferSource);
      if (entry) nonGpaCredits.push(entry);
      continue;
    }

    if (section === 'current') {
      const registered = readRegisteredCourse(text);
      if (registered && !registered.dropped) inProgress.push(registered.entry);
      continue;
    }

    const course = readHistoricCourse(text);
    if (course) {
      if (term) {
        term.courses.push(course);
      } else {
        warnings.push({
          code: 'unparsed_line',
          message: `${course.courseId} was not under any term heading.`,
          page: line.page,
        });
      }
      continue;
    }

    if (looksLikeCourse(text)) {
      warnings.push({
        code: 'unparsed_line',
        message: 'A row looked like a course but could not be read.',
        page: line.page,
        detail: text,
      });
    }
  }

  if (terms.length === 0) {
    warnings.push({
      code: 'no_terms_found',
      message: 'No semesters were found in this PDF. It may not be a UMD transcript.',
    });
  }
  if (statedCumulativeGpa === null) {
    warnings.push({
      code: 'missing_stated_gpa',
      message:
        'The transcript did not print a cumulative GPA, so the parse could not be checked against it.',
    });
  }

  return {
    major,
    terms,
    nonGpaCredits,
    inProgress,
    statedCumulativeGpa,
    statedCumulativeCredits,
    warnings,
  };
}

/** Convenience wrapper over the positional pipeline. */
export function parseTranscriptPages(pages: TextPage[]): Transcript {
  return parseTranscriptLines(allLines(pages));
}
