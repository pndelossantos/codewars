//Instructions
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

//Solution
function array(arr){
    //Good luck
//P - takes in a string with substrings separated by commas (despite the param name)
//R - Return a string with the first and last elements of the original string removed and commas turned into spaces, but no leading or trailing spaces
//E - ('1,2,3,4'), '2 3'), (array('1'), null)
//P = splits the string in substrings using the commas, slices everything but the commas and rejoins the sliced items with a space between or returns null if that is not possible
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }