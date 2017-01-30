/*
Confirm The Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

//Solution
//substr() method returns the characters in a string beginning at the specified location through the specificed number of characters
function confirmEnding(str, target) {
  return target === str.substr(str.length - target.length);
}

confirmEnding("Bastian", "n");

/*
Note
str.substr(start [, length]);

substr() operates through the end of the string if the second optional paramenter is not specified. substr() calculates the index of first matching character from the string's end if the specified location is negative. Using the '-' operator in front of target.length makes it negative to extract the ending segment of str with the same size as target, compare it and then return the value of boolean expression
