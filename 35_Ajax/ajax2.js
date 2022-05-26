console.log('hello this is ajax tutorial')

document.getElementById('fetchbtn').addEventListener('click',func1);
document.getElementById('populate').addEventListener('click',func2);

function func1()
{
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , 'https://jsonplaceholder.typicode.com/todos/1' , true) ;
    
    xhr.onprogress = function(){
        console.log('on progress');
    }

    xhr.onreadystatechange = function()
    {
        console.log('ready state is : ',xhr.readyState)
    }

    xhr.onload = function()
    {
        if(this.status == 200) 
        {
        console.log(this.responseText)
        }
        else
        {
            console.log('some error')
        }
    }

    xhr.send()

}

function func2()
{
    console.log('pop handler');
    
    const xhr = new XMLHttpRequest();
    // xhr.open('GET' , 'https://dummy.restapiexample.com/api/v1/employees' , true) ;
    // xhr.open('GET' , "https://jsonplaceholder.typicode.com/todos/1 ", true) ;
    // xhr.open('GET' , "https://api.publicapis.org/entries", true) ;
    xhr.open('GET' , "https://dummyjson.com/products", true) ;

    xhr.onload = function()
    {
        if(this.status == 200) 
        {
            let obj = JSON.parse(this.responseText);
            console.log(obj.products[0].id);
            let list = document.getElementById('list');
            str = "";
            for(key in obj.products)
            {
                console.log(obj.products[key].brand);
                str += `<li>${obj.products[key].brand} </li>`
                
            }
            // for(key in obj)
            // {
            //    
            // }
            list.innerHTML = str ;
        }
        else
        {
            console.log('some error')
        }
    }

    xhr.send()
    console.log('we are done fetching employees');
    
}