console.log('hello')

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