//Weak map
const weakmap = new WeakMap();
const obj1 = { id : 1}
const obj2 = { id : 2}
weakmap.set(obj1 , 'Jacob')  //set the value
weakmap.set(obj2 , 'Alex')
console.log(weakmap.get(obj1)); //fetch the value
console.log(weakmap.get(obj2));
console.log(weakmap.has(obj2)); // check if object is in weakmap or not
