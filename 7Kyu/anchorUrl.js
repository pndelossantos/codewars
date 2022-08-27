//Instructions
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//Solution
//P - get a string of varying lengths that may or may not contain #
//R - return a string with any characters after a # removed
//E - ('www.codewars.com#about'), 'www.codewars.com')
//P -  pseudocode
function removeUrlAnchor(url){
    // TODO: complete
//prep get the index of any #
    let sliceVal = url.indexOf('#')
//if the index of slice val is higher than 0 (aka a hashtag is present)
    if(sliceVal > 0){
//if so slices the string from beginning to the index of the #
      return url.slice(0, sliceVal)
// if not returns the whole string
    }else{
      return url
    }
  }