//Instructions
// You received an array with two strings. Create a function that will return their product as a string. E.g.

// arrMultiply(['9','6']) should return '54'

//Solution
function arrMultiply(arr){
//P - takes in an array containing an array with two strings (numerical)
//R - should return a string of what the two values in the array multiplied by one another
//E - (['2', '4'], '8')
//P - takes the two values in the array by their indeces and multiplies them (type coercion)
// .toString() then converts the result of the multiplication into a string and the value is returned
   return (arr[0] * arr[1]).toString()
    
 }


 //const arrMultiply = ([a, b]) => `${a * b}`; 
