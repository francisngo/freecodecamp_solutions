/*
Truncate A String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
*/

//Solution
function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
    //return a slice of string starting at character 0 and ending at num - 3 ( -3 so that we can subtract 3 characters to add '...')
  } else if (str.length > num && num <= 3) {
    //if string length is greater than num and num is within less than or equal to 3 we don't count our dots as characters. We return the same string above and endpoint of slice is num.
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//Solution with ternary
function truncateString(str, num) {
  if(str.length <= num) {
    //if the length of string is less than or equal to num than return string
    return str;
  } else {
    //or else, slice string starting at character 0, then if num is larger than 3 than we subtract 3 from num to add '...', otherwise end the variable at num and add '...'
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}
