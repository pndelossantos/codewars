//Instructions
//Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).
//Solution

// a positive integer 
// a string based on the squared value of x, values greater than 1000 will lead to "It's hotter than the sun!!" otherwise "Help yourself to a honeycomb Yorkie for the glovebox"
// ((2) Help yourself to a honeycomb Yourkie from the glovebox)
// squares the number x using the ** operator and uses the Number() to ensure the result is a number then uses a ternary operator to check if the squared value is greater than 1000 then returned the appropriate value
function apple(x){
    return Number(x**2) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
  }