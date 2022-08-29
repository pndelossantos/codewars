//Instructions
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

//Solution
//P - string with some duplicate substrings 
//R - return new string based off of original with duplicates removed
//E - ('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta')
//P - 
function removeDuplicateWords (s) {
//breaks the s string into an array with elements separated by spaces 
    let subArray = s.split(' ')
//returns a new string based of the set aka unique values in the subArray array
    return [...new Set(subArray)].join(' ')
    }