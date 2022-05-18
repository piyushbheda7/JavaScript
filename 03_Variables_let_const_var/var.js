// let , var , const

// rules for creating javascript

/*
1. Cannot start with numbers
2. can start with letter , numbers, _ or $
3. are case senesitive
*/

// ************* var ********* 
var name = 'piyush' ;
console.log(name);
var name1 = "piyush's";
var name2 = `piyush's and piyush"s `;

var channel ;
channel = 'codewithharry';
var marks = 34 ;
console.log(name , channel , marks)
marks = 0 ; // variable value can changeable 

// -> var remains same in all program and can changeable and access in anywhere in program
// -> not different into a block of code


// ************** const **********
const city = 'Delhi';
console.log(city);
const ownersName = 'piyush';
// ownersName = "piyush's" ; -> cannot change the value
console.log(ownersName);

// *************** let ************
{
    let city = 'amreli';
    console.log(city);
}
// -> scope in block of code


// ********** Examples ********
const arr1 = [1 , 2 , 3 , 4 , 5 ]
arr1.push(6)
// arr1 = [ 10 , 20 , 30 ] -> cannot do this
console.log(arr1)

/* Most Common Programming case type

1. camelCase -> first small and then capital
2. kebab-case -> - between two different words
3. snake_case -> _ between two different words
4. PascalCase -> different word is first letter capital

*/