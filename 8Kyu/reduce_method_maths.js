//Instructions
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//Solution
// takes in a non-empty array of integers
// return the result of all elements being multiplied in order
// see above
// the reduce function is used and the acc and cv are multiplied until all elements in the array are used. the result is then returned
function grow(x){
    return x.reduce((accumulator, currentValue) => {  
      return accumulator * currentValue;
    });
    }
