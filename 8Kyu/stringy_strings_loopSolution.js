// Instructions
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

//Solution
function stringy(size) {
    // Parameter: a positive whole number
    //Return: a string of alternating 1's and 0's the same length as size
    //Examples: stringy((3), 101), stringy((6), 101010), stringy((5), 10101)
    //Pseudocode:
    // empty string to hold return value
    let string = ''
    // for loop to iterate (size) amount of times
    for(let i = 0; i < size; i++){
      // adds a string 1 to string variable if i is 0 or even 
      if(i === 0 || i % 2 === 0){
         string += '1'
       // adds a sting 0 to string variable if it is odd 
      }else if( i % 2 != 0){
         string += '0'
      }
    }
    //returns final result
    return string
  }

