# js-playground-crwd

Learn how to handle JavaScript functions and control structures

## Requirements

- Node v8+ (https://github.com/creationix/nvm)
- yarn (`npm install -g yarn`)
- A code editor (Visual Studio Code, Atom, ...)

## Install

With a terminal, go to `js-playground-crwd/` folder and run:

```bash
yarn # install dependencies
```

## Assignments

1. Implement the functions in `1-functions/main.js` so that **ALL** unit tests in `1-functions/main.test.js` pass.
2. Implement the functions in `2-control-structures/main.js` so that **ALL** unit tests in `2-control-structures/main.test.js` pass.

## Instructions

- To execute unit tests in `1-functions/`, you need to go to `js-playground-crwd/` with your terminal and run `yarn test:1 --watch`. Only the first test is active. Once it passes, activate the next one by replacing `xit` with `it`. Repeat until all tests pass.
- To execute unit tests in `2-control-structures/`, run `yarn test:2 --watch` (again in `js-playground-crwd/`). Apply the same process until all unit tests pass.

