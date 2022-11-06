//Instructions
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.


//Solution
function squareArea(A){
    radius = (A * 4) / (2 * Math.PI)
  return +(radius * radius).toFixed(2)
  
  }