# js-playground-crwd

Learn how to handle JavaScript functions, control structures and arrays

## Requirements

- Node v8+ (https://github.com/creationix/nvm)
- npm / yarn (`npm install -g yarn`)
- A code editor (Visual Studio Code, Atom, ...)

## Install

With a terminal, go to `js-playground-crwd/` folder and run, to install dependencies:

- `yarn` or `npm install`

## Assignments

1. Implement the functions in `1-functions/main.js` so that **ALL** unit tests in `1-functions/main.test.js` pass.
2. Implement the functions in `2-control-structures/main.js` so that **ALL** unit tests in `2-control-structures/main.test.js` pass.
3. Implement the functions in `3-arrays/main.js` so that **ALL** unit tests in `3-arrays/main.test.js` pass.

## Instructions

- Go to `js-playground-crwd/` with your terminal
- To execute unit tests in `1-functions/`, run:
  - `yarn test:1 --watch` (or `npm run test:1 -- --watch`)
- To execute unit tests in `2-control-structures/` run:
  - `yarn test:2 --watch` (or `npm run test:2 -- --watch`)
- To execute unit tests in `3-arrays/` run:
  - `yarn test:3 --watch` (or `npm run test:3 -- --watch`)

Only the first tests of each suite are active. Once they pass, activate the next ones by replacing `xit` with `it`. Repeat until all tests pass.
