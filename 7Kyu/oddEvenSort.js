//Instructions
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

//Solution
function sortMyString(S) {
//creates a variable and assigns it an array with two empty strings that will hold the even and odd indeced words
    const returnArray = ['', '']
// begins a for loop that will iterate through the given string
    for(let i = 0; i < S.length; i++){
// checks to see if the current character is odd, if so adds the character to the second string in our array
      if (i % 2) returnArray[1] += S[i]
// if the character index is not odd then the character is added to the first empty string in returnArray
      else returnArray[0] += S[i]
    }
// final array is joined into a string and returned
    return returnArray.join(' ')
  }

  //P - string - can be any characters and include spaces (capitals don't matter)
  //R - string with two smaller substrings separated by a space, first substring with even-indeced and second odd indeced.
  //E - ("CodeWars"), "CdWr oeas"), ("YCOLUE'VREER"), "YOU'RE CLEVER")
  //P - 

//   //const sortMyString = s => {
//     let even = s.split('').filter((v, i) => i % 2 === 0).join('')
//     let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
//     return even + ' ' + odd
// }