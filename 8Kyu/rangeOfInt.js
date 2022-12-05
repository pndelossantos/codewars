//Instructions
// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)
//Solution
// takes in 3 parameters, all integer numbers. all inputs will be valid
// return an array with min parameter and the max value as the final and filled with min etc + step until max is reached
// see above
// creates an empty array named final, then using a for loop that includes the min as the starting position
// and the max as the stopping condition, and the step as the increment, each value is then pushed to the final array and the array is then returned
function generateRange(min, max, step){
    let final = []
    for(let i = min; i <= max; i+=step){
      final.push(i)
    }
    return final
  }