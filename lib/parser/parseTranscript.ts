import type { Line } from './lines.ts';
import { allLines } from './lines.ts';
import type { TextPage } from './textItems.ts';
import type { CourseEntry, CreditSource, ParseWarning, Season, Term, Transcript } from '../types.ts';
import { parseCourseLine } from './courseLine.ts';

const TERM_HEADER =
  /^(?:(Fall|Spring|Summer|Winter)\s+(?:Semester\s+|Term\s+)?(\d{4})|(\d{4})\s+(Fall|Spring|Summer|Winter))\b/i;

const TRANSFER_SECTION =
  /\b(TRANSFER\s+CREDIT|CREDIT\s+ACCEPTED\s+BY|TRANSFER\s+WORK|ADVANCED\s+PLACEMENT|AP\s+CREDIT|IB\s+CREDIT|TEST\s+CREDIT|CREDIT\s+BY\s+EXAM)/i;
const EXAM_SECTION = /\b(ADVANCED\s+PLACEMENT|AP\s+CREDIT|IB\s+CREDIT|TEST\s+CREDIT|CREDIT\s+BY\s+EXAM)/i;
const INSTITUTION_SECTION =
  /\b(INSTITUTION\s+CREDIT|BEGINNING\s+OF\s+(?:UNDERGRADUATE\s+)?RECORD|UNIVERSITY\s+OF\s+MARYLAND\s+RECORD)/i;
const IN_PROGRESS_SECTION = /\b(COURSES?\s+IN\s+PROGRESS|IN\s+PROGRESS\s+WORK|CURRENT\s+REGISTRATION)/i;
const TOTALS_SECTION = /\b(TRANSCRIPT\s+TOTALS|UNDERGRADUATE\s+TOTALS)/i;

const TERM_GPA = /\b(?:TERM|SEMESTER|SEM)\s*(?:GPA|G\.P\.A\.)\b\D{0,4}([0-4](?:\.\d+)?)/i;
const CUM_GPA =
  /\b(?:CUM|CUMULATIVE|OVERALL|TOTAL\s+INSTITUTION)\s*(?:GPA|G\.P\.A\.)\b\D{0,4}([0-4](?:\.\d+)?)/i;
const TERM_CREDITS =
  /\b(?:TERM|SEMESTER|SEM)\s*(?:CREDITS?|HOURS?|HRS)\s*(?:EARNED|PASSED)?\b\D{0,4}(\d+(?:\.\d+)?)/i;
const CUM_CREDITS =
  /\b(?:CUM|CUMULATIVE|OVERALL)\s*(?:CREDITS?|HOURS?|HRS)\s*(?:EARNED|PASSED)?\b\D{0,4}(\d+(?:\.\d+)?)/i;

const ACADEMIC_LEVEL = /\b(Freshman|Sophomore|Junior|Senior|Non-Degree|Graduate)\b/i;
const PROGRAM = /^(?:Program|College)\s*:?\s*(.+)$/i;
const MAJOR = /^(?:Major(?:\s+and\s+Department)?)\s*:?\s*(.+)$/i;

const LOOKS_LIKE_COURSE = /^[A-Z]{4}[-\s]?\d{3}[A-Z]?\b/;

type Section = CreditSource | 'in_progress' | 'totals';

interface ParserState {
  section: Section;
  term: Term | null;
}

function titleCase(value: string): Season {
  const lower = value.toLowerCase();
  return (lower.charAt(0).toUpperCase() + lower.slice(1)) as Season;
}

function readTermHeader(line: Line): { season: Season; year: number } | null {
  const match = TERM_HEADER.exec(line.text);
  if (!match) return null;
  const season = match[1] ?? match[4];
  const year = match[2] ?? match[3];
  if (!season || !year) return null;
  return { season: titleCase(season), year: Number(year) };
}

/**
 * Turn reconstructed lines into a `Transcript`.
 *
 * The shape of a Testudo unofficial transcript is a sequence of sections —
 * transfer credit, then institution credit broken into terms, then transcript
 * totals — so this walks the lines once, tracking which section it is in.
 */
