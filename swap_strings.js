//swap two strings without third variable
let str1 = "Hello";
let str2 = "World";
str1 = str1 + str2;
str2 = str1.substring(0,str1.length-str2.length);
str1 = str1.substring(str2.length);
console.log(str1);
console.log(str2);