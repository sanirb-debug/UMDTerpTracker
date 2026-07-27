# TerpTracker — spec and roadmap

A UMD student drops in their unofficial transcript PDF and gets: their GPA
broken down by term, a planner that says what grades they need next, and
(later) a degree audit.

## The three decisions this is built on

1. **Parse in the browser. No backend, no database, no accounts.** A transcript
   is an education record. "This never leaves your device" is what makes people
   willing to upload one, it sidesteps FERPA entirely, and it makes hosting
   free. Everything is `pdfjs-dist` client-side and `localStorage`.

2. **Requirements data is the project, not the code.** Parsing a PDF and doing
   GPA math is a weekend each. UMD has 100+ majors whose requirements live as
   prose in the catalog, versioned by year, published as structured data by
   nobody. Student projects like this die doing manual data entry. Two ways
   around it:
   - **Gen Ed is free.** umd.io tags every course with its `gen_ed` categories,
     so Gen Ed progress computes for every student with zero hand-authoring —
     and it is what students are most confused about anyway.
   - **Major requirements: hand-author one major.** Get it exactly right
     against the official audit, then decide whether a second is worth it.

3. **Build the GPA planner before any audit logic.** It needs no requirements
   data, and it is the part nobody else does well. The reverse solver is the
   real feature: not "you need a 3.42 average" but "an A in CMSC351 and a B in
   MATH240 — 38% of people get that A." The number isn't the advice.

## Verification loop

The transcript prints its own cumulative GPA. Compute the GPA from the parsed
rows and compare against `statedCumulativeGpa`; a mismatch is a parse bug, not
a transcript bug. This runs on every fixture in CI and surfaces in the UI as a
warning banner. It is what lets parser work be checked without eyeballing
tables.

## Phases

| Phase | Scope | Status |
|---|---|---|
| 1 | Transcript parser, GPA dashboard, GPA planner with reverse solver | **done** |
| 2 | Gen Ed progress from cached umd.io `gen_ed` tags | not started |
| 3 | One hand-authored major (CMSC BS), audit engine over the rule schema | not started |
| 4 | Second major, catalog-year switching | not started |

## Data model

`lib/types.ts` is the single source of truth. In outline:

- `Transcript` → `terms[]`, `nonGpaCredits[]` (transfer/exam), `inProgress[]`,
  `statedCumulativeGpa`, `warnings[]`
- `Term` → `courses[]`, `statedTermGpa`, `statedTermCredits`
- `CourseEntry` → `courseId`, `credits` (attempted — the GPA weight),
  `creditsEarned?`, `grade`, `gradePoints`, `countsTowardGpa`, `source`

`countsTowardGpa` is where every exclusion lives: `P S W I AU NG`, transfer and
exam credit, and repeat-excluded attempts. Anything downstream can then treat
the GPA as a plain weighted average.

## Parser pipeline

```
PDF bytes
  → extractTextPages()   pdfjs-dist; the only module that imports it
  → groupIntoLines()     y coordinates → table rows
  → rows.ts              row text → course / transfer / registered entries
  → parseTranscriptLines()  section state machine → Transcript
  → withSelfCheck()      computed GPA vs. stated GPA
```

A Testudo unofficial transcript is a browser print-to-PDF of a fixed-width
page, laid out in banner-delimited sections: transfer credit, then historic
(graded) coursework by term, then current registration.

**Rows are positional; columns are not.** Measured on a real transcript, the
gap between a course title and its grade is 5.9pt against a character width of
5.87pt — one space. There is no geometric signal there, and pdf.js emits the
whole row as one text run. So `groupIntoLines` recovers rows from y
coordinates, and `rows.ts` recovers columns by anchoring on the parts of a row
that cannot be confused: the course id, the grade token, and the two-decimal
credit figures. The title absorbs whatever sits between.

Fixtures are stored as fixed-width **text**, not PDFs, and converted to
positioned text items by `fixtures/support/layout.ts`. A checked-in PDF is
opaque: you cannot see what changed in a diff and you cannot hand-edit one to
reproduce a bug.

Fixture column positions mirror a real Testudo PDF, but **the student data in
them is invented**. Committing a real transcript would publish somebody's
education record, and this repo is public. Verify parser changes against a real
PDF locally — the stated-GPA self-check tells you whether it worked — and keep
the fixture synthetic.

## Requirements JSON schema (phase 3)

One file per major per catalog year: `data/requirements/cmsc-bs-2025.json`.
Every file carries `source` (catalog URL) and `lastVerified` (date).

```jsonc
{
  "id": "cmsc-bs-2025",
  "major": "Computer Science",
  "degree": "BS",
  "catalogYear": 2025,
  "source": "https://academiccatalog.umd.edu/...",
  "lastVerified": "2026-07-27",
  "rules": [
    { "type": "all_of", "label": "Lower-level core", "courses": ["CMSC131", "CMSC132", "CMSC216", "CMSC250"] },
    { "type": "n_of",   "label": "Upper-level electives", "n": 4, "courses": ["CMSC414", "CMSC420", "..."] },
    { "type": "one_of", "label": "Capstone", "courses": ["CMSC434", "CMSC435"] },
    { "type": "credits","label": "Total degree credits", "credits": 120 }
  ]
}
```

Only these four rule types. If a real requirement does not fit, ask before
extending the schema — the schema staying small is what keeps the evaluator
sane.

## Non-goals

- OCR. A scanned transcript fails loudly and tells the student to download the
  PDF from Testudo instead.
- Runtime calls to umd.io or PlanetTerp. Both are cached to static JSON at
  build time by `tools/fetch-*.mjs`.
- Storing anything identifying. The parser does not read the student's name or
  UID, so there is nothing to leak from `localStorage`.
