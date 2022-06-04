//Instructions
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//Solution
function hoopCount (n) {
    // takes in an integer (no guidance on what type of int)
    // return a string for n's less than 10 or a different string for 10 or more
    // ((2), "Keep at it until you get it"), ((12), Great, now move on to tricks)
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
    }