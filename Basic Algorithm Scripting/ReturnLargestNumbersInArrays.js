/*
Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

//Solution
function largestOfFour(arr) {
  var largestArr = [0, 0, 0, 0]; //variable to store largest array
  for (var i = 0; i < arr.length; i++) { //for loop to iterate through the outer array
    for (var j = 0; j <= arr[i].length; j++) { //for loop to iterate through inner array
      if (arr[i][j] > largestArr[i]) { // if element of inner array is larger than current largest number
        largestArr[i] = arr[i][j]; // then update the largestArr with the largest number
      }
    }
  }
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //[5, 27, 39, 1001]

//Solution with map() and reduce() method
//map() method creates a new array with the results of calling a provided function on every element in this array
//reduce() method applies a function against an accumulator and each value of the array (from left to right) to reduce it to a single value
function largestOfFour(arr) {
  return arr.map(function(group) { //map all items within the main array to a new array and return this array as the final result
    return group.reduce(function(prev, curr) { //within each inner array, we reduce its contents down to a single value
      return (curr > prev) ? curr : prev; // if current value is greater than previous value than return current otherwise return previous value
    }, 0); // 0 serves as the context for the first pLN in each sub array
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Solution III
function largestOfFour(arr) {
  return arr.map(function(innerArr) {
    return Math.max.apply(null, innerArr)
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Built a special callback function (using Function.bind method), that works like Math.max but has apply ability to take arrays as its arguments
//map through the elements inside the inner array
//callback function to find max of each inner array
//bind apply method to accept arguments in shape of an array
//pass null as a bogus context
