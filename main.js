//Codewars 8 Kyu Fundamentals

//Strings

//Banjo using template literal and string method charAt()

function areYouPlayingBanjo(name) {
  // Implement me
  if(name.charAt(0) === 'R' || name.charAt(0) === 'r'){
    return `${name} plays banjo`
  }else {
   return `${name} does not play banjo` 
  }
}
// Abbreviate using .map

function abbrevName(name){
  return name.split(' ').map(word => word[0]).join('.').toUpperCase()
      // code away
  
  }
//replace
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g, "U")
}
//summation
var summation = function (num) {
  // Code here
  return num*(num + 1)/2
} 
//return
function add(a,b){
  return a+b
}

function divide(a,b){
  return a/b
}

function multiply(a,b){
  return a*b
}

function mod(a,b){
  return a%b
}
 
function exponent(a,b){
  return a**b
}
  
function subt(a,b){
  return a-b
}
//Name shuffler

function nameShuffler(str){
  //Shuffle It'
  return str.split(' ').reverse().join(' ')
}
//converting a strong to an array
function stringToArray(string){
  return string.split(' ')
    // code code code
  
  }
//joining an array
function printArray(array){
  return array.join();
}
//combining strings
function smash (words) {
  return words.join(' ').trim()
};
//chekcing for plaindrome
function isPalindrome(line) {
  let str = line.toString()
  if (str === str.split("").reverse().join("")){
  return true;
    }else{
      return false
    }
}

//reversing words in a string 
function reverse(string){
  //your code here
  return string.split(' ').reverse().join(' ')
}
// part 2
function reverseWords(str){
  let reversed = str.split(' ').reverse().join(' ')
  return reversed; // reverse those words
}
//combining strings using template literals
function combineNames(a, b){
  return  `${a} ${b}`
  }
  function joinStrings(string1, string2){
    return `${string1} ${string2}`
 }
// remove string spaces
function noSpace(x){
  return trimmedStr = x.split(' ').join('')
  
  }

//.repeat Method
function repeatStr (n, s) {
    return s.repeat(n);
  }

  var repeatIt = function(str, n) {
    if(typeof str == "string"){
      return str.repeat(n)
    }else{
      return "Not a string"
    }
    }

// Sum of Positives
function positiveSum(arr){
  let newArr = arr.filter(num=>num > 0)
  return newArr.reduce((acc,c)=>acc+c,0)
  
}  

function positiveSum(arr){
  return arr.filter(num=>num > 0).reduce((acc, c)=>acc+c,0)
}

//Multiply two numbers
function multiply(a,b){
  return a*b
}

let multiply = (a, b) => a * b;

// Square Sum

function squareSum(numbers){
  let square = numbers.reduce((acc, curVal) => {
    return acc + curVal ** 2;
  }, 0);
  return square;
}
// take in an array
function squareSum(arr) {
// take each element 

//square sum
}

// Sheep Counting

//Basic Mathematical Calculations
function basicOp(operation, value1, value2){
  // Code
  if(operation === "+"){
     return value1 + value2
     }else if(operation === "-"){
     return value1 - value2         
     }else if(operation === "*"){
     return value1 * value2         
     }else{
    return value1 / value2
  }
}

function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}

// Is n divisivle by x and y?
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0){
    return true
  } else if (n % x !== 0 && n % y === 0){
    return false
  }else {
    return false
  }
  }
  function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
  }
//Arrays
//Map
function maps(x){
  return x.map(num => {
    return num * 2
  })
}
//Using map to invert numbers in an array
function invert(array) {
  return array.map(num => num * -1);
  }
// Rock, Paper, Scissors
const rps = (p1, p2) => {
  if(p1 === p2){
    return "Draw!"
  }else if ((p1 === "rock" && p2 === "scissors") || (p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock")){
    return "Player 1 won!"
  }else{
    return "Player 2 won!"
  }
};
//indexOf
function findNeedle(haystack) {
  // your code here
  return `found the needle at position ${haystack.indexOf('needle')}`
}
// Other
//Math Methods
function litres(time) {
  return Math.floor(time * .5);
}

//calling prebuilt functions
function doTurn () {
  // Functions called
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}