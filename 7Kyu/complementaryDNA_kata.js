//Instructions
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//Solutions
//Takes in a string of capital letters (varying lengths)
function DNAStrand(dna){
    //Return a string of complimentary dna aka capitalized letters
    //splits string into an array and begins creating a new arrat
      return dna.split('').map((e) => {
    //returns complimentary letters to new array
        if(e === "A"){
          return "T"
        }else if(e === "T"){
          return "A"
        }else if(e === "C"){
          return "G"
        }else{
          return "C"
        }
    //joins the new array into a string to be returned
      }).join('')
    }
