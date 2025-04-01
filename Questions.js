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

//remove duplicates from array
function remove_duplicates(arr){
    return [... new Set(arr)]
}
const arr2 = [1,2,3,2,1,2,3,4,5,5,4,2,1,2,4];
let res2 = remove_duplicates(arr2);
console.log(res2);

//Strings are anagram
function anagram(str1, str2){
    return str1.split("").sort().join("") == str2.split("").sort().join("")
}
console.log(anagram("listen", "silent"));
console.log(anagram("listen", "silence"));

//check chars in string are unique
function unique_chars(str){
    let new_str = [... new Set(str)]
    return new_str.length == str.length
}
console.log(unique_chars("abcda"));
console.log(unique_chars("acfds"))