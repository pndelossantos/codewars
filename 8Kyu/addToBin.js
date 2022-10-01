//Instructions
// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
// This is a modification on the Kata: Array2Binary addition hope you like it
//Solution
// array of mixed values including numbers and strings
// return the binary equivalent of the sum of all integers/number elements in the array
//
// .filter method is used to filter out all array elements of the type of number, those values are then reduced into a single sum using the .reduce method (with a 0 to ensure the result is a number) that sum is then converted into binary using the toString(2) method
function arr2bin(arr){

    // show me the code
     return arr.filter(e => typeof(e) === 'number').reduce((acc, cv) => acc + cv, 0).toString(2)
  }