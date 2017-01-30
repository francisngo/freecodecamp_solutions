/*
Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numberals answers should be provided in upper-case.
*/

// Solution
function convertToRoman(num) {

  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var decimal =[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var result = '';

  for (var i = 0; i < decimal.length; i++) {
    // loop over every element of arrays
    while (decimal[i] <= num) {
      // keep trying the same nmber until it doesn't fit anymore
      result += roman[i];
      // add the matching roman number to result string
      num -= decimal[i];
      // remove the decimal value of the roman number from our number
    }
  }
  return result;
}

convertToRoman(36); // returns 

// Solution convertToDecimal
function convertFromRoman(str) {

  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var decimal =[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var result = 0;

  for (var i = 0; i < decimal.length; i++) {
    // checking for the first characters in the string
    while (str.indexOf(roman[i]) === 0) {
      // adding the decimal value to result counter;
      result += decimal[i];
      // remove the matched Roman letter from the beginning
      str = str.replace(roman[i], '');
    }
  }
}

convertFromRoman("LXXXVII"); // returns 87
