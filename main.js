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
function hero(bullets, dragons){
  //Get Coding!
   return bullets >= dragons * 2 
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

function simpleMultiplication(number) {
  // your code........
if(number % 2 === 0){
  return number * 8
}else {
  return number * 9
}
}

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
//Is something divisible
function isDivideBy(number, a, b) {
  // good luck
  return (number % a === 0 && number % b === 0)
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
//template literal with special chara
function bonusTime(salary, bonus) {
  // your code here
    const finalPay = bonus ? salary * 10 : salary
    return `\u00A3${finalPay}`
  }
//converting a string
function fakeBin(x){
  return x.split('').map((digit) =>{
    if(digit < 5){
      return 0
    }else if(digit >= 5){
      return 1
    }
  }).join('')
  }
  function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
//toUppercase
function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}
//Ternary/conditionals
function greet (name, owner) {
  // Add code here
  if(name === owner){
  return  `Hello boss`  
  }else{
    return `Hello guest`
  }
}
function greet (name, owner) {
  return name === owner ? 'Hello boss' :  'Hello guest';
}
//distance function
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return (distanceToPump <= mpg*fuelLeft)
};
//Arrays
//Reduce
function grow(x){
  return x.reduce((accumulator, currentValue) => {  
    return accumulator * currentValue;
  });
  }
  function betterThanAverage(classPoints, yourPoints) {
    // Your code he
    return classPoints.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    })/classPoints.length < yourPoints
  }
  function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, c) => acc + c) + arr2.reduce((acc, c) => acc + c); //something went wrong
  }
  // Sum Numbers
function sum (numbers) {
  "use strict";
  return numbers.reduce((acc, c) => acc + c, 0)
  
};
  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }
  function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }
  function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    return Math.floor(marks.reduce((acc , cv) => acc + cv)/marks.length)
  }
  function find_average(array){
    if(array.length > 0){
  return array.reduce((acc, cv) => acc + cv)/array.length
  }else {
    return 0
  }
  }
  var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }
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
//Filter
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
return arrayOfSheep.filter((sheep) => {
  if(sheep === true){
    return sheep
  }
}).length
}
// Other
//Conditionals
function rentalCarCost(d) {
  // Your solution here
  if(d >= 7){
    return (d * 40) - 50
  }else if (d >= 3){
    return (d * 40) - 20
  }else {
    return d * 40
  }
}
function bmi(weight, height) {
  if (weight / height ** 2 <= 18.5){
    return "Underweight"
  }else if (weight/height ** 2 <= 25.0){
    return "Normal"
  }else if (weight/height ** 2 <= 30.0){
    return "Overweight"
  }else{
    return "Obese"
  }
}
//Math Methods
function litres(time) {
  return Math.floor(time * .5);
}
//Min and max
var min = function(list){
    
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list)
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
//RegEx
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}