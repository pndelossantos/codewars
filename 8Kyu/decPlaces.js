//Instruction
// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34

//Solution
// takes in an element n of the integer/float type
// return an integer rounded to 2 decimal places
// see above
// uses toFixed(2) to round the n to two decimal places and uses the + operator to ensure the output is a number
function twoDecimalPlaces(n) {
    // Your code here
    return +n.toFixed(2)
  }