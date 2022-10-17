//Instructions
// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!
//Solution
// an element that could be of any type
// return a string based on the type input element
// ((4) "Who ate the last cookie? It was Monica!")
// create and assign the nonsense variable with the portion of the returned string that will not change and then uses a ternary to compare the type of x and return the nonsense variable and correct ending using template literals.
function cookie(x){
    // ...
    let nonsense = "Who ate the last cookie? It was "
    return typeof(x) == 'string' ? `${nonsense}Zach!` : typeof(x) == 'number' ? `${nonsense}Monica!` : `${nonsense}the dog!`
  }