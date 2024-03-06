'use strict'
// Exercise:
// 1. Create a function, arrayToList, that takes an array and builds a linked
//    list from it.
// 2. Also, make a function, listToArray, that does the opposite.
// 3. Make a third function, prepend, which takes an element and a list and
//    creates a new list that adds the element to the front of the input list.
// 4. Make yet another function, nth, which takes a list and a number and
//    returns the element at the given position of the list. If no such nth
//    element exists, return undefined.

/**
 * arrayToList takes an array of arbitrary type and length and returns a linked
 * list of the same elements in the same order.
 *
 * @param {any[]} arr - This can be any type or length.
 * @returns {object} This is a linked list with the same order and elements
 * which were in the array that was passed to it.
 */
function arrayToList(arr) {
    // Make new object with value pointing at arr[0] item in array and rest ->
    // null
    const root = {
        value: arr[0],
        rest: null
    }
    // Loop over array and do the following
    let currentNode = root;
    for (let i = 0; i < arr.length - 1; i++) {
        // 1. Make a new object with value pointing at the next element (arr[n+1])
        //    and rest -> null
        const next = {
            value: arr[i + 1],
            rest: null
        }
        // 2. Set the rest attribute of this element (arr[n]) to the object in step 1
        currentNode.rest = next;
        currentNode = next;
    }

    return root;
}

const exampleList = arrayToList([0, 1, 2, 3, 4])
console.log(JSON.stringify(exampleList))

/**
 * listToArray takes a linked list and returns an array with the same objects in
 * the same order.
 * 
 * @param {object} list - This is the list that will be returned as an array.
 * @returns {any[]} This is the array that was created from the list.
 */
function listToArray(list) {
    // Initialize state
    const result = [];
    result.push(list.value)
    while (list.rest !== null) {
        list = list.rest;
        result.push(list.value)
    }
    return result;
}

console.log(listToArray(exampleList));

/**
 * prepend takes an element and a list and creates a new list that adds the
 * element to the front of the input list.
 *
 * @param {object} element - This arbitrary object will be the value of the new
 * head node of the linked list.
 * @param {any} list - This linked list will have the element added as the new
 * head node.
 * @returns {any} This will be the linked list passed in as a param with the
 * element as the new head.
 */
function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}

console.log(JSON.stringify(prepend(0, exampleList)))

/**
 * nth takes a list and a number and returns the element at the given position
 * of the list. If no such nth element exists, undefined is returned.
 * 
 * @param {object} listRoot - This is the first element of a list.
 * @param {number} number - This is the how many times we will step down the
 * list to find the returned object.
 * @returns {object} This is the nth object in the list.
 */
function nth(listRoot, number) {
    if (number === 0) {
        return listRoot;
    }
    if (listRoot.rest === null) {
        return undefined;
    }

    return nth(listRoot.rest, number - 1);
}

console.log(nth(exampleList, 2))