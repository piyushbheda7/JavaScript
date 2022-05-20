// ********** functions *******

function greet(name , tnx ='tnx') {
    let str = `Happy Birthday ${name} and ${tnx}`;
    console.log(str);
    return str.length;
}

let var1 = greet('piyush' , 'tnx a lot');

console.log(var1)

let val = greet('piyush')
console.log(val)

const myObj = {
    name : 'skillf',
    Game : function () {
        return 'GTA' ;
    }
}

console.log(myObj.Game())

let arr = [ 'fruits' , 'vegetable' , 'furniture'];

arr.forEach(function (element , index) {
    console.log(index , element);
})