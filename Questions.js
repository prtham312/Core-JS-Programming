// reverse a string
let str = "abcd";
let res = str.split("").reverse().join("");
console.log(res);

//check if string is palindrome
let str1 = "abba";
let res1 = str1.split("").reverse().join("");
if(str1==res1){ console.log("true");}
else {console.log("false");}