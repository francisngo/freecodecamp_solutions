/*
Find The Longest Word In A String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

//Solution with For Loop
function findLongestWord(str) {
  var strSplit = str.split(' ');
  // [“The”, “quick”, “brown”, “fox”, “jumped”, “over”, “the”, “lazy”, “dog”]
  var longestWord = 0; // hold the length of the longest word
  for (var i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord) { // if length of current word is greater than the longestWord
      longestWord = strSplit[i].length; // then longestWord takes new value
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//Solution with sort() Method
//sort() method sorts the elements of an array in place and returns the array
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = strSplit.sort(function(a,b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//Solution with reduce() Method
//reduce() method applies a function against an accumulator and each value of the array (from left to right) to reduce it to a single value
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = strSplit.reduce(function(longest, currentWord) {
    if(currentWord.length > longest.length) {
      return currentWord;
    } else {
      return longest;
    }
  });
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
