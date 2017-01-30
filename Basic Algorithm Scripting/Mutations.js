/*
Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

//Solution
//indexOf() method returns the index within the calling String object of the first occurence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
// if any letter of the test word searched is -1 it means the letter doesn't exist in the word than return false otherwise return true
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]); //should return false

//Solution II
function mutation(arr) {
  return arr[1].toLowerCase().split('').every(function(letter) {
    return arr[0].toLowerCase().indexOf(letter) != -1;
  });
}

mutation(["hello", "hey"]); //should return false

//every() will basically give you letter by letter to compare, which we do by using indexOf() on the first string. indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.
