//Arrays
function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
  return array.map((e) => e * 2)
}
function filterLongWords(sentence, n) {
    //Solution here
    return sentence.split(" ").filter((e) => e.length > n)
  }