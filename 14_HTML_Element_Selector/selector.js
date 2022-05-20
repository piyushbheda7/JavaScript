/*
Element Selector :
1. Single Element Selector
2. Multi Element Selector

*/

let element = document.getElementById('myFirst')
console.log(element)


// element = element.className
// console.log(element)

// element = element.classList // class in list format
// console.log(element)

console.log(element.hasChildNodes())
console.log(element.childNodes)
console.log(element.parentNode)
console.log(element.firstChild.data)

element.style.color = 'red' ;
element.innerText = 'Piyush is a good Boy' ;
// element.innerHTML = '<b> Piyush is a good Boy</b> ';

console.log(element.innerHTML)
console.log(element.innerText)

let sel = document.querySelector('b') // only first b tag will selected
console.log(sel) 

sel = document.querySelectorAll('.class')
sel = document.querySelectorAll('div')
console.log(sel)

let elems = document.getElementsByClassName('class')
elems = document.getElementsByClassName('red')
console.log(elems[0])

let le = document.getElementsByClassName('class')

console.log(le[1].getElementsByClassName('red')[0])

elems = document.getElementsByTagName('div')
console.log(elems)

Array.from(elems).forEach(function(element){
    element.style.color = 'red'
})

element = document.getElementsByClassName('red')
console.log(element)