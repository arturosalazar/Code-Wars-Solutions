/*
  Instrucitons -Can you find the needle in the haystack?

  Write a function findNeedle() that takes an array full of junk but containing one "needle"

  After your function finds the needle it should return a message (as a string) that says:

  "found the needle at position " plus the index it found the needle, so:

  JavaScript & TypeScript

  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

  should return

  "found the needle at position 5"
*/

// My Solution
function findNeedle(haystack) {
  var returnText = ''  //Need to declare the variable outside of the forEach loop
  haystack.forEach(function (item, index){
    if(item === "needle"){
      returnText = "found the needle at position " + index
    }
  })
  return returnText //return here so that the output can be tested
}
