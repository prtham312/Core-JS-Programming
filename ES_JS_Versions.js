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

//reduce right
function reduce_r(arr){
    return arr.reduceRight((total,value) => total-value)
}
console.log(reduce_r([-10,1,2,3,4,5]))


//Every
function every_f(arr){
    return arr.every(num => num>2)
}
console.log(every_f([1,2,3,4,5]))

//Some
function some_f(arr){
    return arr.some(num => num>2)
}
console.log(some_f([1,2,3,4,5]))


//Last Index Of
//It seraches from last index of on array i.e. left to right
function last_index(arr , value){
    return arr.lastIndexOf(value);
}
console.log(last_index(["apple" , "mango" , "strawberry" , "papaya" , "apple" , "mango" ] , "mango"))



//Date Function
//milliseconds till now from january 1, 1970
console.log(Date.now());

//ISO Format
console.log(new Date().toISOString());


//getter property in objects
var person = {
    first_name : "Hello",
    last_name : "World",
    language : "NO" ,
    get fullName(){
        return `${this.first_name} ${this.last_name}`;
    },
    set lang(value){
        this.language = value;
    }    
}
Object.defineProperty(person ,"language" , {
    value : "en",
    writable : true,
    enumerable : true,
    configurable : true

});
console.log(person.fullName);
console.log(person.language);
// person.lang = "en";
console.log(person.language);
person.lang = "Hindi";
console.log(person.language);

function filter_arr(arr){
    return arr.map(num => num%2==0).reduce((num,total) => total+num);
}
console.log(filter_arr([1,2,3,4,5,6,7,8]))



//Creating a new object in existing object
const man = Object.create(person);
man.name = "kaise ho";
console.log(man.name);


//bind two objects
const human = {
    friend1 : "Raj",
    friend2 : "Diwas",
    fullName : function(){
            return `${this.friend1} and ${this.friend2} are best friends.`;
    }
}
const Animal = {
    friend1 : "Anik",
    friend2 : "Dhruv"
}
let fullName = human.fullName.bind(Animal);
console.log(human.fullName());
console.log(fullName());


//destructuring of array and objects
const arr = [1,2,3,4,5,6,7];
let [a ,b,...rest] = arr;
console.log(rest);
const obj = {
    first_name : "hi",
    last_name : "hello"
}
let {first_name , last_name} = obj;
console.log(first_name, last_name)


//class in js
class car {
        constructor(name  ,year){
            this.name = name;
            this.manufacture = year;
        }
}
const car1 = new car("ford", 1972);
const car2 = new car("honda" , 2019);
console.log(car1.manufacture);