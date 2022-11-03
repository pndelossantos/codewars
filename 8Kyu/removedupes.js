//Instructions
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.


//Solution
function distinct(a) {
    return a.filter((x, index) => a.indexOf(x) === index);
  }