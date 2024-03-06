// Exercise: Write a fizzbuzz program

/**
 * fizzbuzz takes a range of numbers and iterates over them. For each number,
 * in the range, the number is returned except in two cases.
 * 1. if divisible by 3, "Fizz"
 * 2. if divisible by 5, "Buzz"
 * 3. if both, "FizzBuzz"
 *
 * @param {number} low - This is the inclusive starting point of the range.
 * @param {number} high - This is the exclusive end point of the range.
 * @returns {string} This is one long string containing all the output with
 * newlines separating each iteration.
 */
function fizzbuzz(low, high) {
  let result = '';
  for (let i = low; i < high; i += 1) {
    if (i % 15 === 0) {
      result += 'FizzBuzz\n';
    } else if (i % 3 === 0) {
      result += 'Fizz\n';
    } else if (i % 5 === 0) {
      result += 'Buzz\n';
    } else {
      result += `${i}\n`;
    }
  }
  return result;
}

console.log(fizzbuzz(1, 101));
