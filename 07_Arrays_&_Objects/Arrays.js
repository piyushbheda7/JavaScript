// ********** Arrays ********

let marks = [ 99 , 88 , 67 , 80, 92];

const fruits = [ 'Orange' , 'Apple' , 'Banana' , 'Pineapple'];

const mixed = [ 23 , 56 , 'str' , [3 , 5]];

const arr = new Array(23, 123 , 21 , 'Orange');

console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(arr);
console.log(arr[2]);

console.log(marks.length)

console.log(Array.isArray(mixed));

marks[0] = 89 ;
console.log(marks[0])

let arrElement = arr[0];
console.log('Element :' , arrElement)

let value = marks.indexOf(67);
console.log(value)

marks.push(35); // -> add at last
console.log(marks);

marks.unshift(100); // -> add at starting
console.log(marks);

marks.pop(); //-> last remove
console.log(marks);

marks.shift(); //-> first remove
console.log(marks); 

marks.splice(1 ,2) //-> start from 1 and remove 2 elements
console.log(marks)

marks.reverse();
console.log(marks);

let marks2 = [1 , 2, 4 ]
marks = marks.concat(marks2);
console.log(marks)

// ********* Object *********

let myObj = {
    'first name1' : 'Piyush' ,
    name : 'harry' ,
    channel : 'CodewithHarry' ,
    isActive : true ,
    marks : [1 , 5, 3 , 6]
}

console.log(myObj)
console.log(myObj.marks)
console.log(myObj['marks'])
console.log(myObj['first name1'])