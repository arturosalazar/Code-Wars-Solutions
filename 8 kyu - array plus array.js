/*
  Orig Date: 4/17/18
  Instructions -I'm new to coding and now I want to get the sum of two arrays...
  actually the sum of all their elements. I'll appreciate for your help.

  P.S. Each array includes only integer numbers. Output is a number too.
*/

//My Solution:

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  
  arr1.forEach(function(item) {
    sum += item;
  });
  
  arr2.forEach(function(item) {
    sum += item;
  });
  
  return sum;
}
