console.log('hello')

// Object Literal : Object Prototype is that object have already it built in functions
// by default you will get this functions

let obj = {
    name : 'piyush',
    marks : 88 ,
    address : 'Amreli'
}
// we can not change the prototype of a object literal
// obj.prototype.getName = function(){
//     return this.name
// } -> this can not done

console.log(obj)

function Obj(givenName)
{
    this.name = givenName;
}
// we can change the prototype of the constructor 
Obj.prototype.getName = function(){
    return this.name ;
} 

// this will set the name to name
Obj.prototype.setName = function(newName){
    this.name = newName ;
}

obj2 = new Obj('Piyush')
console.log(obj2)

// Object.prototype.getName -> new change global Object prototype changes
