//Weak map
const weakmap = new WeakMap(); //always has object as a key and and has weak reference to them
const obj1 = { id : 1}
const obj2 = { id : 2}
weakmap.set(obj1 , 'Jacob')  //set the value
weakmap.set(obj2 , 'Alex')
console.log(weakmap.get(obj1)); //fetch the value
console.log(weakmap.get(obj2));
console.log(weakmap.has(obj2)); // check if object is in weakmap or not

//deleting the weakmap object
weakmap.delete(obj2)
console.log(weakmap.has(obj2)); // returns false as object has been delete

//private properties of weakmap
//data in private property can only be accessed by its instance
const privateData = new WeakMap();
class Counter {
    constructor(){
        privateData.set(this , {count : 0});
    }

    increment(){
        const incr = privateData.get(this);
        incr.count++;
        console.log(`The count is ${incr.count}`)
    }

}
const cntr = new Counter();
cntr.increment();
cntr.increment();