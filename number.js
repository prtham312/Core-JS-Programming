//convert a number to a string
let num = 35;
console.log(num.toString());
console.log(typeof(num.toString()));

//round off a number
let x = 3.5654
console.log(x.toFixed());
console.log(x.toFixed(1));
console.log(x.toFixed(2));
console.log(x.toFixed(3));
console.log(x.toFixed(5));

//setting up a precision
let y=23.21323131;
console.log(y.toPrecision());
console.log(y.toPrecision(2));
console.log(y.toPrecision(3));
console.log(y.toPrecision(5));
console.log(y.toPrecision(6));


//to return a number from variable
console.log(Number("100"))
console.log(typeof(Number("100")))
console.log(Number("hello"))
console.log(Number("10.40"))


//parse a string and returns a number but only the first number,  also ignores whitespaces in starting
console.log(parseInt("   19"))
console.log(parseInt("18.32"))
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));
