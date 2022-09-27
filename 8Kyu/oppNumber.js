//Instructions
// Very simple, given an integer or a floating-point number, find its opposite.
// 1: -1
// 14: -14
// -34: 34

//Solution
//P - an integer or a floating point number
//R - the opposite value of the given integer positive/negative etc
//E - ((1) -1)
//P - if number is greater than 0 the - operator is used on the number to return a negative opposite
// else uses the Math.abs method to convert the negative to an absolute positive number.

function opposite(number) {
    //your code here
    if(number > 0){
      return -(number)
    }else {
      return Math.abs(number)
    }
  }
