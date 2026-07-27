# Major requirements

Empty on purpose. Phase 3 — see [SPEC.md](../../SPEC.md) for the rule schema and
why hand-authoring one major beats trying to cover a hundred.

One file per major per catalog year, named `<major>-<degree>-<year>.json`, e.g.
`cmsc-bs-2025.json`. Every file carries `source` (the catalog URL it was read
from) and `lastVerified` (the date somebody checked it against that page).

Only four rule types: `all_of`, `n_of`, `one_of`, `credits`. If a real
requirement does not fit one of them, ask before extending the schema. A small
schema is what keeps the evaluator sane, and every extension is permanent.
