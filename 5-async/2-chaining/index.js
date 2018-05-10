(function() {
  'use strict';

  const asyncGreetings = new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 500);
  });

  function toUpperCase(str) {
    return str.toUpperCase();
  }
  function reverse(str) {
    return str.split('').reverse().join('');
  }
  function display(str) {
    console.log(str);
  }

  /*
  =============================================================================================
  👉 Implement functions above
  👉 From `asyncGreetings` promise, apply above functions to display "!DLROW ,OLLEH" in console
  👉 Do not modify `asyncGreetings`
  =============================================================================================
  */

  asyncGreetings
    .then(hello => toUpperCase(hello))
    .then(hello2 => reverse(hello2))
    .then(hello3 => display(hello3));

}());
