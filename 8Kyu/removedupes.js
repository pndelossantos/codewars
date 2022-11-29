//Instructions
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.


//Solution
// takes in an array of numbers
// return the same array in the same order but with any duplicates removed
// 
// uses the filter method to take each element of the array and in combination with the indexOf method to determine whether or not the element has an index. 
function distinct(a) {
    return a.filter((x, index) => a.indexOf(x) === index);
  }