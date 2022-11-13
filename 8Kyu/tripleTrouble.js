//Instructions
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.
//Solutions
// takes in three input strings
// return a string that takes all the 1st, 2nd, 3rd letters of the input strings and places them next to each other
// see above
// takes the first input and splits it into individual letters then maps each element of the newly split array and the elements of the same index in the other 2 inputs together and then rejoins them
function tripleTrouble(one, two, three){
    //Solution
    return one.split('').map((e, i) => e + two[i] + three[i]).join('')
   }
  
