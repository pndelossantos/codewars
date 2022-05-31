// //Instructions
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

//Solution
function divisibleBy(numbers, divisor){
    // take in an array of positive integers and a single integer
    // return an array of all numbers in the array evenly divisible by the single int (divisor)
    // ([2, 3, 5, 6], 2( [2, 6]))
    // returns a new array after using filter and modulus to determine which numbers to be added to new array
      return numbers.filter((e) => e % divisor === 0)
    }