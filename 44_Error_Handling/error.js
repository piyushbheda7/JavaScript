let a ;

if(a != undefined)
{
    throw new Error("This is not undefined")
}
else
{
    console.log('This is Undefined');
    
}

try {
    console.log('we are inside try block');
    functionSum();
} catch (error) {
    console.log('are you ok');
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    
} finally{
    console.log('this will finally execut');
    
}

// Type of Error in Js
// 1. reference Error - An illegal reference has occured
// 2. Syntax Error - a syntax error has occured
// 3. TypeError - a type error has occured
// 4. URlError - an error in encodeURl() has occured
// 5 . Eval Error - an error has occurred in the eval() function
// 6 .Range error - A number "Out of Range" has occured