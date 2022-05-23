//Instructions
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//Solution
function getCount(str) {
    // Takes in a string of lowercase letters
    // Return should be an integer that represents how many vowels are within the string
    // ((lava), 2), ((bonded), 2), ((fantastic), 3)
    // Splits string into an array and begins applying filter
      return str.split('').filter((e) => {
      // checks if letter in each index is vowel or not, if so returns that element to the new array
        if( e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u'){
          return e
        }
      // counts the number of elements (vowels) in the array to be returned
      }).length
    }