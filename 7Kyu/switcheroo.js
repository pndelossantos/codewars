//Instructions
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//Solution
function switcheroo(x){
//creates a new variable and assigns an empty string to it
    let returnStr = ''
//iterates through the original string
    for (let i = 0; i < x.length; i++){
// checks to see if the current element held is an "a" if so return a 'b' to returnStr in its place
      if(x[i] === 'a') returnStr += 'b'
// checks if current element is 'b' returns 'a' if it is
      else if (x[i] === 'b') returnStr += 'a'
//returns current element if it is not an 'a' of 'b'
      else returnStr += x[i]
    }
//returns the string
      return returnStr
    }

//P - takes in a string with some combination of a, b, and c. all letters are lowercase and there can be repeats or some letters may be present
//R - returns a new string with any occurrences of a and b swapped, c should remain unchanged
//E - (switcheroo('aaabcccbaaa'), 'bbbacccabbb')
//P