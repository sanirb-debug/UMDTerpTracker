# TerpTracker

**Live: https://sanirb-debug.github.io/UMDTerpTracker/**

Drop in your UMD unofficial transcript, get your GPA broken down by term and a
planner that tells you what grades you need next.

**The PDF never leaves your browser.** There is no server, no database and no
account — `pdfjs-dist` reads the file in the tab, and the result is kept in
`localStorage` until you clear it.

## Getting started

```bash
npm install
npm run dev
```

Then Testudo → Academics → Unofficial Transcript → save as PDF → drop it in.

## Commands

```bash
npm run dev         # local dev
npm run build       # production build
npm run typecheck   # tsc --noEmit
npm test            # vitest
npm test -- parser  # parser tests only
```

`npm run typecheck && npm run build && npm test` all passing is the definition
of done. For parser work that includes every fixture.

## What is here

```
lib/parser/       PDF → Transcript. Positional row reconstruction, not regex.
lib/planner/      GPA math, scenario projection, and the reverse solver.
lib/schedule.ts   Registered sections → a weekly timetable.
lib/professors.ts Who teaches a course, and how students did with them.
lib/degree.ts     Credits earned, in progress and remaining.
lib/catalog.ts    Cached umd.io catalog: credits and Gen Ed tags.
lib/audit/        Not built yet — see SPEC.md phase 3.
data/cache/       Static umd.io and PlanetTerp caches, refreshed by tools/.
fixtures/         Transcript fixtures with paired expected output.
app/              React UI. Nothing in lib/ imports React.
```

Read [SPEC.md](SPEC.md) before planning a feature — it carries the design
decisions and the phase roadmap.

## The planner

The interesting part. Instead of "you need a 3.42 average", it enumerates the
grade combinations that reach your target, keeps only the *minimal* ones —
where easing any single course by one grade step misses — and ranks them by
how often students actually pull them off, using PlanetTerp grade
distributions:

> **Most likely route** — lands at 3.104
> B+ in CMSC351 · 32% get that or better
> A in MATH246 · 30% get that or better
> A in ENGL393 · 48% get that or better

Combined odds assume courses go independently, which is optimistic. They are a
ranking, not a forecast, and the UI says so.

## The self-check

Your transcript prints its own cumulative GPA. TerpTracker recomputes it from
the rows it parsed and compares. A mismatch means the parser got something
wrong, and the dashboard says so rather than quietly showing you a number that
is off. Every fixture asserts this, so parser regressions fail in CI instead of
in front of a student.

## Refreshing the cached data

Both APIs are run by other people. Nothing calls them at page load.

```bash
node tools/fetch-catalog.mjs INST CMSC MATH  # api.umd.io → courses.json
node tools/fetch-sections.mjs 202601 202605 202608   # api.umd.io → sections.json
node tools/fetch-grades.mjs                  # PlanetTerp → grades.json + professors.json
```

`fetch-grades` is one sequential request per course with a 350ms delay —
several minutes for a dozen departments. Do not raise the rate. It writes two
files from the same responses: course-level distributions for the planner, and
per-professor summaries for the schedule. The professor breakdown is already in
every `/grades` response, so keeping it costs no extra requests.

`fetch-sections` pages through a whole semester at a time rather than asking per
course, and keeps only the departments already in `courses.json` so the bundle
stays a sane size. Semester codes are `YYYYMM`: `01` spring, `05` summer, `08`
fall, `12` winter — and winter belongs to the *previous* year's code, since the
term starts in January.

## Adding a fixture

Fixtures are fixed-width text, not PDFs — you can read them in a diff and edit
them by hand to reproduce a bug.

1. `fixtures/<name>/transcript.txt` — mirror the column positions in
   `fixtures/testudo-standard/transcript.txt`, which were measured off a real
   Testudo PDF.
2. `fixtures/<name>/expected.json` — the `Transcript` it should parse to.
3. `npm test`. The suite picks up new directories automatically and checks the
   parse, the stated-GPA self-check, the stated credit total, and every term
   GPA.

Add one for every parsing bug you find.

**Never commit a real transcript.** Fixture layout is real; fixture data is
invented. This repo is public and a transcript is an education record.
`.gitignore` blocks `*.pdf` so one cannot be added by accident.

To check a parser change against a real transcript, do it locally and let the
self-check be the verdict: if the computed GPA and credit total match what the
transcript prints, the parse is right.

## Deploying

```bash
npm run deploy
```

Builds, then pushes `dist/` to the `gh-pages` branch, which is what GitHub
Pages serves. Because everything runs client-side, static hosting is the whole
deployment story — there is no server to run and nothing to configure.

The site lives at `/UMDTerpTracker/` rather than a domain root, so
`vite.config.ts` sets `base` for production builds only. Dev stays at `/`.

**Run `npm run typecheck && npm test` before deploying.** Nothing enforces it
right now, which is the one weakness of this setup. The fix is a GitHub Actions
workflow that gates the deploy on a green build — it needs the personal access
token in `remote.origin.url` to carry the `workflow` scope, which it currently
does not. Add that scope at github.com/settings/tokens (signed in as
sanirb-debug), `git remote set-url` with the new token, and the workflow can
replace `tools/deploy-pages.sh` entirely.

## Not affiliated with the University of Maryland

Always confirm against your official degree audit before you register.