export function parseTranscriptLines(lines: Line[]): Transcript {
  const warnings: ParseWarning[] = [];
  const terms: Term[] = [];
  const nonGpaCredits: CourseEntry[] = [];
  const inProgress: CourseEntry[] = [];

  const state: ParserState = { section: 'institution', term: null };
  let statedCumulativeGpa: number | null = null;
  let statedCumulativeCredits: number | null = null;
  let program: string | undefined;
  let major: string | undefined;

  for (const line of lines) {
    const { text } = line;

    // --- section boundaries -------------------------------------------------
    if (TOTALS_SECTION.test(text)) {
      state.section = 'totals';
      state.term = null;
      continue;
    }
    if (IN_PROGRESS_SECTION.test(text)) {
      state.section = 'in_progress';
      state.term = null;
      continue;
    }
    if (TRANSFER_SECTION.test(text)) {
      state.section = EXAM_SECTION.test(text) ? 'exam' : 'transfer';
      state.term = null;
      continue;
    }
    if (INSTITUTION_SECTION.test(text)) {
      state.section = 'institution';
      state.term = null;
      continue;
    }

    // --- header fields ------------------------------------------------------
    const majorMatch = MAJOR.exec(text);
    if (majorMatch) {
      major ??= majorMatch[1]!.trim();
      continue;
    }
    const programMatch = PROGRAM.exec(text);
    if (programMatch) {
      program ??= programMatch[1]!.trim();
      continue;
    }

    // --- running totals -----------------------------------------------------
    // Cumulative figures are reprinted after every term; the last one wins,
    // which is also the one under TRANSCRIPT TOTALS.
    const cumGpa = CUM_GPA.exec(text);
    if (cumGpa) statedCumulativeGpa = Number(cumGpa[1]);
    const cumCredits = CUM_CREDITS.exec(text);
    if (cumCredits) statedCumulativeCredits = Number(cumCredits[1]);

    if (state.term) {
      const termGpa = TERM_GPA.exec(text);
      if (termGpa) state.term.statedTermGpa = Number(termGpa[1]);
      const termCredits = TERM_CREDITS.exec(text);
      if (termCredits) state.term.statedTermCredits = Number(termCredits[1]);
    }
    if (cumGpa || CUM_CREDITS.test(text) || TERM_GPA.test(text) || TERM_CREDITS.test(text)) {
      continue;
    }

    // --- term headers -------------------------------------------------------
    const header = readTermHeader(line);
    if (header && (state.section === 'institution' || state.section === 'in_progress')) {
      const term: Term = {
        id: `${header.year}-${header.season}`,
        season: header.season,
        year: header.year,
        courses: [],
        statedTermGpa: null,
        statedTermCredits: null,
      };
      const level = ACADEMIC_LEVEL.exec(text);
      if (level) term.academicLevel = level[1];
      if (state.section === 'institution') {
        terms.push(term);
        state.term = term;
      } else {
        state.term = null;
      }
      continue;
    }

    if (state.term && state.term.courses.length === 0 && !state.term.academicLevel) {
      const level = ACADEMIC_LEVEL.exec(text);
      if (level) state.term.academicLevel = level[1];
    }

    // --- course rows --------------------------------------------------------
    if (state.section === 'totals') continue;

    const source: CreditSource = state.section === 'in_progress' ? 'institution' : state.section;
    const { entry, problem } = parseCourseLine(line, source);

    if (!entry) {
      if (problem && LOOKS_LIKE_COURSE.test(text)) {
        warnings.push({
          code: 'unparsed_line',
          message: 'A row looked like a course but could not be read.',
          page: line.page,
          detail: problem,
        });
      }
      continue;
    }

    // A missing grade means "not graded yet" only for institution credit —
    // transfer blocks routinely print no grade at all.
    if (state.section === 'in_progress' || (entry.grade === 'NG' && source === 'institution')) {
      inProgress.push({ ...entry, countsTowardGpa: false });
    } else if (source === 'institution' && state.term) {
      state.term.courses.push(entry);
    } else if (source === 'institution') {
      // A graded course outside any term. Keep it rather than drop it — the
      // GPA self-check is what decides whether that was the right call.
      warnings.push({
        code: 'unparsed_line',
        message: `${entry.courseId} was not under any term heading.`,
        page: line.page,
      });
      nonGpaCredits.push({ ...entry, countsTowardGpa: false });
    } else {
      nonGpaCredits.push({ ...entry, countsTowardGpa: false });
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
    program,
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
