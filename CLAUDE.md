# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`@mitchallen/uptime` — an npm package that returns `process.uptime()` formatted as an `HH:MM:SS` string. Single exported method: `toHHMMSS()`. Published to GitHub Packages (`publishConfig.registry = https://npm.pkg.github.com`), not npmjs.

## Commands

- **Install:** `make install` / `npm install`
- **Test:** `make test` / `npm test` (Mocha)
- **Coverage:** `make coverage` / `npm run coverage` (c8, fails unless statements/branches/functions/lines are all 100%)
- **Tarball check:** `make pack-check` — fails if `npm pack` would ship anything outside the `files` allowlist

## Architecture

- **`src/index.js`** — entire module; exports `toHHMMSS()`
- **`test/smoke-test.js`** — Mocha/Chai tests using `chai-match` for regex assertions
- **`scripts/check-pack.js`** — the pack-check script
- **CI:** GitHub Actions. `.github/workflows/ci.yml` runs the tests under the 100% coverage gate, then pack-check, on pushes and PRs to `main`. `.github/workflows/publish.yml` publishes to GitHub Packages when a `v*` tag is pushed, after checking that the tag matches `package.json`. Coverage stays internal (no Codecov); the README's coverage badge is a static 100% badge, which the CI gate keeps honest.

## Build Notes

- API docs live in `README.md`; update them by hand if the API changes.
- Release: bump `version` in `package.json`, commit, tag `vX.Y.Z`, push the tag.
