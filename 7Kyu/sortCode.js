//Instructions
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

//Solution
function sortGiftCode(code){
// - takes in a sting of unique lowercase letters (up to 26 aka the entire alphabet)
// - return the same string but sorted alphabetically
// - see above
// - split the string into an array so we can use sort (this first method would only be helpful if character weren't unique
// sort returns an alphabetically sorted array that we join together into a string and return
 
    return code.split('').sort((a, b) => { return (a > b ? 1 : -1 )}).join('')
  }

  return code.split('').sort().join('')