/*
Find The Longest Word In A String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

//Solution (for loop)
function findLongestWord(str) {
  var strSplit = str.split(' ');
  // [“The”, “quick”, “brown”, “fox”, “jumped”, “over”, “the”, “lazy”, “dog”]
  var longestWord = 0; //hold the length of the longest word
  for (var i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord) { // if length of current word is greater than the longestWord
      longestWord = strSplit[i].length; // then longestWord takes new value
    }
  }
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

//Solution (sort() Method)
