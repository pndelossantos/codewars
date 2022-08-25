//Instructions
// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
//Solution
function absentVowel(x){
// creates an object and maps the correct values to each vowel
    const dict = {'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4}
// stores the object keys in the vowels variable
    const vowels = Object.keys(dict)
// iterates through each of the keys
    for(vowel of vowels){
//checks to see if the current key is not included in the string
      if(!x.includes(vowel)){
//if not returns the appropriate index
        return dict[vowel]
      }
    }
    }

    // function absentVowel(x) {
    //     var vowels = 'aeiou';
    //     for (var i in vowels) {
    //       if (x.toLowerCase().indexOf(vowels[i]) == -1) {
    //         return Number(i);
    //       }
    //     }
    //   }

//P - valid string that contains 4 of the 5 basic vowels
//R - return an integer value assigned to the missing vowel
//E ("John Doe hs seven red pples under his bsket"), 0)
//P