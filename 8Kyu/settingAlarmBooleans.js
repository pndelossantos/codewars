//Instructions
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


//Solution\
// takes in two boolean inputs stored within the employed and vacation parameters
// return a boolean value reflecting whether or not an alarm needs to be set (true) or not (false), if employed is true and vacation is false true must be returned
// see line above
// using the strict equality operator and the logical or operator returns whether employed is true and vacation is false from the provided parameters 
function setAlarm(employed, vacation){
  
    return employed === true && vacation === false 
      
  
  }