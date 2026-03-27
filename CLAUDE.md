# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`@mitchallen/uptime` — an npm package that returns `process.uptime()` formatted as an `HH:MM:SS` string. Single exported method: `toHHMMSS()`.

## Commands

- **Install:** `npm install`
- **Test (lint + tests):** `npm test` — runs Grunt (jshint + doc generation) then Mocha
- **Lint only:** `npx grunt jshint`
- **Test only (skip lint):** `npx mocha --recursive --timeout 20000`
- **Coverage:** `npm run coverage` (Istanbul)
- **Generate API docs:** `npx grunt build-doc` (writes `DOC-API.md` from JSDoc in `src/`)

## Architecture

- **`src/index.js`** — entire module; exports `toHHMMSS()`
- **`test/smoke-test.js`** — Mocha/Chai tests using `chai-match` for regex assertions
- **`Gruntfile.js`** — build pipeline: jshint linting, jsdoc-to-markdown doc gen, version bumping (`grunt-bump`), npm publish tasks
- **CI:** CircleCI 2.0 (`.circleci/config.yml`) — runs `yarn install`, `yarn test`, coverage upload to Codecov

## Build Notes

- Grunt `default` task runs `upcoming:patch` then `build` (jshint + doc gen). This runs automatically as part of `npm test`.
- `DOC-API.md` is auto-generated — edit JSDoc comments in `src/`, not the markdown file directly.
- Publishing tasks (`grunt publish`, `grunt pubminor`, `grunt pubmajor`) handle version bump, tag, and npm publish in sequence.
