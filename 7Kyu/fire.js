//Instructions
// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!


//Solution
function fireFight(s){
// takes the original string and splits it into an array of words that had spaces between them, this is saved in sArray
    const sArray = s.split(' ')
//iterates through the array
    for(let i = 0; i < sArray.length; i++){
//checks if the current element is "Fire" is so replaces it 
      if (sArray[i] === "Fire") sArray[i] = '~~'
    }
//rejoins the array into a string and returns it
    return sArray.join(' ')
  }

  //P - string of unknown length with words (substrings) separated by spaces. All words have first letter capitalized (Fire vs fire FIRE)
  //R - new string with any occurrences of "Fire" replaced by "~~"
  //E -"Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~"
  //P
