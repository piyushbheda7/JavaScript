let a = document;

console.log(a)

a = document.all
console.log(a)

a = document.body
console.log(a)

a = document.forms
// a = document.forms[0] -> also can do like this to select specific form
console.log(a)

a = document.all
Array.from(a).forEach(function(element){
    console.log(element);
}) // here from(a) convert document object to array

a = document.all[0]
console.log(a)