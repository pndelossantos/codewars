//Instructions
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//Solution
//P - two strings, an original string and an ending to use for comparison
//R - boolean that states whether or not the original string ends with ending
//E - ('abcde', 'cde'), true)
//P - returns a boolean value clarifying if str ends with ending using the endsWith method
function solution(str, ending){
    return str.endsWith(ending)
    }
