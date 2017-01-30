/*
Reverse A String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

//Solution
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

/*
Explanation:
The split() method splits a string object into an array of strings by separating the string into substrings.
str.split([separator[, limit]]);
separator (optional): specifies the character(s) to use for separating the string
limit (optional): integer specifying a limit on the number of splits to be found. 
