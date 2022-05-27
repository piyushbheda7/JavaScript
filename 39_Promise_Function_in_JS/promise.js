// Promise :
// - Resolve 
// - Reject
// - Pending

function func1()
{
    return new Promise(function(resolve , reject)
    {
        setTimeout(() => {
            const error = true ; 
            if(!error)
            {
                console.log('Function: your promise has been resolved');
                resolve()
            }
            else
            {
                console.log('Function: Your Promise has not been resolved');
                reject('Sorry Not Fulfilled');
                
            }
        }, 1000);
    })
}

func1().then(function() // Here Then is For resolve function
{
    console.log('Piyush: Thanks for resolving');    
}).catch(function(error) // Here Catch is for Reject Function 
{
    console.log('piyush : very bad',error);
})