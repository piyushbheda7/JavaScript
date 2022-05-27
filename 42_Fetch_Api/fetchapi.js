// this is modern technique 
// using instead of xhr object

let fetchbtn = document.getElementById('fetchbtn');

let content = document.getElementById('content');

function getData() {
    // console.log('started getData');
    // url = "new.txt";
    // // fetch(url) - it returns a promise
    // // fetch api runs on the background
    // // it is asynchronous

    // fetch(url).then((response)=>{
    //     console.log('inside first then');

    //     return response.text();
    // }).then((data)=>{
    //     console.log('inside second then');
    //     console.log(data);
    // })


    // it is an get request 
    url = "https://api.github.com/users"
    fetch(url).then((Response) => {
        console.log('inside first then');
        return Response.json(); // it will parse the text and return as object
    }).then((data) => {
        console.log('inside second then');
        console.log(data);
    })
}

function postData() {
    url = "http://jsonplaceholder.typicode.com/comments?postId=1";
    data = '{"postId":"544","id":"3","name":"piyush","email":"piyushbheda8@gmail.com","body":"hello i am piyush and i am learning javascript through codewithharry youtube channer"}';
    params = {
        method: 'post',
        headers: {
            'content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(Response => Response.json())
    .then( data => console.log(data))
}

console.log('before');
getData();
console.log('after');

console.log('before');
postData();
console.log('after');