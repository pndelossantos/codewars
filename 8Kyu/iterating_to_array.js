//Instructions
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]
//Solution
function between(a, b) {
    // your code here
    let arr= []
    for(let i = a; i <= b; i++){
      arr.push(i)
    }
    return arr
  }
  
  //P: whole integers, positive or negative
  //R: an array of numbers starting with a and counting up till b
  //E: ((1,7),[1, 2, 3, 4, 5, 6, 7])
  //   ((-3, 2), [-3, -2, -1, 0, 1, 2])
  //P: create an empty array, iterate from a to b one at a time while adding value to premade empty array
  //   return array