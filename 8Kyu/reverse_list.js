//Instructions
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

//Solution
// takes in an array with varying elements
// return the same array but with the order of elements reversed
// see above
// the input array is reversed by using the built in reverse method on the list input, the result is returned
function reverseList(list) {
    return list.reverse()
   }