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

//Find longest word in a array
function longest_word(str){
   const words = str.split(" ");
   let longest = "";
   for(let word of words){
    if(word.length > longest.length){
        longest = word;
    }
   }
   return longest;
}
console.log(longest_word("Hi how are you doing . Let's catch up once in a while"))


//check if element is included in array
function included(arr , target){
    return arr.includes(target)
}
console.log(included([1 ,2 , 3] , 2 ));
console.log(included([1 ,2 , 3] , 4 ));


//rotate an array
function rotate_array(arr , n){
    n = n%arr.length; //where n is greater than array length
    return [... arr.slice(n) , ...arr.slice(0,n)]
}
console.log(rotate_array([1,2,3,4,5],2));
console.log(rotate_array([1,2,3,4,5],7));

//All substrings of a string
function substrings(str){
    const sub = [];
    for(let i = 0 ; i<str.length ; i++){
        for(let j = i+1 ; j<=str.length ; j++){
            sub.push(str.slice(i,j));
        }
    }
    return sub;
}
console.log(substrings("abcd"));

//intersection of two arrays
function intersection(arr1,arr2){
    return arr1.filter(item => arr2.includes(item))
}
console.log(intersection( [1,2,3,4,5] , [2,4,1,6] ));


//group anagrams
function group_anagrams(str){
    const map = {};
    for(let word of str){
        const sorted_word = word.split("").sort().join("");
        if(!map[sorted_word]) map[sorted_word]= [];
        map[sorted_word].push(word);
    }

    return Object.values(map);
}
console.log(group_anagrams(["eat" , "ate" , "tea" , "tan" , "nat" , "date"]))


//most frequent element in array
function most_frequent(arr){
    const map = {};
    for(let i of arr){
        map[i]= (map[i] || 0) + 1;
    }
    let max = 0;
    let element=null;
    for(key in map){
        if(map[key]>max){
            max=map[key]
            element = key;
        }
    }
    return parseInt(element);
}
console.log(most_frequent([1,2,1,1,2,2,3,4,3,1,5,6,7,5,3,3,2,2,2]))