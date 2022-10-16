//Instructions
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Solution
// boolean value of true false 
// return string depending on the boolean value, "Yes" for true, "No" for false, "Null" for all other inputs
// ((true) "Yes")
// uses an if/else statement and checks the value of bool to determine what string to return
function boolToWord( bool ){
    //...
    if (bool === true){
      return "Yes"
    }
    else if (bool === false){
      return "No"
    }
    else{
      return "Null"
    }
  }