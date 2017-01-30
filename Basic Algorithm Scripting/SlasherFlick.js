/*
Slasher Flick

Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/

//Solution
//splice() method changes the content of an array by removing existing elements and/or adding new elements
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2); //should return 3

//Solution II
//slice() method returns a shallow copy of a portion of an array into a new array object
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2); //should return 3
