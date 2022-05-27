//Instructions
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

//Solution
function findMultiples(integer, limit) {
    // takes in two positive integers, limit is always higher than base
    // return an array of all multiples from integer up to and including limit if applicable
    // ((2, 10) 2, 4, 6, 8, 10)
    // create empty array to hold multiples
    let multiples = []
    //iterate through array until limit is reached or surpassed, increasing by integer every time
    for(let i = integer; i <= limit; i+=integer){
    //push multiples into final array
      multiples.push(i)
    }
    //return array
      return multiples
    }
