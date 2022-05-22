
const proto = {
    slogan : function(){
        return 'This Company is the best' ;
    },
    changeName : function(givenName)
    {
        this.name = givenName ;
    }
}

const eSparkBase = Object.create(proto); // using this proto prototype we are make object whose name is eSparkBase
// and we are added prototype and their names are slogan & changeName 

// using this functionality we can change the content of object

eSparkBase.name = 'Piyush';
eSparkBase.role = 'Developer';
// eSparkBase.changeName('Jay');

// alternate implementation
const eSpark = Object.create(proto , {
    name : {value: "Piyush" , writable : true},
    role : {value: "Programmer"}
})
eSpark.changeName('piyush2')  
console.log(eSparkBase);
console.log(eSpark)



// Employee constructor

function Employee(name , salary , experience)
{
    this.name = name ;
    this.salary = salary ;
    this.experience = experience ;
}

Employee.prototype.slogan = function(){
    return `This Company is the best. Regards, ${this.name}` ;
}

let   Employee1 = new Employee('piyush' , 50000 , 0)
console.log(Employee1)

// programmer -> it is like calling the parent's fuction using call method
function Programmer(name , salary , experience , language)
{
    Employee.call(this , name , salary , experience)
    this.language = language
}

// inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor 
Programmer.prototype.constructor = Programmer ;

let piyush = new Programmer('piyush' , 50000 , 2 , 'js')
 
console.log(piyush)