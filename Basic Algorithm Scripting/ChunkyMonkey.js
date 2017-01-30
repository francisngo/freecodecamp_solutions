/*
Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

//Solution
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var i = 0;
  while (i < arr.length) { 
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//the slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end is not included).

/*
var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice(1, 3);

console.log(a);      // ['zero', 'one', 'two', 'three']
console.log(sliced); // ['one', 'two']
*/
