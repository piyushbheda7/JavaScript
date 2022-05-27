
// async function harry() // function with async is return a promise
// {
//     console.log('inside');
    
//     return 'harry'
// }
// console.log('before');
// let a = harry()
// console.log('After');
// console.log(a);
// console.log('last');



async function harry() // function with async is return a promise
{
    console.log('inside');
    const response = await fetch('https://api.github.com/users') //await also returns promise 
    // first async is wait for the await promise
    console.log('before response');

    const users = await response.json();
    console.log('users resolved');
    
    return users ;
}

console.log('before');
a = harry()
console.log('After');
console.log(a);
a.then(data => console.log(data))
console.log('last');


// flow is 
// before
// inside -> from here it see that there is await so it runs on background
// after 
// "after console.log(a)" - promise as pending 
// last
// "after all complete await will comes" 
// before response
// "after that await of respose.json() will execut"
// user resolved
// and then all console.log(a) again promise will print
