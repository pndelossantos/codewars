//Instructions
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//Solution
function correct(string)
// takes in string with varying characters
{
// return string with all character errors (see instructions) corrected
// ((D0G), DOG)
// splits string into an array and maps the correct elements based on the known errors
  return string.split('').map(e => {
    if(e === '0'){
      return "O"
    }else if(e == 5){
      return "S"
    }else if (e == 1){
      return "I"
    }else{
      return e
    }
  }).join('')
}