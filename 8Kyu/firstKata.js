//Instructions
// In this Kata you should fix/create a program that returns the following values:

// false/False if either a or b (or both) are not numbers
// a % b plus b % a if both arguments are numbers
// You may assume the following:

// If a and b are both numbers, neither of a or b will be 0.
// - return false if one of the two inputs is not a number, if both inputs are numbers return the result of a and b divided by one another and added together 
// - ((3, b) false)
// - using an if else statement the if checks if the typeof each input variable is not a number, if either is not a number false is returned
// if both inputs are numbers the else will run the remainders of a %b and b%a are added together and returned
function myFirstKata(a, b){
    if(typeof(a) != "number" || typeof(b) != "number"){
      return false
    }else{
      return a % b + b % a;
    }
  }