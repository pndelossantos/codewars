//Instructions
// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

//Solution
// an input string stored in the s variable
// return the same string in the form of a question if it is not already in the form of a questions
// see above
// splits the original input into individual characters and then checks to see if ? is included in those characters, if so the original string is returned as it is already a question.
// if not the original string and a concat "?" are returned
function ensureQuestion(s) {
    // Code here
    return s.split('').includes("?") ? s : s + "?"
  }