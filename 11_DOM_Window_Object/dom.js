// ********* DOM *********
// window is global object. we can use without writting window. in window.innerHeight

let a = window.document;
// window.alert("this is an alert")

// a = prompt('This will destroy your computer ')
// console.log(a);

// a = confirm('are you sure you want to delete this page ')
// console.log(a)

let b = window.innerHeight ; // same as only using innerHeight 
let c = window.innerWidth ; // same as only using innerwidth

let x = scrollX ;
let y = scrollY ;

console.log(a)
console.log(b)
console.log(c)
console.log(x)
console.log(y)

a = location ;
b = location.toString();
console.log(a)
console.log(b)

a = location.href
location.href = '//facebook.com'
location.host
location.hostname

history
history.length
history.go(-1) // redirect last event
