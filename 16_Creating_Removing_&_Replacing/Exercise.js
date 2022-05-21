let ele = document.createElement('h1')
let text = document.createTextNode("Go To CodeWithHarry")
ele.appendChild(text);
console.log(ele)

let eleparent = document.createElement('a')
eleparent.appendChild(ele)
eleparent.setAttribute('href' , '//codewithharry.com')

let body = document.querySelector('body')
body.append(eleparent)