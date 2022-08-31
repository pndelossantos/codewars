//Instructions
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//Solution
var greet = function(name) {
    let capital = name.charAt(0).toUpperCase()
    let lower = name.slice(1).toLowerCase()
    let finalName = capital+lower
    return `Hello ${finalName}!`
    };


    var greet = function(name) {
        return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
      };