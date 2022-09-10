//Instructions
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
//Solution
function sortByLength (array) {
// takes in an array of strings that all have different lengths
// return the same array with elements sorted in ascending order
// see above
// sorts array by using the lengths of each element and comparing them
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((a,b) => a.length - b.length)
  };