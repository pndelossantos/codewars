//Instructions
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
//Solution
function minMax(arr){
    //an array of any length with valid inputs
    //an array containing the min and max values 
    //see above
    // sorts the array in descending order and stores the value in min
    let min = arr.sort((a,b) => a-b)[0]
    // sorts the array in ascending order and stores the value in max
    let max = arr.sort((a,b) => b-a)[0]
    // returns an array with min and max
    return [min, max]
    }

    function minMax(arr){
        return [Math.min(...arr), Math.max(...arr)];
      }