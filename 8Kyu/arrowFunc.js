//Instructions
// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []
//Solution
// takes an array of numbers/integers
// returns an array of all odd values 
// see instructions
// uses the .filter method to check if each element is even or odd using modulus to compare the results to 1 if so the values are added to the newly returned array
function odds(values){
    // arrow it
    return values.filter(e => e%2 == 1 );
  }