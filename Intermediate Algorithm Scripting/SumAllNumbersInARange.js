/*
Sum All Numbers in a Range

We'll pass an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

// Solution
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  //max = 4
  var min = Math.min(arr[0], arr[1]);
  //min = 1
  var sum = 0;
  for ( var i = min; i <= max; i++) {
  // i = 1; 1 <= 4; 1++
  // i = 2; 2 <= 4; 2++
  // i = 3; 3 <= 4; 3++
  // i = 4; 4 <= 4; 4++
    sum += i;
    // (sum)0 + (i)1 = 1
    // (sum)1 + (i)2 = 3
    // (sum)3 + (i)3 = 6
    // (sum)6 + (i)4 = 10
  }
  return sum;
}

sumAll([1, 4]); // should return a number (10)
