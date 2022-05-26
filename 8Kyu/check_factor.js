// Instructions
// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.


//Solution
function checkForFactor (base, factor) {
    // take in base a non negative number and factor a positive number
    //return a boolean that states whether base is a multiple of factor
    // ((6,1), true) ((18, 2) true)
    // divides base by factor to determine if any remainder exists if no remainder base is a multiple of factor
    // boolean will be returned through implicit return
    return base % factor === 0
  }