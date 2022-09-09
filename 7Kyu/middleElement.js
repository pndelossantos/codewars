//Instructions
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
//Solution
function gimme (triplet) {
// receive an array of three integers in no particular order
// return the index of the value that would fall in the middle if the elements were placed in order
// see above 
// make a copy of the original array to sort so the original is unmutated
    let copy = triplet.slice()
//sort the copy array and find the middle value
    let middle = copy.sort((a,b) => a-b)[1]
//find the indexOf the middle value that was stored in the middle value
    return triplet.indexOf(middle)
    }
