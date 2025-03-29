//Finding a string through index
//returns -1 if does not find a word
let text = "Hello my name is Pratham Bansal";
let index = text.indexOf("name")
console.log(index);


//Finding the last occurence of a word
let text1 = "Hello Hi Hello , How Are You Hello"
let index1 = text1.lastIndexOf("Hello");
console.log(index1);

/*search function can also be used 
but it does not take second parameter of starting index while other does
also search is more helpful in finding powerful search values */

let text2 = "The rain in SPAIN stays mainly in the plain";
const array = text2.match(/ain/g);
console.log(array)