# TerpTracker

Web app: UMD student uploads their unofficial transcript PDF → degree audit, GPA
dashboard, and a "what grades do I need" planner.

Full spec and roadmap: `SPEC.md`. Read it before planning any feature.

## Commands

```bash
npm run dev         # local dev
npm run build       # must pass before anything is "done"
npm run typecheck   # must pass before anything is "done"
npm test            # vitest
npm test -- parser  # parser tests only
```

## Architecture rules

- **Everything is client-side. There is no backend and no database.** The
  transcript must never leave the browser. Do not add API routes that receive
  transcript data, do not add analytics that could capture parsed content, do not
  suggest a "save to cloud" feature.
- **`lib/` is pure TypeScript — no React imports.** Parser, audit engine, and
  planner are plain functions over plain data. If a change requires importing
  React into `lib/`, the design is wrong.
- Persist user state to `localStorage` only.

## Layout

```
lib/parser/    PDF → Transcript
lib/audit/     Transcript + Requirements → AuditResult
lib/planner/   GPA scenario + target solver
data/requirements/   hand-authored major requirements JSON (see SPEC.md schema)
fixtures/      redacted transcripts + expected parse output
```

## Parser conventions

- Uses `pdfjs-dist` text extraction. Text items carry x/y coordinates — use
  positional data to reconstruct table **rows**, don't regex a flat text blob.
- **Columns are not recoverable from geometry.** Testudo prints the transcript
  as fixed-width text, and on a real PDF the gap between the course title and
  the grade measures 5.9pt against a 5.87pt character width — one space. pdf.js
  hands the whole row over as a single text run. So rows come from y
  coordinates and columns come from row-text shape: anchor on the course id,
  the grade token and the `0.00` decimals, and let the title absorb the middle.
  See `lib/parser/rows.ts`.
- Every fixture in `fixtures/` pairs a fixed-width `transcript.txt` with the
  expected-output JSON. Column positions must match a real Testudo PDF, but the
  student data must not be real — never commit anyone's actual grades. Add a
  new fixture for every parsing bug found.
- **Self-check:** the transcript prints its own cumulative GPA. Computed GPA must
  match `statedCumulativeGpa`. Mismatch = parse bug, surface it as a UI warning.
- Grades excluded from GPA: `P S W I AU`, plus all transfer/AP credit.

## Requirements data conventions

- One JSON file per major per catalog year: `data/requirements/cmsc-bs-2025.json`
- Every file carries `source` (catalog URL) and `lastVerified` (date).
- Only these rule types: `all_of`, `n_of`, `one_of`, `credits`. If a real
  requirement doesn't fit, ask before extending the schema — the schema staying
  small is what keeps the evaluator sane.

## Gotchas

- Course data comes from `api.umd.io`. It's student-run and may be down or stale.
  Cache it to a static JSON file at build time; never call it on page load.
- PlanetTerp API is community-run. Rate-limit politely, cache responses.
- Never hardcode a course's credits or Gen Ed tags — read from cached umd.io data.
- Scanned/image PDFs have no extractable text. Detect and fail loudly.

## Definition of done

`npm run typecheck && npm run build && npm test` all pass. For parser work, that
includes every fixture. Don't report a task complete without running these.

## Pushing is not shipping

`main` is not what the site serves. GitHub Pages serves the `gh-pages` branch,
which only changes when somebody runs:

```bash
npm run deploy      # builds, then pushes dist/ to gh-pages
```

There is no CI that does this — the token lacks `workflow` scope, so
`tools/deploy-pages.sh` stands in for a workflow. A commit on `main` therefore
changes nothing the user can see.

This has already gone wrong once: eight commits, including the entire demo-mode
sample chooser, sat on `main` while the live site served a build from before any
of them existed. Every session reported "pushed to main" and every one of them
was true and useless.

**So: when a change is meant to be visible, deploy it and check the deployed
URL, not localhost.** If a change is not meant to be visible yet, say so
explicitly rather than leaving it ambiguous.
