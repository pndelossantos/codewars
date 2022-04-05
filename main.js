//Codewars 8 Kyu Fundamentals

//Strings

//.repeat Method
function repeatStr (n, s) {
    return s.repeat(n);
  }

// Sum of Positives
function positiveSum(arr) {
  let newArr = arr.filter(num => num > 0)
  return newArr.reduce((a, b)=>a+b);
}  

// Square Sum
// take in an array
function squareSum(arr) {
// take each element 

//square sum
}

// Sheep Counting

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