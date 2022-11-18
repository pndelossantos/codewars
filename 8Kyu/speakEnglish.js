//InstructionsGiven a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.


//Solution
// takes in a string of varying lengths/formats
// return a boolean value that describes whether or not "english" is located within the string
// see above
// the input sentence is converted to lower case using the eponymous method and then the includes method, which returns a boolean
// by default is used to determine whether or not the phrase "english" is located within the input 
function spEng(sentence){
    //write your code here
      return sentence.toLowerCase().includes('english')
    }