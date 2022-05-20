let a = document.getElementById('myFirst')
console.log(a)

a = document.querySelector('.container')
console.log(a.childNodes) //-> it also consider new line comments etc.....
console.log(a.children) // -> it will only consider tags

console.log(a.childNodes[0].nodeName)
console.log(a.childNodes[1].nodeName)
console.log(a.childNodes[0].nodeType)
console.log(a.childNodes[1].nodeType)

/* Node Types
1 - element
2 - attribute
3 - text node
8 - comment
9 - document
10 - doc Type
*/

let container = document.querySelector('div.container')
// console.log(container.children[1].children[0])

console.log(container.firstChild) // return text because of new line
console.log(container.firstElementChild) // return div element

console.log(container.lastChild)
console.log(container.lastElementChild)

console.log(container.childElementCount)

console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)
