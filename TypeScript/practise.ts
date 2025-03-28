//Write a TypeScript program to declare a number, string, and boolean variable and print their values.
let name : string = "Aryan";
let age  = 10;
let isStudying : boolean = true;


//special type  : unknown
let value : unknown = " hello how are you";
if(typeof value === 'string'){
    console.log(value.toUpperCase());
}


export {}