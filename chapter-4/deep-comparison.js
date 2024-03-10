/**
 * RIP deep comparison exercise. This was my favorite so far. I used it to make
 * an assert function to use for further test. I accidently lost it in a fatal
 * git accident. If I don't ever remake you, know you were a good one.
 *
 * I have decided to give this another shot.
 *
 * Exercise:
 * The == operator compares objects by identity, but sometimes you’d
 * prefer to compare the values of their actual properties.
 *
 * Write a function deepEqual that takes two values and returns true only if
 * they are the same value or are objects with the same properties, where the
 * values of the properties are equal when compared with a recursive call to
 * deepEqual.
 *
 * To find out whether values should be compared directly (using the ===
 * operator for that) or have their properties compared, you can use the typeof
 * operator. If it produces "object" for both values, you should do a deep
 * comparison. But you have to take one silly exception into account: because of
 * a historical accident, typeof null also produces "object".
 *
 * The Object.keys function will be useful when you need to go over the
 * properties of objects to compare them.
 */

function isNonNullObject(thing) {
  if (typeof thing === 'object' && thing !== null) return true;
  return false;
}

/**
 * @param {any} thingOne
 * @param {any} thingTwo
 * @returns {boolean}
 */
function deepEqual(thingOne, thingTwo) {
  // Quick return true if they're just equal
  if (thingOne === thingTwo) return true;

  // Handle case with two objects
  if (isNonNullObject(thingOne) && isNonNullObject(thingTwo)) {
    const t1Keys = Object.keys(thingOne);
    const t2Keys = Object.keys(thingTwo);
    if (t1Keys.length !== t2Keys.length) return false;
    return t1Keys.every((key) => t2Keys.includes(key) && deepEqual(thingOne[key], thingTwo[key]));
  }

  return false;
}

const testCases = [
  [[1, { new: 'object' }], false],
  [[{ new: 'object' }, 1], false],
  [[1, 1], true],
  [[9, 9], true],
  [[[9], [9]], true],
  [[{ new: 'object' }, { new: 'object' }], true],
];

for (let i = 0; i < testCases.length; i += 1) {
  if (deepEqual(testCases[i][0][0], testCases[i][0][1]) !== testCases[i][1]) {
    const errStatement = `Expected deepEqual(${
      JSON.stringify(testCases[i][0][0])
    }, ${
      JSON.stringify(testCases[i][0][1])
    }) to equal ${
      testCases[i][1]
    }`;
    throw new Error(errStatement);
  } else {
    process.stdout.write('.');
  }
}
