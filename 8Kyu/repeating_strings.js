//Instructions

// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

//Solutions
// takes in an input str which can be of any type and n an integer number
// is str is a string return a new string with the input repeated n times, if the str input is not a str return "Not a string"
// see above
// uses an if/else statement to catch non strings. If str is a string uses the built in repeat function using the input n and returns the output
// is str is not typeof string then the Not a string message is returned
var repeatIt = function(str, n) {
    if(typeof str == "string"){
      return str.repeat(n)
    }else{
      return "Not a string"
    }
    }
