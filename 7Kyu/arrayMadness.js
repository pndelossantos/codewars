//InstructionsSpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!
//Solution
function arrayMadness(a, b) {
    // takes in two arrays that will have at least one element
    // return a boolean of whether the sum of the squares of array one are greater than the sum of the cubes in array 2
    // see above
    // reduces both arrays using the assigned square/cube designation, initial value supplied to deal with arrays with only one elements
    
    // Ready, get set, GO!!!
    return a.reduce((acc, cv) => acc + (cv**2), 0) > b.reduce((acc, cv) => acc + (cv**3), 0)
  }