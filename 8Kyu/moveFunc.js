//Instructions
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

//Solution
function move (position, roll) {
    // takes in two integer position and roll
    // return new location after character moves from their position
    // by the amount of the roll * 2
    // ((0, 4) 8)
    // adds two times the roll to the starting position and returns
    
    return position + roll * 2
  }