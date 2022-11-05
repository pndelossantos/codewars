//Instructions
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.
//Solution
function divCon(x){
    let nums = []
    let strings = []
    
    x.filter(e => {
      if(typeof(e) === 'number'){
        nums.push(e)
      }else{
        strings.push(e) 
      }
    })
  return nums.reduce((acc,cv) => acc + cv, 0) - strings.reduce((acc,cv) => acc + Number(cv), 0)
  }