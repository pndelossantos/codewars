//Instructions 

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//Solution
// takes in an array, which will either contain numbers or be empty
// return the average of all numbers in the array, if the array is empty return 0
// ([], 0)
// uses an if/else statement the else statement will catch any empty arrays and return 0, if the array is not empty
// the reduce method will sum up all numbers in the array and then that will be divided by the length of the array
function find_average(array){
    if(array.length > 0){
  return array.reduce((acc, cv) => acc + cv)/array.length
  }else {
    return 0
  }
  }
