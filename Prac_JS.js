//Weak map
{
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
//weak map does not support iterations and values() , entries() and methods()
}



//weakSet
//it only contains object values
{
    const weakset = new WeakSet();
    let obj1 = {id : 1}
    let obj2 = {id : 2}
    weakset.add(obj1);
    weakset.add(obj2);
    console.log(weakset.has(obj1));
    console.log(weakset.has(obj1));
    obj1=null;
    console.log(weakset.has(obj1));

}



//Map
{
    //implementation
    const map = new Map();
    let obj1 = {id : 1}
    let obj2 = {id : 2}
    map.set(obj1);
    map.set(obj2 , "World");
    console.log(map.get(obj1))
    console.log(map.get(obj2))

    //itertaing through map
    const fruits = new Map([
        [1 , "banana"],
        [2 , "apple"],
        [3 , "papaya"]
    ])
    for( let [key,value] of fruits){
        console.log(`${key} : ${value}`)
    }


    
    {
        //Q1
        const map = new Map([
            ["apples" , 200],
            ["banana" , 300],
            ["oranges" , 400]
        ])
        map.set("apples" ,250)
        map.delete("oranges");
        console.log(map.has("banana"));
        console.log(map.size)
        console.log(map);
    }

}
