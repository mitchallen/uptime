.PHONY: help test coverage pack-check clean-all

.DEFAULT_GOAL := help

help: ## Show available targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-14s %s\n", $$1, $$2}'

test: ## Run tests
	npm test

coverage: ## Run tests with coverage
	npm run coverage

pack-check: ## Fail if the packed tarball would ship unexpected files
	node scripts/check-pack.js

clean-all: ## Remove stray local artifacts
	rm -rf node_modules coverage package-lock.json *.tgz
