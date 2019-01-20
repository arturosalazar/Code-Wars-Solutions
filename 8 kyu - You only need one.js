/*
  Orig Date: 4/24/18
  
  You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value.

  Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

  Starting Code:
  function check(a,x){};
*/

//My Solution

function check(a,x){
  var trueOrFalse = false;
  
  //check each item in array using forEach
  a.forEach(function (arrayVal){ 
    if (arrayVal === x){
      trueOrFalse = true; //if item is in array, trueOrFalse becomes true
    }
  });
  
  return trueOrFalse; //return whether or not array contains x or not

}; 
