//Instructions
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
//Solution


function differenceInAges(ages){
    let sorted = ages.sort((a,b) => a-b)
    let young = sorted.shift()
    let old = sorted.pop()
    return [young, old, old-young]
    }
    
    //OR
    // get an array of familial ages, only integers in the whole value numbers
    // return an array with the youngest age, oldest age, and difference in that order
    // Using the math.min and math.max methods and the spread operator to store the smallest and largest operators
    // finally those values and the difference will be returned 
    function differenceInAges(ages){
        const min = Math.min(...ages);
        const max = Math.max(...ages);
        
        return [min, max, max-min];
      }