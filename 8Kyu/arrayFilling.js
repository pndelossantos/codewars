//Instructions
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.
//Solution
// a single integer/number
// return an array from 0 till the given value of n
// ((3) 0 1 2 3)
// created a newArr variable that is an empty array
// using a for loop to start at 0 and with a stopping condition of less than n and increments by +1 , loop through
// and then push that value to the newArr variable then newArr is returned
function arr(n){
    var newArr = [];
    for(var i = 0; i < n; i++){
      newArr.push(i);
    }
    return newArr;
  