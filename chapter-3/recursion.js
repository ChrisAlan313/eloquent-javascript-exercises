// Exercise: Define a recursive function isEven which takes a positive whole
// number and returns true if even or false if odd. The book outlines in more
// detail specifics, which make the exercise more interesting.

/**
  * isEven takes a positive, whole number and returns true if the number is even or false if
  * the number is odd.
  *
  * @param {number} number - Any positive, whole number.
  */
function isEven(number) {
  // If less than 0, return false. Less than 0 rather than exactly -1 guards
  // against some case where we go past -1.
  if (number < 0) return false;
  // If 0, return true
  if (number === 0) return true;
  // If none of the above, default to calling isEven(number - 2). Eventually,
  // we get to 0 if it's an even number or less than 0 if it isn't even.
  return isEven(number - 2);
}

console.log('"Invalid" cases');
console.log('With -1', isEven(-1));
console.log('With Math.PI', isEven(Math.PI));

console.log('\n"Valid" odd cases');
console.log('With 1', isEven(1));
console.log('With 75', isEven(75));
console.log('With 1533', isEven(1533));

console.log('\n"Valid" even cases');
console.log('With 2', isEven(2));
console.log('With 50', isEven(50));
console.log('With 452', isEven(452));
