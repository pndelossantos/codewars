//Instructions
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.
//Solution
function smallEnough(a, limit){
// takes in an array of numbers and a upper limit integer
// return a boolean value that indicates whether or not all numbers in the array are less than the limit
// ([3, 5 ,6, 7,] 9) true
// checks if every element is less than or equal to the limit, every returns a boolean by default
    return a.every((e) => e <= limit)
    }