//Instructions
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//Solution
//P - receiving a number stored in the humanYears
//R - return an array of numbers that represent the amount of human years, cat years, and dog years
//E - 
//P - create several variables to store values to be placed in the final array. for catYears if the human years are less than or equal to 1
// the value returned is human years times 15 if not the value of 16 + human * 4 is stored in catYears
// a similar process follows for the dog years variable, the values are then plugged into the returned array
function humanYearsCatYearsDogYears(humanYears) {
    let catYears = (humanYears <= 1)? humanYears * 15 : 16 + humanYears * 4;
    let dogYears = (humanYears <= 1)? humanYears * 15 : 14 + humanYears * 5;
    return [humanYears, catYears, dogYears];
}