//Instructions
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//Solution
// take in a string of characters/words separated by spaces
// return an array with each standalone word/character and their length
// as an individual array element
// ((dog run) [dog 3, run 3])
// split string into an array by spaces and then return a new array of the elements + their lengths
function addLength(str) {
    return str.split(' ').map(e => `${e} ${e.length}`)
    }
