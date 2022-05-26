console.log('hello this is ajax tutorial')

document.getElementById('fetchbtn').addEventListener('click',func1)

function func1()
{

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // arguments 
    // 1st : it show how data will fetch from file (GET/Post)
    // GET - we only provide the url 
    // POST - we provide the url & data also so give respose on the basis of data 
    // 2nd : from which file data should fetch
    // 3rd : Async -> would you want to block your flow or continue (blocking request)
    // Async = true -> it will not bloc data or flow
    // this is for get request
    // xhr.open('GET' , 'new.txt' , true) ;
    xhr.open('GET' , 'https://jsonplaceholder.typicode.com/todos/1' , true) ;
    
    // this is for post request
    // xhr.open('POST' , 'http://dummy.restapiexample.com/api/v1/create' , true)
    // xhr.getResponseHeader('Content-type','application/json');

    //whta to do on progress (optional)
    // it is use for show the spinner
    xhr.onprogress = function(){
        console.log('on progress');
    }

    // before onload method comes we uses onreadystatechange method uses
    //  0 : unsent :client has been created open() not called yet
    // 1 : opened : open() has been called
    // 2 : Headers_received : send() has been called and headers and status are available
    // 3 : loading : Downloading , responseTxt holds partial data
    // 4 : done : the operation is complete
    xhr.onreadystatechange = function()
    {
        console.log('ready state is : ',xhr.readyState)
    }

    // what to do when response is ready
    // what to do on all data are ready 
    xhr.onload = function()
    {
        if(this.status == 200) // search on web that status in xmlhttpsrequest
        {
        console.log(this.responseText)
        }
        else
        {
            console.log('some error')
        }
    }

    // send the request
    xhr.send()

    // params = `{"name":"test3435"."salary":"123","age":"23"} `;
    // xhr.send(params);
}