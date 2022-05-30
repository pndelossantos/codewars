//Instructions
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//Solution
function doubleChar(str) {
    // takes in a str of various character and cases
    //return a string with every charcter doubled
    //((abS) aabbSS)
    // turns string into an array with each character as an element, map each element twice to a new array and then rejoin and return string
      return str.split('').map(e => e+e).join('')
    }

