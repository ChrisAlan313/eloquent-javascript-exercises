'use strict'
// Exercise:
//
// 1. Create a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up to and
// including the end.
// 2. Create a sum function that takes an array of numbers and returns the sum
// of these numbers.
// 3. Modify the range function to take an optional third argument which serves
// as a "step" value. ie. range(1, 10, 2) -> [1, 3, 5, 7, 9]

/**
 * range takes three arguments, start, end and optionally step, and returns an
 * array of numbers within that range. If step was given, then those numbers
 * will start with the "start" and increment per step amount.
 *
 * @param {number} start - This is the inclusive start of the range.
 * @param {number} end - This is the inclusive end of the range.
 * @param {number} step - This is the amount by which each next element is
 * incremented by. If none is provided, then this defaults to 1.
 * @returns {number[]} An array of some length containing numbers.
 */
function range(start, end, step = 1) {
  const result = [];

  validateRange(start, end, step);

  // Determine the "direction"
  let predicate;
  if (step > 0) {
    // step is positive, so the while loop needs to check for less than or
    // equal to the end.
    predicate = (i) => i <= end;
  } else {
    // step is negative, so the while loop needs to check for greater than or
    // equal to the end.
    predicate = (i) => i >= end;
  }

  // Build the returned array
  for (let i = start; predicate(i); i += step) {
    result.push(i);
  }

  return result;
}

console.log(range(1, 10))
console.log(range(1, 10, 2))
console.log(range(10, 1, -1))

/**
 * sum takes an array of numbers and returns the sum of those numbers.
 *
 * @param {number[]} numbers - This is an array of numbers.
 * @returns {number} The sum of all the numbers in the array passed in as an
 * argument.
 */
function sum(numbers) {
  console.log(numbers)
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(range(1, 10)))


function validateRange(start, end, step) {
  // Guard against cases where end is "behind" start
  if (step > 0 && start > end) {
    throw Error("Start must be less than end if step is positive");
  }
  if (step < 0 && start < end) {
    throw Error("Start must be greater than end if step is negative");
  }
  // Guard against case where there is no iteration
  if (step === 0) {
    throw Error("Step must not be 0");
  }
}
