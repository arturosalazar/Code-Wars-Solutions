/*
  Orig Date: 4/19/18
  Instructions
  Given a function ```animal```, accept 1 paramater as an object like this:

  ```
  {name:"dog",legs:4,color:"white"}
  ``` 

  and return a string like this:

  ```
  "This white dog has 4 legs."
  ```
*/

//My Solution
function animal(obj){
  return "This " + obj.color.toString() + " " + obj.name.toString() + " has " + obj.legs.toString() + " legs."
}



