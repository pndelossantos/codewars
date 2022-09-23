//Instructions
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
//Solution
function maxDiff(list) {
    let sortList = list.sort((a,b) => b-a)
    if(sortList == 0){
      return 0
    }else {
      return sortList[0] - sortList[sortList.length-1]
    }
  };