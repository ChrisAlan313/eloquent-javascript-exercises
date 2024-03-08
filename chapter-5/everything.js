/**
 * Exercise: Arrays also have an every method analogous to the some method. This
 * method returns true when the given function returns true for every element in
 * the array. In a way, some is a version of the || operator that acts on
 * arrays, and every is like the && operator.
 *
 * Implement every as a function that takes an array and a predicate function as
 * parameters. Write two versions, one using a loop and one using the some
 * method.
 */

/**
 * loopEvery takes an array and a predicate function. If every element of the
 * array passes the predicate, then the function returns true.
 */
function loopEvery(array, predicate) {
  for (let i = 0; i < array.length; i += 1) {
    if (!predicate(array[i])) return false;
  }
  return true;
}
console.log('Should be true', loopEvery([1, 2, 3, 4, 5], (n) => n < 6));
console.log('Should be false', loopEvery([1, 2, 3, 4, 5, 6], (n) => n < 6));

/**
 * someEvery takes an array and a predicate function. If every element of the
 * array passes the predicate, then the function returns true.
 *
 * I cheated on this one. Thank you, Nina Scholz!
 * https://stackoverflow.com/questions/62580919/eloquent-javascript-chapter-5-exercise-question-using-array-some
 */
function someEvery(array, predicate) {
  return !array.some((element) => !predicate(element));
}
console.log('Should be true', someEvery([1, 2, 3, 4, 5], (n) => n < 6));
console.log('Should be false', someEvery([1, 2, 3, 4, 5, 6], (n) => n < 6));
