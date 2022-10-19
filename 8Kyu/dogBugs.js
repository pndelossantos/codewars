//Instructions
// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Good luck!

//Solution
// an integer that will always be greater than or equal to 1
// return a string based on the number of dogs 
// 
// creates a dog variable that contains an array with the various potential responses based on the amount of dogs
// creates a respond variable that is assigned the appropriate array element from dogs depending on the value of number, respond is then returned
function howManyDalmatians (number) {
    let dogs = [
      'Hardly any',
      'More than a handful!',
      'Woah that\'s a lot of dogs!',
      '101 DALMATIANS!!!'
    ]
    let respond = number <= 10 ? dogs[0]
                  : number <= 50 ? dogs[1]
                  : number == 101 ? dogs[3]
                  : dogs[2]
    return respond
  }