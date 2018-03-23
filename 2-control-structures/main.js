/**
 * This function should return the greater number between a and b
 */
const greaterNum = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

/**
 * This function should return "Hello World" translated in a given language code:
 * - fr (french)
 * - es (spanish)
 * - en (english)
 * It should return "Hello World" (english) if no language was passed as an argument
 */
const helloWorld = lang => {
  switch (lang) {
    case 'fr':
      return 'Bonjour le monde';
    case 'es':
      return 'Hola Mundo';
    case 'en':
    default:
      return 'Hello World';
  }
};

/**
 * This function should return a grade between 'A' and 'E' according to a given score:
 * - A: score between 20 and 17
 * - B: score between 16 and 13
 * - C: score between 12 and 9
 * - D: score between 8 and 4
 * - E: score between 3 and 0
 */
const grade = score => {
  if (score > 16) {
    return 'A';
  } else if (score > 12) {
    return 'B';
  } else if (score > 8) {
    return 'C';
  } else if (score > 3) {
    return 'D';
  }
  return 'E';
};

/**
 * This function should return the three given numbers a, b and c as a string, in ASC order
 */
const sort = (a, b, c) => {
  if (a < b && a < c) {
    if (b < c) {
      return `${a}, ${b}, ${c}`;
    }
    return `${a}, ${c}, ${b}`;
  } else if (b < a && b < c) {
    if (a < c) {
      return `${b}, ${a}, ${c}`;
    }
    return `${b}, ${c}, ${a}`;
  } else if (c < a && c < b) {
    if (a < b) {
      return `${c}, ${a}, ${b}`;
    }
    return `${c}, ${b}, ${a}`;
  }
};

/**
 * This function should return the sum of a given list of numbers
 */
const sum = numbers => {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
};

/**
 * This function should only return the given names that have more than 3 characters, as a string
 */
const filterNames = names => {
  let result = '';
  for (let i in names) {
    if (names[i].length > 3) {
      result += names[i];
      if (i < names.length - 1) {
        result += ', ';
      }
    }
  }
  return result;
};

module.exports = {
  greaterNum,
  helloWorld,
  grade,
  sort,
  sum,
  filterNames
};
