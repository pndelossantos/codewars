//Instructions

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"
//Solution

//takes in a string "name" which can be of varying lengths and various cases or nothing
// return a string Hello, Name(with proper upper case/lower case letters.)
// see above 
//returns a template literal string with Hello, and if name is present the first letter of name changed to upper case using toUpperCase and the rest of the name sliced and changed to lower case. If no name is given returns Hello, world. 
function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
  }