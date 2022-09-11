//Instructions
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//Solution
"use strict";
// takes in a two dimensional array with elements in no particular order
// return a single sorted array
function flattenAndSort(array) {
  // Good luck, brave code warrior!
//see above
//flattens the array into one single array with no sub arrays and sorts the integers numerically
  return array.flat().sort((a,b) => a-b)
}