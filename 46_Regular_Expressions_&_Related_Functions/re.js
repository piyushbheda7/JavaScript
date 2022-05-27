console.log('this is my console');
// it matches in the string
let reg = /javascript/; // ->this is a regular expression literal

// for search in all string of perform some operation we need to use some flags  and it will put into reg at end after slash(/)

reg = /javascript/g ; // global search 
// reg = /javascript/i ; // case insensitive search & return what is in string

console.log(reg);

console.log(reg.source)  // what inside R.E.

let s = "javascript is the powerfull language and most widely used language and also javascript && JavaScript"

// functions to match expressions
// 1.exec() - this function will return an array for match for null for no match

let result = reg.exec(s)
console.log(result);
console.log(result.input);
console.log(result.index);

result = reg.exec(s)
console.log(result);

result = reg.exec(s)
console.log(result);

// 2.test - this function will return true of false 

let result2 = reg.test(s);
console.log(result2);

// 3.match - it is same as exec but it is applied on string
// it return an array of mathced item
// let result3 = reg.match(s) ---> this is wrong 
let result3 = s.match(reg)
console.log(result3);

// 4.search - return index of first match else -1
// let result4 = reg.search(s) ---> this is wrong
let result4 = s.search(reg);
console.log(result4);

// 5. Replace - returns new replaced string with all the replacements 
let result5 = s.replace(reg,'SHUBHAM')
console.log(result5);