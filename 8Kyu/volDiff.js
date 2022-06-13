//Instructions
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

//Solution
function findDifference(a, b) {
    //takes in two arrays of 3 integers
    // return the difference between the total volume of each array (l*w*h)
    // ([3, 2, 5], [1, 4, 4], 14)
    // use reduce to calculate total volume of each array and then subtract
    return Math.abs(a.reduce((acc, c) => acc * c) - b.reduce((acc, c) => acc*c))
  }