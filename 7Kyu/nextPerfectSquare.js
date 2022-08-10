//Instructions
//Solution
function findNextSquare(sq) {
    var n = Math.sqrt(sq);
    return Number.isInteger(n)?(n+1)*(n+1):-1
  }