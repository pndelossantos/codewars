//Instructions
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//Solution
function descendingOrder(n){
    // takes in an integer that is non-negative or o
    // returns the integer with digits in descending order from left to right
    // ((3241), 4321)
    // turn n into a string then split the string into an array
    // array is then sorted into descending order and then rejoined together
    // the final result is turned back into an int
    return +String(n).split('').sort((a, b) => b-a).join('')
    }