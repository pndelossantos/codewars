//Instructions
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

//Solution
function oddCount(n){
  // P: Takes in a whole number n
  // R: The number of odd integers below n
  // E: ((3), 1) ((12), 6)
  // P: Since half of the numbers below n are odd 
  // this divides n by 2 and rounds to get how many total odd
  // there are
    return Math.floor(n/2)
  }