/*
Factorialize A Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

//Solution (recursive)
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

//Solution II (iterative)
function factorialize(num) {
  var count = 1;
  for(var i = 1; i <= num; i++) {
    count *= 1;
  }
  return count;
}

factorialize(5);
