//Instructions
// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0
//Solution
function sakuraFall(v) {
    // takes in an integer v can be any int
    // return an int, 0 for values of v less than 0 and the amount of time the petal will take to fall at different v's
    // ((10) 40)
    // checks for values greater than 0
      if(v > 0){
    // determines what the rate of following is compared to the 5/80 ratio and then returns the rate based on v
      return +(80/(v * .2)).toFixed(0)
      }else {
        return 0
      }
    }

    function sakuraFall(v) {
        return v <= 0 ? 0 : 400 / v;
      }
