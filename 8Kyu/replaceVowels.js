//Instructions
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
//Solution
function replace(s){
//string
//string with all vowels replaces with !
//((Dog) D!g)
//split string into an array and then create a new array with map
//the map will check for vowels by comparing a lowercase version of each character
//to vowels and replacing with ! or returning the character for non-vowels
//the new array is then rejoined into a string and returned

    return s.split('').map(char => {
      if(char.toLowerCase() == "a" || char.toLowerCase() == "e" || char.toLowerCase() == "i" || char.toLowerCase() == "o" || char.toLowerCase() == "u"){
        return "!"
      }else{
        return char
      }
    }).join("")
}

//Alt
const replace = w => (w.split('').map(e => ['a','e','i','o','u'].includes(e.toLowerCase()) ? '!' : e)).join('');
