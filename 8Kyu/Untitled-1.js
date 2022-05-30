//Instructions
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// Note: Use "" instead of '' in C++.

//Solution
function updateLight(current) {
    //take in current state of traffic light in string format ('green', "yellow", 'red')
    //return the next state the light should enter in string format
    //(("green"), "yellow"), (("yellow"), "red")
    // takes in current value and checks for matching case then returns next statement
      switch (current){
          case "green":
            return "yellow"
            break;
          case "yellow":
            return "red"
            break;
          case "red":
            return "green"
            break;
      }
    
    }

