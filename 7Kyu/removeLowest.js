//Instructions
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
//Solution
function removeSmallest(numbers) {
// an array that contains numbers
// return the same array unmutated but without the lowest value
// ([2, 3 2, 1 ,5], [2, 3, 3, 5])
//  return a filtered array with all values that do not have an index number matching the index of the first location of the minimum 
    return numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
    
    }