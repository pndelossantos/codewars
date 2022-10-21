//Instructions
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//Solution
// takes in an array of boolean values with true representing sheep and false representing no sheep 
// the amount of sheep aka true booleans
// see above
// uses the filter method on the sheep array and creates a new array of all the true boolean values, the length of this new array is returned as the representation of the amount of sheep

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
  return arrayOfSheep.filter((sheep) => {
    if(sheep === true){
      return sheep
    }
  }).length
  }