console.log('hello')

// it is look like object 
// in form of key value pair
// we can use any type of key

// added in es6

const map = new Map();

const key1 = 'mystr' , key2 = {} , key3 = function(){} ;

// setting map value
map.set(key1 , 'this is a stirng');
map.set(key2 , 'this is a blank object');
map.set(key3 , function(){
    return `this is empty function`;
});

console.log(map)

// Getting the values from a Map

let value1 = map.get(key1)
let value2 = map.get(key2)
let value3 = map.get(key3)

console.log(value3())

// Get the size of the map
console.log(map.size)

//you can loop using for..of to get keys and values
for (const [key,value] of map) {
    console.log(key , value);
    
}

// get only keys
for (const key of map.keys()) {
    console.log(key)
}

// get only valuse
for (const value of map.values()) {
    console.log(value)
}

// using for each
map.forEach((value , key)=>
{
    console.log('key is ', key)
    console.log('value is ', value)
})

// convert map to array -> it convert array of arrays
let myArray = Array.from(map)
console.log(myArray)

let myArrayKey = Array.from(map.keys())
console.log(myArrayKey)

let myArrayValue = Array.from(map.values())
console.log(myArrayValue)

for (let index = 0; index < map.size; index++) {
    console.log(map.keys() , map.values())
}