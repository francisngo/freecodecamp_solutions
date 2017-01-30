/*
Repeat A String Repeat A String

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

//Solution
function repeatStringNumTimes(str, num) {
  var accumStr = '';
  while (num > 0) {
    accumStr += str;
    num--;
  }
  return accumStr;
}

repeatStringNumTimes("abc", 3);

//Solution with recursion
function repeatStringNumTimes(str, num) {
  if(num < 0) {
    return '';
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num -1);
  }
}

repeatStringNumTimes("abc", 3);

//Solution with Ternary
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);
