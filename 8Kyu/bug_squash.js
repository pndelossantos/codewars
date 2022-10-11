//Instructions
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

//Solution
// - a sentence string of varying lengths
// - an integer/number representing the length of the longest word in the input sentence
// - (("See spot run") 4)
// - create a spl variable and that contains an array of the input sentence separated by spaces and a longest variable with a placeholder 0. Using a for loop the array is looped through and if the length of the current word is greater than longest longest is updated with the new length. After looping through all array elements the longest value is returned.
function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
      }
      return longest
  }