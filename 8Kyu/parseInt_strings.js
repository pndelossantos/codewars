//Instructions
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//Solution
function getAge(inputString){
    // take in a string where the first charcter will be a number between 0-9
    // return the number in the string as an integer
    // (("7 years old"), 7)
    // grab the character at the 0 index and use unary to change type
    return +(inputString.charAt(0))
    }