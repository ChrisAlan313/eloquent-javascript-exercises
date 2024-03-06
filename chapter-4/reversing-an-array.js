/* eslint-disable no-param-reassign */
/**
 * Exercise: Define two functions, reverseArray and reverseArrayInPlace.
 */

/**
 * reverseArray takes an array and returns a new array with the same elements in
 * reverse order.
 *
 * @param {any[]} array - This is the array that will be reversed.
 * @returns {any[]} This is a new array which is the reverse of the one passed
 * in.
 */
function reverseArray(array) {
  const result = [];
  for (let i = array.length - 1; i > -1; i -= 1) {
    result.push(array[i]);
  }
  return result;
}

console.log(reverseArray([0, 1, 2, 3, 4]));

/**
 * reverseArrayInPlace takes an array and reverses that array without creating a
 * new one.
 *
 * @param {any[]} array - This is the array that will be reversed.
 */
function reverseArrayInPlace(array) {
  for (let i = array.length - 1, j = 0; i > j; i -= 1, j += 1) {
    const thirdSpace = array[i];
    array[i] = array[j];
    array[j] = thirdSpace;
  }
}

const arr = [0, 1, 2, 3, 4];
reverseArrayInPlace(arr);
console.log(arr);
const arr2 = [0, 1, 2, 3, 4, 5];
reverseArrayInPlace(arr2);
console.log(arr2);
