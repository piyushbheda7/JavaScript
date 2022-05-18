// ********* Strings ************

let name1 = 'Piyush';
let greeting = 'Good Morning';
console.log(greeting + " " + name1 )

let html ;
html = "<h1> This is Heading </h1>" +
       "<p> This is My Para </p>" ;
console.log(html)

html = html.concat(' this ' , 'para');
console.log(html)

console.log(html.length)
console.log(html.toLowerCase())
console.log(html.toUpperCase())
console.log(html)

console.log(html[0])
console.log(html[1])
console.log(html[2])

console.log(html.indexOf('this'))
console.log(html.indexOf('adflsadg'))
console.log(html.indexOf('is'))
console.log(html.lastIndexOf('is'))

console.log(html.charAt(0))

console.log(html.endsWith('para'))

console.log(html.includes('is'))

console.log(html.substring(0 , 23))

console.log(html.slice(4)) // except first four character
console.log(html.slice(-4)) // last four character
console.log(html.slice(23)) // except first 23 character
console.log(html.slice(0, 23))

console.log(html.split(' ')) //return array

console.log(html.replace('this' , 'it')) // replace only first 'this' word 
console.log(html.replaceAll('This' , 'it')) // replace all 'this' word with 'it' word

let fruit1 = 'orange' ;
let fruit2 = 'Apple';
let myHtml = `Hello ${name1}
              <h1> This is heading </h1>
              <p> You Like ${fruit1} and ${fruit2}
              
              `;
console.log(myHtml) // -> it will print in the console

// document.body.innerHTML = myHtml -> it will print one the webpage