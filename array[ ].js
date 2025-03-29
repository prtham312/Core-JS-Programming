//simple printing statement
console.log("hi");

//array initiated and performed tasks
const arr = [1,2,3,];
console.log(arr);
arr.pop();
arr.push(5);
console.log(arr);

// [...] spread operator is used to convert set back to array
const arr1 = [1, 2, 2, 3];
const uniqueArr = [...new Set(arr1)];
console.log(uniqueArr); // [1, 2, 3]


//sort array 
const arr2 = [3,2,4,7,1];
arr.sort((a,b)=>a-b)
console.log(arr2);

const arr3=[1,2,2,4,4,1,7,4,5,6];
const uniqArr = [... new Set(arr3)];
uniqArr.sort((a,b)=>a-b);
console.log(uniqArr);

//max in an array
const arr4=[1,2,4,6,8,6,2,9,7,12,4];
function max_element(arra){
   let a = Math.max(...arra);
   console.log(a);
}
max_element(arr4);


//Merge two arrays with sorting
const arr5 = [1,2];
const arr6 = [5,4];
function merged_arr(arr5,arr6){
    return [...arr5 , ...arr6].sort((a,b)=>a-b)
}
const arr7 = merged_arr(arr5,arr6);
console.log(arr7);

//finding frequency of an element in array
const arr8 = [1,2,2,2,1,3,4,3,23,2,2,2];
const target = 2;
function freq(arr8 , target){
    return arr8.filter(item => item==target).length;
}
console.log(freq(arr8,target));

//find sum of squares of number in array
const arr9 = [1,2,3,4];
function square(arr9){
    return arr.reduce((sum,num) => sum + num ** 2,0)
}
console.log(square(arr9));

//filter even numbers and sort them in array
const arr10 = [1,12,3,4,5,6,7,8,9,0];
function even_num(arr10){
    return arr10.filter(num => num % 2 === 0).sort((a,b)=>a-b);
}
console.log(even_num(arr10));

//third smallest number in an array
const arr11 = [1,2,3,4,5,6,7,8];
function third(){
    const sortedArr = arr11.sort((a, b) => a - b);
  return sortedArr[2]
}
console.log(third(arr11));


//convert elements into string
const arr12 = ["hello" , 12 , "how" , "are"];
console.log(typeof(arr12[1]));
const stringArray = arr12.map(element => element.toString());
console.log(typeof(stringArray[1]));
console.log(stringArray);
console.log(typeof(arr12))
const result = arr12.join("/");
console.log(result);


//shift method is used to removes the first element and moves other to lower indexes
//unshoft method adds new elements  in starting without moving and removing
const arr13 = ["banana" , "lemon"]
arr13.shift()
console.log(arr13);
arr13.unshift("banana")
console.log(arr13);
