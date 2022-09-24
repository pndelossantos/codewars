//Instructions
// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.
//Solution
//P - an array of numbers only in no particular order and of no particular length and a string that explains the direction of the sort
//R - a sorted array, the direction of the sort relies on the direction string received 
//E - * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
//P checks if the direction received is an R, if so sorts items within the array from smallest to largest. If the direction is not r items are sorted from largest to smallest

const flip=(d, arr)=>{
    return d === "R" ? arr.sort((a,b) => a-b) : arr.sort((a,b) => b-a)
    }
