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
| 1b | Weekly schedule from registered sections, professor recommendations, credits-to-degree | **done** |
| 3 | One hand-authored major (InfoSci BS), audit engine over the rule schema | **done** |
| 2 | Gen Ed progress from Gen Ed codes the transcript already prints | not started |
| 4 | Second major, catalog-year switching | not started |

Phase 2 should read Gen Ed codes off the **transcript**, not off umd.io. The
transcript prints what UMD actually credited you for (`DSHS`, `FSPW`, `DSSP`)
next to each course, whereas umd.io's `gen_ed` tags are present on only about a
sixth of the cached catalog. The transcript is both more complete and more
authoritative.

Until phase 3 exists, the app can say how many credits are left but not *which
courses* — see `lib/degree.ts`, which is deliberately named for credits rather
than graduation.

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

### The one extension so far: `credits.from`

`credits` takes an optional `from` array scoping it to a pool of courses.
InfoSci needs "15 credits of upper-level INST", and that cannot be an `n_of`:
8 of the 65 eligible courses are 1-credit seminars, so a five-course rule would
be satisfied by 5 credits of them. It stays a `credits` rule rather than a
fifth rule type, and the evaluator change is one filter.

### How a course gets spent

Two behaviours the evaluator has to get right, both learned from real data:

- **Named rules can share a course.** INST201 is listed under both Benchmark II
  and the InfoSci core, and passing it satisfies both. A first version let the
  first rule consume it and reported the core short by a course the student had
  an A in.
- **Credit pools cannot.** A scoped `credits` rule draws only on courses no
  named rule claimed, or the ten core courses would also pay for the fifteen
  elective credits. An unscoped `credits` rule measures the whole transcript
  and consumes nothing — otherwise "total degree credits" reads low by whatever
  the named rules already took.

## Non-goals

- OCR. A scanned transcript fails loudly and tells the student to download the
  PDF from Testudo instead.
- Runtime calls to umd.io or PlanetTerp. Both are cached to static JSON at
  build time by `tools/fetch-*.mjs`.
- Storing anything identifying. The parser does not read the student's name or
  UID, so there is nothing to leak from `localStorage`.
