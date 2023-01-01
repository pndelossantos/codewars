//Instructions
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4

//Solution
//P - takes in an array of numbers (the array only has numerical values and will never be empty?)
//R - the mean(average) of all the numbers within the array in numerical format
//E - see explanation
//P - this function first uses the reduce method to get a single value from all values in the array added together
// - after this single number is retrieved it is divided by the number of elements in an array using .length
var findAverage = function (nums) {
    return nums.reduce((acc, cv) => acc + cv)/nums.length
  }