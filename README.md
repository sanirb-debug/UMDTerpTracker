# TerpTracker

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
lib/parser/     PDF → Transcript. Positional row reconstruction, not regex.
lib/planner/    GPA math, scenario projection, and the reverse solver.
lib/catalog.ts  Cached umd.io catalog: credits and Gen Ed tags.
lib/audit/      Not built yet — see SPEC.md phase 3.
data/cache/     Static umd.io and PlanetTerp caches, refreshed by tools/.
fixtures/       Transcript fixtures with paired expected output.
app/            React UI. Nothing in lib/ imports React.
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
node tools/fetch-catalog.mjs CMSC MATH STAT ENGL   # api.umd.io → data/cache/courses.json
node tools/fetch-grades.mjs                        # PlanetTerp → data/cache/grades.json
```

`fetch-grades` is one sequential request per course with a 350ms delay. It
takes a couple of minutes for four departments. Do not raise the rate.

## Adding a fixture

Fixtures are fixed-width text, not PDFs — you can read them in a diff and edit
them by hand to reproduce a bug.

1. `fixtures/<name>/transcript.txt` — columns separated by **three or more**
   spaces. Two or fewer reads as a word gap and merges, exactly as it does in a
   real extraction.
2. `fixtures/<name>/expected.json` — the `Transcript` it should parse to.
3. `npm test`. The suite picks up new directories automatically and checks the
   parse, the stated-GPA self-check, the stated credit total, and every term
   GPA.

Add one for every parsing bug you find.

To exercise the real pdf.js path end to end — the one part the fixtures cannot
cover, since they start after text extraction — render a fixture to an actual
PDF and drop it into the running app (macOS):

```bash
cupsfilter -t transcript -o cpi=12 -o lpi=8 fixtures/cmsc-standard/transcript.txt > /tmp/sample.pdf
```

## Not affiliated with the University of Maryland

Always confirm against your official degree audit before you register.
