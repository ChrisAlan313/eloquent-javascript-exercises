/**
 * Write a higher-order function loop that provides something like a for loop
 * statement. It should take a value, a test function, an update function, and a
 * body function. Each iteration, it should first run the test function on the
 * current loop value and stop if that returns false. It should then call the
 * body function, giving it the current value, then finally call the update
 * function to create a new value and start over from the beginning.
 *
 * When defining the function, you can use a regular loop to do the actual
 * looping.
 */

/**
 * loop takes four arguments:
 *
 * @param {any} value - eg. 3
 * @param {Function} test - eg. n => n > 0
 * @param {Function} update - eg. n => n - 1
 * @param {Function} body - eg. console.log
 */
function recursiveLoop(value, test, update, body) {
  if (!test(value)) return;
  body(value);
  recursiveLoop(update(value), test, update, body);
}
function loopingLoop(value, test, update, body) {
  let v = value;
  while (test(v)) {
    body(v);
    v = update(v);
  }
}

recursiveLoop(3, (n) => n > 0, (n) => n - 1, console.log);
loopingLoop(3, (n) => n > 0, (n) => n - 1, console.log);
