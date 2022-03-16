//Instructions
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//Solution
function twoSort(s) {
    // takes in an array of strings in no particular order
    // return the first item in the array when items are sorted lexographically, and with each character in the returned string separated with
    // three *
    // ([bitcoin, apple], a***p***p***l***e)
    // sorts items into lexo order, choose the first item, split string into individual characters and rejoin with ***
    return s.sort()[0].split('').join('***')
    }