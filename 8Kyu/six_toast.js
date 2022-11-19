//Instructions
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):

// six_toast(12) == 6

//Solution
// takes in an integer number 
// return an integer number that reflects the value of 6 - the input number but in absolute form, no negatives
// see above
// uses the Math.abs() "absolute" method to give the positive counterpart of 6 - num
function sixToast(num) {
    return Math.abs(6 - num)
    }