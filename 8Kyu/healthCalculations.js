//Instructions
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
//Solution
// takes in two inputs of integer types
// returns how much health is left after the damage is received 
// ((20, 5) 15)
// using an if else statement the if checks to see if the damage integer is greater than the health integer. If so 0 is returned as health can not drop below 0.
// if damage is not greater than health the difference is returned
function combat(health, damage) {
    // Write your code here
    if(damage > health){
      return 0
    }else{
      return health - damage
    }
  }