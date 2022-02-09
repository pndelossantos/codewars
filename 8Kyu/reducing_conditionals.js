//Instructions 

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//Solution

function find_average(array){
    if(array.length > 0){
  return array.reduce((acc, cv) => acc + cv)/array.length
  }else {
    return 0
  }
  }
