// it is a primitive data 
// if symbol is not there in the js so it become difficult to make unique variables

console.log('Symbols in java');

let syml = Symbol('My idenfifier');
let syml2 = Symbol('My idenfifier'); // both are consider as unique mean both are differents

console.log(syml)
console.log(typeof syml);

console.log(syml === syml2)

const a = 'this is'
const b = 'this is'

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('for k1')
const k2 = Symbol('for k2')

myObj = {}
myObj[k1] = 'piyush'
myObj[k2] = 'Rohan'

console.log(myObj);
console.log(myObj[k1]);
//console.log(myObj.k1); // !! ALEART !! : cannot do this to et rohan because it is same as myObj["k2"] -> here it k1 act as string in this myObj.k1


// symbols are ignored in for in loop
// for (key in myObj) {
//     console.log(key , myObj[key]);
// }
// it is not working


console.log(JSON.stringify(myObj));