// local storage in application in local storage

localStorage.setItem("Key" , "value") 
localStorage.setItem("value" , 35)
localStorage.setItem("arr" , [1 , 2 , 3 , 4 , 5]) // it add as in string format
localStorage.setItem("arr" , JSON.stringify([1 , 2 , 3 , 4 , 5])) // it add as in array format

let item = localStorage.getItem('value') // return in a string
console.log(item)

item = JSON.parse(localStorage.getItem('arr')) // take object as input and return an array
console.log(item)

localStorage.removeItem('value')

// localStorage.clear();

// session storage  it is same as localstorage 
// functions are same as localstorage

// difference is that localStorage is permanantly store data but session is not 
// when webpage is loaded session storage will clear
