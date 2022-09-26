// Instructions
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Solution
//P - takes in a variable called number with a number value
//R - returns "Even" or "Odd" depending on whether the number received is an even or odd value
//E - ((3) Odd)
//P - Using the ternary operator the number value is divided by two and the result is compared to 0
// if the value is equal to 0 "even" is returned if not then "odd" is returned
function even_or_odd(number) {
    return number % 2 ===0 ? "Even" : "Odd"
  }