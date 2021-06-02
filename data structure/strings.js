/*
!Strings are immutable in javascript => So try converting the strings into array
*/

//Reverse a string and convert to a number
no1 = "2471";
no1 = parseInt(no1.split("").reverse().join(""));
console.log(no1)

let myMap = new Map();
myMap.set('jessie',0);
if(myMap.has('jessie')){
    myMap.get('jessie').value++
    console.log(myMap.get('jessie'))
}