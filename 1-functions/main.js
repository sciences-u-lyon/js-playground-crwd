/**
 * This function should return "HELLO" if "hello" was passed as an argument.
 */
const uppercase = str => {
  return str.toUpperCase();
};

/**
 * This function should return "Hello has 5 characters" if "Hello" was passed as an argument.
 */
const charCount = str => {
  return `"${str}" has ${str.length} characters`;
};

/**
 * This function should return "Hello Alice!" if "Alice" was passed as an argument.
 * It should return "Hello John!" if no argument was passed.
 * You can't use if / else statements
 */
const greetings = (name = 'John') => {
  return `Hello ${name}!`;
};

/**
 * This function should return the area of a rectangle, given its width and height.
 */
const rectangleArea = (width, height) => {
  return width * height;
};

/**
 * This function should return the area of a circle, given its radius.
 */
const circleArea = radius => {
  return Math.ceil(Math.PI * Math.pow(radius, 2));
};

/**
 * This function should return the volume of a sphere, given its radius.
 */
const sphereVolume = radius => {
  return Math.floor(4 / 3 * Math.PI * Math.pow(radius, 3));
};

module.exports = {
  uppercase,
  charCount,
  greetings,
  rectangleArea,
  circleArea,
  sphereVolume
};
