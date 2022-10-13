//Instructions

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

//Solutions
// 3 variables, all integers
// return the result of multiplying the the three variables in an integer format
// ((2, 3. 3) 18)
// uses the * operator to multiple variables against each other
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      // Calculate Volume
      return length * width * height
    }
  }