'use strict'

// Exercise: Make a program to output an 8x8 chessboard. Then make the widthO
// and height variable.

/**
  * chessboard takes a width and height and returns a checkerboard pattern of
  * empty spaces and hash symbols.
  *
  * I'm aiming to make this O(n) rather than O(n2).
  *
  * @param {number} width - The number of characters wide the "board" is.
  * @param {number} height - The number of characters tall the "board" is.
  * @returns {string} This is one long string where each row of the board is
  * separated by a newline character.
  */ 
function chessboard(width, height) {
  let result = '';
  // numOfCharacters is a bit of a misnomer. It doesn't count newlines.
  const numOfCharacters = width * height;
  // Starting the row counter with 0
  // NOTE: First row is even
  let rowNum = 0
  for (let i = 0; i < numOfCharacters; i++) {
    // For even rows, if i is even, ' ', else '#'
    // For odd rows, if i is even, '#', else ' '
    if (rowNum % 2 === 0) {
      if (i % 2 === 0) {
        result += ' '
      } else {
        result += '#'
      }
    } else {
      if (i % 2 === 0) {
        result += '#'
      } else {
        result += ' '
      }
    }

    // Now that we have our character set, we must decide if we will increment
    // the rowNum and add a newline, ie. move a row down.
    if (i % width === 0) {
      rowNum++;
      result += '\n';
    }
  }

  return result;
}

console.log(chessboard(8, 8))
console.log(chessboard(1, 8))
console.log(chessboard(8, 1))
console.log(chessboard(2, 8))
console.log(chessboard(8, 4))
