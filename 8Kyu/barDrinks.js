//Instructions
// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".


//Solution
//P - takes in a string with no set format
//R - return a string value that was mapped onto the param
//E - "Pug"), "Beer", "'Pug' should map to 'Beer'")
//P - creates an object literal with drink params assigned to their various return values
// goes into the drinkk object and checks if it contains the received param(made lower case to prevent errors) if so it returns the correct value
// if not it returns beer
function getDrinkByProfession(param){
    const drinks = {
      'jabroni': 'Patron Tequila',
      'school counselor': 'Anything with Alcohol',
      'programmer': 'Hipster Craft Beer',
      'bike gang member': 'Moonshine',
      'politician': 'Your tax dollars',
      'rapper': 'Cristal'
    };
      return drinks[param.toLowerCase()] || "Beer"
    }