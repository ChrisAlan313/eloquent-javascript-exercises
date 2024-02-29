'use strict'
// Exercise: Make a triange of #'s. Must be 7 tall and 7 wide at the base.

/**
 * triangleIter takes a number (n) and a string (n) and loops over it, 
 * outputting a triangle.
 * @param {number} n - The line height of this triangle.
 * @param {string} str - The string that will represent each "block".
 */
function triangleIter(n, str) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += str.repeat(i + 1) + '\n';
  }

  return result;
}

console.log(triangleIter(7, '#'))
