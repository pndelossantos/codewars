//Instructions
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// This kata is meant for beginners. Rank and upvote to bring it out of beta


//Solution
// takes in a single lowercase letter in the form of a string
// returns a string that includes that letters position in the english alphabet
//((a) 1)
// create a string with all letters of the alphabet
// use indexOf to locate where the passed argument is located within the string and add 1 to account
// for zero indexing of array methods
function position(letter){
    //Write your own Code!
      let alpha = "abcdefghijklmnopqrstuvwxyz"
      return `Position of alphabet: ${alpha.indexOf(letter) +1}`
    }