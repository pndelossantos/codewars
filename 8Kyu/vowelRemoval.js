//Instructions
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata
//Solution
// takes in a string of varying lengths/cases
// return the input string with all lower case vowels removed, y is not considered a vow for this challenge
// see above 
// the original string is split into individual letters and then the filter method is used on the newly split string array and any non lower case vowels are passed on to the new array and joined together 
// using .join to return the original string - lower case vowels
function shortcut (string) {
    return string
      .split('').filter(str => !'aeiou'.includes(str)).join('')
  }