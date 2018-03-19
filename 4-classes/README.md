# 4-classes

Learn how to handle JavaScript classes

## Requirements

- A recent version of Chrome (v61+)

## Usage

With a terminal, go to `js-playground-crwd/` folder and run:

- `yarn serve` or `npm run serve` (starts a development server at http://127.0.0.1:8080/)

## Instructions

### Polygon

- Create a file `Polygon.js` that exports a class `Polygon`
- This class has the following fields:
  - `name` (a string)
  - `width` (a number)
  - `height` (a number)
- `name` has the value `'Polygon'`
- `width` and `height` should be set from `constructor` parameters
- Add an `area` method that returns the area of a `Polygon` (`width` * `height`)
- Add a `toString` method that returns:
  - `'The area of this [name] is [area]'`

### Rectangle

- Create a file `Rectangle.js` that exports a class `Rectangle`
- This class should extends `Polygon`
- Its constructor is defined with `constructor(width, height)`
- Its `name` field has the value `'Rectangle'`

### Square

- Create a file `Square.js` that exports a class `Square`
- This class should extends `Polygon`
- Its constructor is defined with `constructor(length)`
- Its `name` field has the value `'Square'`

### main

- In `main.js`, import `Rectangle` and `Square` classes to create a `rectangle` object and a `square` object
- Display the description of each object (`toString()`) with the `console.log` function
- Check the result in your browser JavaScript console, you should see:
  - The area of this Rectangle is ...
  - The area of this Square is ...
