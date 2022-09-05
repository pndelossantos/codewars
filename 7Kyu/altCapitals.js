//Instructions
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!
//Solution
// takes in a string of lowercase letters (symbols, spaces, other?)
// return an array with two elements, first element should be the string with even indexes capitalized and second should be the opposite
// see instructions
//  
function capitalize(s){
// creates and even variable and splits the string and keeps the element and index
    let even = s.split('').map((e, i) =>{
// if the index is even returns the uppercase version to the array
      if(i === 0 || i % 2 === 0){
        return e.toUpperCase()
//if not just returns the element
      }else {
        return e
      }
// re- joins the array into a string
    }).join('')
// same as above but for odds
    let odd = s.split('').map((e,i) => {
      if (i % 2 != 0){
        return e.toUpperCase()
      }else{
        return e
      }
    }).join('')
// returns an array with both strings
    return [even, odd]
  };

  function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };