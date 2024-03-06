// Exercise: Write a function that counts the number of times 'B' appears in
// a string. Then write a more general function that counts the number of any
// given letter in a string.

// I'm going to change this exercise and do it backwards. I'm going to write
// a third function first which returns a function and then use that for both.

/**
 * createCharCounter takes a single character as an argument and returns a
 * function which takes a string and returns a number which is the count of the
 * given character in the given string.
 *
 * @param {string} char - This is the string which the returned function will
 * search the string passed to it for.
 * @returns {function} This returned function takes a string and returns a
 * number.
 */
function createCharCounter(char) {
  return (string) => {
    let result = 0;
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] === char) result += 1;
    }
    return result;
  };
}

/**
 * countBs takes a string and returns a number which is the number of times
 * uppercase B is used in the string.
 *
 * @param {string} string - This is the string that will be searched for B's.
 * @returns {number} This is the count of B's within that string.
 */
const countBs = createCharCounter('B');

/**
 * countChar takes a string and a character and returns the number of times the
 * letter appears within the given string. Note: The character is case
 * sensitive.
 *
 * @param {string} string - This is the string that will be searched.
 * @param {string} char - This is the character which will be searched for.
 * @returns {number} This is the count of the given character in the given
 * string.
 */
function countChar(string, char) {
  return createCharCounter(char)(string);
}

console.log(createCharCounter('B')('BBC'));
console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
