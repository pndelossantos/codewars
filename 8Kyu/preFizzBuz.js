//Instructions
// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.
//Solution
// takes in a positive integer that will be either 1 or greater than that
// return an array with all numbers from one to the given n
//
// creates an empty array called array, then using a for loop starting at 1 and with n as the stopping condition and increments by 1 each loop. each value is then pushed to the array, finally after n is reached the array is returned
function preFizz(n) {
    let array = []
    for(i = 1; i <= n; i++){
      array.push(i)
    }
      return array
    }