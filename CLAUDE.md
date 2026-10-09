# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`@mitchallen/uptime` — an npm package that returns `process.uptime()` formatted as an `HH:MM:SS` string. Single exported method: `toHHMMSS()`. Published to GitHub Packages (`publishConfig.registry = https://npm.pkg.github.com`), not npmjs.

## Commands

- **Install:** nothing to install — the package has zero dependencies, runtime and dev
- **Test:** `make test` / `npm test` (`node --test`)
- **Coverage:** `make coverage` / `npm run coverage` (Node's built-in coverage; fails unless lines/branches/functions are all 100%; needs Node 22.8+)
- **Tarball check:** `make pack-check` — fails if `npm pack` would ship anything outside the `files` allowlist

## Architecture

- **`src/index.js`** — entire module; exports `toHHMMSS()`
- **`test/smoke.test.js`** — `node:test` + `node:assert/strict` tests
- **`scripts/check-pack.js`** — the pack-check script
- **CI:** GitHub Actions. `.github/workflows/ci.yml` runs the tests under the 100% coverage gate, then pack-check, on pushes and PRs to `main`, with no install step. `.github/workflows/publish.yml` publishes to GitHub Packages when a `v*` tag is pushed, after checking that the tag matches `package.json`. Coverage stays internal (no Codecov); the README's coverage badge is a static 100% badge, which the CI gate keeps honest.

## Build Notes

- **Keep the dev toolchain dependency-free.** Mocha/Chai/c8 were removed because their transitive deps generated a steady stream of Dependabot PRs and advisory `overrides` for a 20-line module. Don't add npm dependencies without a strong reason; if you do, re-add an npm entry to `.github/dependabot.yml` and stop gitignoring `package-lock.json`.
- API docs live in `README.md`; update them by hand if the API changes.
- Release: bump `version` in `package.json`, commit, tag `vX.Y.Z`, push the tag.
