/**
 * Exercise: Use the reduce method in combination with the concat method to
 * “flatten” an array of arrays into a single array that has all the elements of
 * the original arrays.
 */

/**
 * flatten takes an array of arrays and flattens it into a two dimensional array
 * without losing any of the elements within.
 *
 * @param {any[][]} array - An array of arbitrary length that contains arrays.
 * @returns {any[]} Returns a flat array, while preserving all elements.
 */
function flatten(array) {
  return array.reduce((prev, curr) => prev.concat(curr));
}

const singleArrInArr = [[0, 1, 2]];
console.log(flatten(singleArrInArr));
const doubleArrInArr = [[0, 1], [2]];
console.log(flatten(doubleArrInArr));
