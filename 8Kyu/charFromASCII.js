//Instructions
// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'
// For ASCII table, you can refer to http://www.asciitable.com/


//Solution
// - get a character code/ integer
// - a string that is the ascii representation of the input 
// - 
// - uses the string from char code method to convert c into a string
function getChar(c){
    return String.fromCharCode(c)
  }