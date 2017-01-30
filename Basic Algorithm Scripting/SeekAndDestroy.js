/*
Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

//Solution
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments).splice(1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
Note:
'arr' is considered a parameter while '[1, 2, 3, 1, 2, 3], 2, 3' is the argument of destroyer.
*/
