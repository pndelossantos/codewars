//Instructions
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

//Solution
function saleHotdogs(n){
    // takes in an integer greater than 0
    // returns n times the price based on n
    // ((3) 300)
    // check n and then do appropriate math
      return  n < 5 ? n * 100 : n >= 10 ? n * 90 : n * 95
    }