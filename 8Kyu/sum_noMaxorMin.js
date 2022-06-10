//Instructions
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

//Solution
function sumArray(array) {
    // takes in a null input or an array that contains positive or negative integers in no particular order
    // return an integer that is the sum of all elmenents in the array if there is more than two integers without the largest and smallest integers
    // ([3, 5], 0), ([1, 2 , 4], 2)
    // conditional that catches null or inputs that are too small
      if(array == null || array.length <= 2){
        return 0
    // sorts the array into ascending order, takes in all values but the first and last (lowest and highest) and then returns
    // the reduction of that array into a single sum
      }else{
        return array.sort((a, b) => a - b).slice(1, -1).reduce ((acc, c) => acc + c)
      }
    }