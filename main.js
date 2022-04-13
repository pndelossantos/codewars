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
//Name shuffler

function nameShuffler(str){
  //Shuffle It'
  return str.split(' ').reverse().join(' ')
}
// remove string spaces
function noSpace(x){
  return trimmedStr = x.split(' ').join('')
  
  }

//.repeat Method
function repeatStr (n, s) {
    return s.repeat(n);
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
// Other

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