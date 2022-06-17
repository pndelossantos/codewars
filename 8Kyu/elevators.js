//Instructions
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

//Solution
function getRealFloor(n) {
    //check if number falls under first scenario
    if(n > 0 && n < 13){
    // return is true
      return n - 1
    //check if number is greater than 13 aka n -2
    }else if(n > 13){
      return n -2
    //return n if all other scenarios are false
    }else {
      return n
    }
  }

  //Take in an integer positive or negative 
  //return the original integer minus one if greater than 0 and less than 13
  // or - 2 if greater than 13, all other cases n remains the same
  //((12) 11)
  //