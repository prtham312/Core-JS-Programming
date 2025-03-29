//simple printing statement
console.log("hi");

//array initiated and performed tasks
const arr = [1,2,3,];
console.log(arr);
arr.pop();
arr.push(5);
console.log(arr);

// [...] spread operator is used to convert set back to array
const arr = [1, 2, 2, 3];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3]


//sort array 
const arr = [3,2,4,7,1];
arr.sort((a,b)=>a-b)
console.log(arr);

const arr=[1,2,2,4,4,1,7,4,5,6];
const uniqArr = [... new Set(arr)];
uniqArr.sort((a,b)=>a-b);
console.log(uniqArr);

//max in an array
const arr=[1,2,4,6,8,6,2,9,7,12,4];
function max_element(arra){
   let a = Math.max(...arra);
   console.log(a);
}
max_element(arr);


//Merge two sorted arrays
const arr1 = [1,2];
const arr2 = [5,4];
function merged_arr(arr1,arr2){
    return [...arr1 , ...arr2].sort((a,b)=>a-b)
}
const arr3 = merged_arr(arr1,arr2);
console.log(arr3);

//finding frequency of an element
const arr = [1,2,2,2,1,3,4,3,23,2,2,2];
const target = 2;
function freq(arr , target){
    return arr.filter(item => item==target).length;
}
console.log(freq(arr,target));

//find sum of squares of number
const arr = [1,2,3,4];
function square(arr){
    return arr.reduce((sum,num) => sum + num ** 2,0)
}
console.log(square(arr));

//filter even numbers and sort them
const arr = [1,12,3,4,5,6,7,8,9,0];
function even_num(arr){
    return arr.filter(num => num % 2 === 0).sort((a,b)=>a-b);
}
console.log(even_num(arr));

//third smallest number in a array
const arr = [1,2,3,4,5,6,7,8];
function third(){
    const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[2]
}
console.log(third(arr));
