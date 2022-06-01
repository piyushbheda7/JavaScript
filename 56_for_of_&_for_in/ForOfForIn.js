console.log('hello')

let people = ['piyush' , 'jay' , 'hardip' , 'alay' , 'raj' , 'prince']

let obj = {
    name : 'piyush',
    language : 'javascript',
    role : 'Developer'
}

let mystr = 'This is my String';

// traditional for loop

for (let i = 0; i < people.length; i++) {
    console.log(people[i]); 
}


for (let index = 0; index < Object.keys(obj).length; index++) {
    console.log(obj[Object.keys(obj)[index]]);
    
}

for (let index = 0; index < mystr.length ; index++) {
    console.log(mystr.charAt(index));
  
}

// using forin loop we can iterate an object , a string and an array also

// for (const key in object) { //here key give index value
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const ele in people) {
        console.log(people[ele])
}

for (const key in obj) {
    console.log(obj[key]);
}


for (const char in mystr) {
       console.log(mystr[char])
}

// using for of loop

for (const iterator of people) { // iterator give the value of array and objects
    console.log(iterator);
}

// for (const value of obj) {
//     console.log(value)
// }

for (const char of mystr) {
    console.log(char)
}