// ********** Primitive data types *********

//string
let name1 = 'harry';
console.log('my string is ' +name1);
console.log('data type is '+ typeof name1); // -> String

// Numbers
let mark = 94;
console.log('my mark is ' +mark);
console.log('Data type is '+ typeof mark); // -> Number

// Boolean
let isDriver = true ;
console.log('isDriver is ' +isDriver);
console.log("Data type is "+ typeof isDriver); // -> Boolean

// Null
let nullVar = null ;
console.log('nullVar is ' +nullVar);
console.log("Data type is "+ typeof nullVar); // -> object (Bogus data type) but still it is primitive data type

// undefined
let undef = undefined;
console.log('undef is ' +undef);
console.log("Data type is "+ typeof undef); // -> undefined

// ************ Reference Data Types*******

// Array
let myarr = [1, 2, 3, 4, 5, false, 'string'];
console.log('Myarr is ' +myarr)
console.log("Data type is "+ typeof myarr); // -> object

// Object Literals
let marks = {
    piyush : 94 ,
    harry : 99 ,
    Rohan : 80 ,
    'Rohan Das' : 88
}
console.log(marks);
console.log("Data type is "+ typeof marks); // -> object

// Function
function findName() {
    
}
console.log("Data Type of findName is "+typeof findName); // -> functions

let date = new Date();
console.log(date);
console.log(typeof date); // -> object