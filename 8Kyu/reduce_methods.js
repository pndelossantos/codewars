//Instructions
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//Solution
// takes in an array filled with integer numbers in the form of parameter classPoints and an integer number in yourPoints
// return a boolean of whether or not your points are greater than the average of classPoints
// 
// uses the reduce method on the classPoints array to sum up all values and then that values will be divided by the length of the array to get the average. That average will then be compared to your points using the < operator which will return the appropriate boolean value
function betterThanAverage(classPoints, yourPoints) {
    // Your code he
    return classPoints.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    })/classPoints.length < yourPoints
  }