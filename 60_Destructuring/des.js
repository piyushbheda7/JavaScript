let a , b ;
[a , b] = [34 , 56]

console.log(a , b);

[a , b ,c,  ...d] = [1 , 2 ,3 , 4, 5 ,6 ,7 ,8 , 9, 10]
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// a -> 1
// b -> 2
// c -> 3
// d -> remaining all


({a , b , c , ...d} = {a:34 , b:345 , c:67 , d:45 , e:34})
console.log(a , b , c , d)

// a = 34 
// b = 345
// c = 67
// d = {
//     d : 45 ,
//     e : 34
// }

const fruits = ['fruits' , 'bananas' , 'Mangoes']
[a , b , c] = fruits
console.log(a , b , c )


// Object Desructuring
let laptop = {
    model : 'Hp Pavilion',
    age : "23 days",
    gender: "male",
    net: 1233,
    start : function(){
        console.log('started')
    }
}

const {model , age , gender} = laptop
console.log(model , age , gender);
