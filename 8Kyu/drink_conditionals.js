//Instructions
//Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

//Solutions
// takes in an input old which will be an integer
// returns a string of what the input person should drink based on age
//
// going from smallest number to largest uses an if/else statement to compare old to the cut off ages and returns the appropriate string
function peopleWithAgeDrink(old) {
    if(old < 14){
      return "drink toddy"
    }else if (old < 18){
      return "drink coke"
    }else if (old < 21) {
      return "drink beer"
    }else{
      return "drink whisky"
    }
  };