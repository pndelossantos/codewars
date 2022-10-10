//Instructions
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//Solution
var number=function(array){
    // takes in an array of varying length
    // return an array where each element is numbered in ascending order, empty arrays should return empty arrays
    // see examples above
    // maps through array taking the index and adding one to be the correct number and using template literal syntax to fill in the rest
    
    //your awesome code here
    return array.map((e, i) => `${i+1}: ${e}`)
  }