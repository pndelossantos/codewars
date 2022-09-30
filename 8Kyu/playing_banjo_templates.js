// Instructions
//Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.


//Solution
//P -  takes in a string of varying lengths with any combination of values
//R - returns a string depending on the first letter of the parameter names
//E - ((Adam) Adam does not play banjo)
//P - if statement checks to see if the character at 0 (aka the first letter of the name variable is equal to an R, r)
// if so the first string is returned and if not the else does not play banjo string.

function areYouPlayingBanjo(name) {
  // Implement me
  if(name.charAt(0) === 'R' || name.charAt(0) === 'r'){
    return `${name} plays banjo`
  }else {
   return `${name} does not play banjo` 
  }
}