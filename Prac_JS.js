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

    {
        //converting object to map
        const obj = { 
            "mumbai" : 32,
            "chennai" : 62
        }
        const map = new Map(Object.entries(obj))
        console.log(map);
        console.log(obj);
    }


    {
        //Merging two maps
        const map1 = new Map([['a',1],['b',2]])
        const map2 = new Map([['c',3],['d',4]])
        const merged_map = new Map([...map1 , ...map2])
        console.log(merged_map)
    }

    {
        //inverting a map
        const map = new Map([
            ["apples" , 200],
            ["banana" , 300],
            ["oranges" , 400]
        ])
        const map1 =new Map();
        for(let [key,values] of map){
            map1.set(values,key)    
        }
        console.log(map)
        console.log(map1)
    }

}

{
    //Destructuring
    {
        const arr = [1,2,3,4,5,6,7]
        const [first,last]= arr
        console.log(first)
        const [...rest] = arr
        console.log(rest)
    }
    {
        const obj = {
            names : "hello",
            maiden_name : "world",
            hobbies : {
                    sports : "badminton",
                    racing : "cars"
            },
            fullname : (names , maiden_name)=>{console.log(`my name is ${obj.names} ${obj.maiden_name}`)}
        }
        const {maiden_name , hobbies : {sports} , fullname} = obj
        console.log(maiden_name , sports)
        console.log(fullname())

    }

}

//reference in object
{
    const obj = {
        names : "hello",
        maiden_name : "world",
        hobbies : {
                sports : "badminton",
                racing : "cars"
        },
        fullname : function(names , maiden_name){console.log(`my name is ${obj.names} ${obj.maiden_name}`)}
    }
    const x = obj; //x has reference to obj
    x.names = "Hi" //any updation of x will refelct in obj
    x.age = 25 ;
    delete obj.maiden_name;
    const {names ,age} = obj;
    console.log(names ,age);
    console.log(obj)
    const arr = Object.values(obj)
    console.log(arr)
}

{
    //array question
    const arr = ["george" , "joshua" , "sam"];
    const map = new Map();
    for(let x of arr){
        map.set(x,x.length)
    }
   console.log(map)
}

{
    //max element using reduce()
    const arr = [1,2,3,4,5,6,7,8];
    function maxel(arr){
        return arr.reduce((current , max) => current>max?current:max , -Infinity)
    }
    console.log(maxel(arr))
    }


    {
        //remove duplicates from array
        const arr = [5,5,1,1,1,2,3,4,5,5,6,7,7,7,8,8]
        const newarr = [...new Set(arr)].sort((a,b) => a-b)
        console.log(newarr)
    }

    {
        //slice and splice
        const arr = ["banana" , "apple" , "orange" , "kiwi"];
        console.log(arr.slice(0,2));
        console.log(arr.splice(1,2,"strawberry"))
        console.log(arr)
    }



    //mapping elements in array and doing it double
    {
        function double(arr){
            return arr.map((item) => item*item)
        }
        console.log(double([1,2,3,4,5,6]))
    }


    {
        //flattening the nested array
        const arr = [1,2,[3,4,[5,6]]]
        console.log(arr);
        console.log(arr.flat(Infinity));
    }