// reverse a string
let str = "abcd";
let res = str.split("").reverse().join("");
console.log(res);

//check if string is palindrome
let str1 = "abba";
let res1 = str1.split("").reverse().join("");
if(str1==res1){ console.log("true");}
else {console.log("false");}

//first and last elements of array after sorting
const arr = [ 2 , 3 , 1 , 4 , 7 , 5 , 9 , 6];
function sortArray(arr){
   return arr.sort((a,b) => a-b);
}
let n = arr.length;
sortArray(arr);
console.log(`First element is ${arr[0]} and last element is ${arr[n-1]}`);