
// Creating a Regular Function
const harry = function()
{
    console.log('This is inside harry function');
}

harry()


// Creating a Arrow Function 
let hiHarry = ()=>{
    console.log('hi harry ');
}

hiHarry()


// function returning something
const greeti = function(){
    return 'good morning' ;
}

console.log(greeti());

const greet = ()=>{
    return 'good morning'
}
console.log(greet());

// one liners do not require braces/return
// One line will automatically return
const greete = ()=> "Good Morning" ; // if we want to return something we don't need to write return keyword
console.log(greete());

const g = ()=> ({name: 'piyush'});
console.log(g())

const gr = name => "Good Morning " + name ;
console.log(gr())

// default value -> also use parantheses to define default value
const gre = (name='piyush') => "Good Morning " + name ;
console.log(gre())


// use parantheses when more than one argument
const gree = (name , ending) => "Good Morning " + name + ending;
console.log(gree('piyush' , 'good'));
