//Instructions
// Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbe a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a
//Solution
var ArrowFunc = function(arr) {
  //P - the function receives an array of numbers, no known limit on array size and unclear if an array might be empty
  //R - a string in which all numbers from the original array have been converted into characters
  //E - 
  //P - map grabs each element of the array and then the fromCharCode method is used to convert those values into the correct character
  // - after each new string element is returned to the array the join method is used to combine them into a single string.
    return arr.map(x => String.fromCharCode(x)).join(''); //Complete this function
  }