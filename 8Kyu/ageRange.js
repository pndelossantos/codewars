//Instructions
// Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.


// minimum age <= your age <= maximum age #Task

// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]
//Solution
function datingRange(age){
    //return min-max
    if(age > 14){
    return `${Math.floor(age/2 +7)}-${Math.floor((age-7)*2)}`
    }else{
      return `${Math.floor(age - 0.10 * age)}-${Math.floor(age + 0.10 * age)}`
    }
  }
  //takes in an integer greater than 0
  // return the min and max age range in the form of a string separated by a hyphen
  // ((23) '18-30')
  // check if age is greater than 14 and then use the traditional formula in cases of greater than and then returns values using template literal
  // if age is less than 14 uses the alternate formula 