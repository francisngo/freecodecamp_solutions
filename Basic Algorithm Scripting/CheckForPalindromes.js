/*
Check for Palindromes

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

//Solution
function palindrome(str) {
  var RegEx = /[\W_]/g; // or var RegEx = /[^A-Za-z0-9]/g;
  // removes punctuation and make string lowercase
  var lowerStr = str.toLowerCase().replace(RegEx, '');
  //toLowerCase() = a man, a plan, a canal. panama
  //replace() = amanaplanacanalpanama
  var reverseStr = lowerStr.split('').reverse().join('');
  //amanaplanacanalpanama
  return reverseStr === lowerStr;
  //amanaplanacanalpanama === amanaplanacanalpanama
}

palindrome("A man, a plan, a canal. Panama");

/*
Note:
\W removes all non-alphanumeric characters
- \W matches any non-word character
- \W is equivalent to [^A-Za-z0-9_]
- \W matches anything that is not enclosed in the brackets

[^A-Z] matches anything that is not enclosed between A and Z
[^a-z] matches anything that is not enclosed between a and z
[^0-9] matches anything that is not enclosed between 0 and 9
[^_] matches anything that does enclose _

g flag is for global search
*/
