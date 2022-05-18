// ********** Type Conversion & Coercion *******

// Type Conversion
let myVar ;
myVar = String(34) ;
console.log(myVar , typeof myVar);

let booleanVar = true ;
console.log(booleanVar , typeof booleanVar)
booleanVar = String(true)
console.log(booleanVar , typeof booleanVar)

let date = new Date()
console.log(date , typeof date)
date = String(new Date())
console.log(date , typeof date)

let arr = [1, 2, 3, 4, 5]
console.log(arr , arr.length , typeof arr)
arr = String([1, 2, 3, 4, 5])
console.log(arr , arr.length , typeof arr)

let i = 8 ;
console.log(i.toString()) // also do with above  

let stri = "3434";
console.log(stri , typeof stri)
stri = Number(stri);
console.log(stri , typeof stri)
stri = Number(false);
console.log(stri)

let str = Number([1,2,3,4,4,5]) // -> return NaN - not a number
console.log(str)

let number = parseFloat('34.098');
console.log(number.toFixed(4) , typeof number);
number = parseInt('34.098');
console.log(number , typeof number);
number = Number('34.098');
console.log(number , typeof number);

// Type Coercion

let myStr = '609';
let myNum = 31 ;
console.log(myStr + myNum)