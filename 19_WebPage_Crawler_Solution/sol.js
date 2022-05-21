console.log('hello')

// put this in codewithharry websites console 

let a = document.links
console.log(a)
Array.from(a).forEach(function(element)
{
    if(element.href.includes('harry'))
    {
        if(element.href.includes('react'))
        {
            console.log(element.href)
        }
    }
    
})