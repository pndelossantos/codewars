//Instructions
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

//Solution
function strCount(str, letter){  
    // takes in a string of various lengths, and a second string with a length of one
    // returns an integer of how many occurences of the second letter string are in the first string argument
    // ((hello, o) 1)
    // turns the string into an array and then compares each character to the value of letter, if matched the match is pushed to a new array
    // which we then get the length from (aka how many matches)
      return str.split('').filter(e => e === letter).length
    }