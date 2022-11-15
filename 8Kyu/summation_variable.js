//Instructions

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//Solution
//takes in an integer number
// return the sum from 1 to the given number
//see above
// multiplies the number by the number + 1 divided by 2

var summation = function (num) {
    // Code here
    return num*(num + 1)/2
  }