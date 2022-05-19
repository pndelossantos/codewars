//Instructions:
//Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

//Solution

function squareOrSquareRoot(array) {
    //P: An array of positive numbers, array will never be empty or null
    //R: a new array of numbers containing the square roots or with the number squared
    //E: ([2, 5, 25, 9], [4, 25, 9, 3] )
    //P: 
    //Begins mapping through the array
      return array.map(x => {
        // takes each number and grabs the square root which is assign to r
        const r = Math.sqrt(x);
        //checks if r is a whole int or not, if so returns r, if not squares number
        return (r % 1 == 0) ? r : (x*x);
      });  
    }
    
    

