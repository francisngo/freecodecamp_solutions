/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

// Imperative Solution
function diffArray(arr1, arr2) {
  var newArr = [];
  // loop through first array to find elements that do not exist in second array
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      // push the element that does not exist in second array to newArr
      newArr.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    // loop through second array to find elements that do not exist in first array
    if (arr1.indexOf(arr2[j]) === -1) {
      // push the element that does not exist in first array to newArr
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Declarative Solution
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
    item => !arr1.includes(item) || !arr2.includes(item)
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
