/*
Title Case A Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

//Solution with For Loop
function titleCase(str) {
  str = str.toLowerCase();
  // "i'm a little tea pot";
  str = str.split(' ');
  // ["I'm", "a", "little", "tea", "pot"];
  for (var i = 0; i str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

titleCase("I'm a little tea pot");

//Solution with map() Method
//map() method creates a new array with the results of calling a provided function on every element in this array. Using map will call a provided callback function once for each element in an array, in order, and constructs a new array from the results
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  str = str.map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  });
  return str.join(' ');
}

titleCase("I'm a little tea pot");
