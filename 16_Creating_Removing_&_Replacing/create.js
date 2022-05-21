// ********* Creating ELement ********

let element = document.createElement('li')
console.log(element)

element.className = 'child'
element.id = 'createdLi'
element.setAttribute('title','mytitle')
element.innerText = 'li 5'

let ul = document.querySelector('.this')
ul.appendChild(element)
console.log(ul)

// let text = document.createTextNode('I am a text node')

// element.appendChild(text)
// console.log(element)

let elem2 = document.createElement('h3')
let tnode = document.createTextNode('this is a text node for h3 tag')
elem2.appendChild(tnode)
elem2.className = 'Heading3'
elem2.id = 'Heading3'
element.replaceWith(elem2)
console.log(element)

let myul = document.querySelector('#myul')
myul.replaceChild(elem2 , document.getElementById('fui'))
console.log(myul)

myul.removeChild(document.getElementById('lui'))

let pr = elem2.getAttribute('id')
console.log(pr)
pr = elem2.hasAttribute('id')
console.log(pr)
pr = elem2.removeAttribute('id')
console.log(pr)
pr = elem2.setAttribute('id' , 'Head3')
console.log(elem2.getAttribute("id"))

