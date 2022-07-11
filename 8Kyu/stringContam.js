//Instructions
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//Solution
function contamination(text, char){
    // Code here ;)
    return text.split('').map(e => char).join('')
  }

  // Takes in a string and a single character
  // You need to return the string with all characters replaced with the given char
  // ((dog, a) aaa)
  // split the string into an array and then maps each char onto the element
  