//Instructions
// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.
//Solution
function correctTail(body, tail){

    return body.charAt(body.length-1) == tail
  }

  //P- takes in a string body and a letter character in tail
  //R- returns a boolean value that indicates whether or not the body string ends with tail
  //E- ((fox, x) true)
  //P- takes the final character of the body string and compares it to the tail value with an implicit boolean return