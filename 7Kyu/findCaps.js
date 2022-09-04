//Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//Solution
var capitals = function (word) {
	// Write your code here
// valid single string 
// returns an array with the indeces of all capital letters in the original string
// see Instructions
// create an empty array to hold future indeces
  let indeces = []
// split the original string so we can use the array method filter, takes the element and index of the array
  word.split('').filter((e, x) => {
// checks if the element in question is equal to the capital version of the element
    if(e === e.toUpperCase()){
// if that is true pushes the index to the indeces array
      indeces.push(x)
    }
  })
//returns the indeces array after filled with correct values
  return indeces
};
