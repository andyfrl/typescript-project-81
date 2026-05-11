install:
	npm ci

develop:
	npm run start:dev

.PHONY: build

build:
	npm run build

start:
	npm run start

test:
	npm run test

lint:
	npm run lint

.PHONY: coverage

coverage:
	npm run coverage