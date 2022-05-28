//Instructions
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//Solution 
function squareDigits(num){
    // takes in an integer greater than 0
    // returns an integer of all individual integers in num squared and concatenated
    // ((1212), 1414)
    //takes num input, converts to string, splits string into an array and then takes each character and maps the squared vales into an array
    // join concatenates squared values into a single string and + converts the input back into a number
      return +String(num).split('').map((e) => Math.pow(e, 2)).join('')
    }