//Strict Mode
function strict(){
"use strict"; //for stricter parsing and error handling
let x = 10;
return x;
}
console.log(strict());

//Char at position
let str = "Hello World";
console.log(str.charAt(3));

//reduce array
function reduces(arr){
    return arr.reduce((total , num) => total + num , 0)
}
console.log(reduces([1,2,3,4,5]))