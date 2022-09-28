//Instructions
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//Solution
//P - takes in a variable called num the value of which is a number or float integer
//R - returns a string version of the num received 
//E - ((123), '123')
//P - Uses String method to convert the given variable
function numberToString(num) {
    //Take in num and use String function to convert
      return String(num);
    }