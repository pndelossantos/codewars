//Instructions
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

//Solution
function oddCount(n){
    // your code here
    // P: Takes in a whole number (n)
    // R: A number (count) of all odd numbers below n
    // E: ((12), 6), ((3), 1)
    // P: 
    // Declare empty array to push odd values into
    let final = []
    // loops through each 0 - n adding 1 each time
    for(let i = 0; i < n; i++){
    // checks to see if each number is odd
      if(i%2 === 1){
    // pushes odd numbers into the final array
        final.push(i)
      }
    }
    // returns how many elements are in the final array/ aka odd numbers
    return final.length
  }