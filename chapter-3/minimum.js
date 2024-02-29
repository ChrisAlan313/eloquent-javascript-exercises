// Exercise: Create a function that works the same as Math.min, which takes n
// args and returns the number which is smallest.

/**
 * myMin takes any number of number arguments and returns the smallest value.
 *
 * @param {number} num1 - First number in the comparison.
 * @param {number} num2 - Second number in the comparison.
 * @returns {number} The number from the two params which was least.
 */
function myMin(num1, num2) {
  return num1 < num2 ? num1 : num2
}

console.log("From 2 and 4", myMin(2, 4))
console.log("From 8 and 4", myMin(8, 4))
