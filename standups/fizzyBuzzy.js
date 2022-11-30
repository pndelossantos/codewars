//Instructions
// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//Solution
function FizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 15 === 0){
            console.log("FizzBuzz")
        }else if(i % 5 === 0){
            console.log("Buzz")
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else{
            console.log(i)
        }
}
}