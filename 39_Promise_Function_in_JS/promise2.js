// callback as promise function

const students = [
    {
        name : 'piyush',
        subject : 'javaScript'
    },
    {
        name : 'Raj' , 
        subject : 'Ml'
    }
]

// this is using callbackfunction

// function enrollstudent(student , callback)
// {
//     setTimeout(() => {
//         students.push(student);
//         console.log('successfully pushed');
//         callback();
//     }, 3000);
// }

function getstudent()
{
    setTimeout(() => {
        str = "";
        students.forEach(function(element){
            str += `<li>${element.name}</li>`
        });
        document.getElementById('student').innerHTML = str ;
        console.log('fetching is done');
        
    }, 1000);
}

function enrollstudent(student)
{
    return new Promise(function(resolve , reject)
    {
        students.push(student)
        setTimeout(() => {
            let error = false ;
            if(!error)
            {
                console.log('Sucessfully Pushed Data');
                resolve();
            }
            else
            {
                console.log('sorry can not pushed data');
                reject();
            }
        }, 3000);
    }
    )
}

let student = {name : 'Jay' , subject: 'Python'}
enrollstudent(student).then(function(){
    getstudent();
}).catch(function(){
    console.log('some error ');
})
// getstudent();

// function inside then is ran as - resolver() 
// function inside catch is ran as - reject()