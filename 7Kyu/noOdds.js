//Instructions
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


//Solution
function noOdds( values ){
    // Return all non-odd values
// takes in an array that will have at least one integer element
// return an array with all non odd integers in the order they appear in the array
// (([0, 2, 5]) [0, 2])
// creates and returns a new array were the remainder of each element divided by 2 is o, aka even
    return values.filter(e => e % 2 === 0)
  }
