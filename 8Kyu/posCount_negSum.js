//Instructions
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//Solution
//P: Takes in an array of numbers that can be either positive of negative
//R: Return an array with two values [countOfPositives, sumOfNegatives]
//E: [2, 4, 5, -1, 0, -3], [3, -4] = empty or null arrays should return an empty array

function countPositivesSumNegatives(input) {
    if (input && input.length) {
          let count = 0
          let sum = 0
          input.forEach(num => num > 0 ? count++ : sum += num)
          return [count, sum]
      } else {
          return []
      }
  }
