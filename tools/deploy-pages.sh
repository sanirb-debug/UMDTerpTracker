#!/usr/bin/env bash
#
# Publish dist/ to the gh-pages branch, which is what GitHub Pages serves.
#
# Run it with `npm run deploy` — that builds first. This script assumes dist/
# is already current and does not build on its own.
#
# This exists because the personal access token in remote.origin.url only has
# `repo` scope, not `workflow`, so it cannot push a GitHub Actions workflow.
# Once the token gains `workflow` scope this whole script goes away in favour
# of .github/workflows/deploy.yml, which also runs the tests before shipping.
set -euo pipefail

cd "$(dirname "$0")/.."

if [ ! -f dist/index.html ]; then
  echo "dist/index.html is missing — run 'npm run build' first." >&2
  exit 1
fi

WORKTREE=.deploy-gh-pages
SHA=$(git rev-parse --short HEAD)

cleanup() {
  git worktree remove "$WORKTREE" --force 2>/dev/null || true
}
trap cleanup EXIT

cleanup
rm -rf "$WORKTREE"

git fetch origin gh-pages --quiet 2>/dev/null || true
if git rev-parse --verify --quiet origin/gh-pages >/dev/null; then
  git worktree add -B gh-pages "$WORKTREE" origin/gh-pages --quiet
else
  # First deploy: start the branch with no history from main.
  git worktree add --detach "$WORKTREE" --quiet
  git -C "$WORKTREE" checkout --orphan gh-pages --quiet
fi

# Wipe the old build rather than layering over it, so deleted assets go away.
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist/. "$WORKTREE"/

# Without this, Pages runs the output through Jekyll and drops _-prefixed files.
touch "$WORKTREE/.nojekyll"

git -C "$WORKTREE" add -A
if git -C "$WORKTREE" diff --cached --quiet; then
  echo "gh-pages already matches this build; nothing to deploy."
  exit 0
fi

git -C "$WORKTREE" commit -q -m "Deploy ${SHA}"
git -C "$WORKTREE" push -u origin gh-pages --quiet
echo "Deployed ${SHA} → https://sanirb-debug.github.io/UMDTerpTracker/"
