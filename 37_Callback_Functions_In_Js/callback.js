console.log('hello');

//Pretent that this response is coming from the server
const students = [
    {
        name: "Piyush" , 
        subject: "JavaScript"
    },
    {
        name: "Jay" , 
        subject: "Ml"
    }
]

// it is one function and also get function in its parameter it is know as callfunction
// like : student.forEach()

function enrollstudent(student)
{
    setTimeout(() => {
        students.push(student)
        console.log('enrollement is done');
        
    }, 3000); // it is running on the background and it will execute after 3000 milisecond
}

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

let newStudent = {name:"Alay",subject:"Python"}
enrollstudent(newStudent);
getstudent(); // here first enrollstudent func will run on background but it will execute after 3000 milisecond 
// but during this 3000 milisecond the getstudent func will on execute because it's timeout is 1000 milisecond


function enrollstudent(student, callback)
{
    setTimeout(() => {
        students.push(student)
        console.log('enrollement is done');
        callback(); // you can give any name
    }, 3000);
} // first enrolled and then fetched the data

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

newStudent = {name:"Alay",subject:"Python"}
enrollstudent(newStudent , getstudent); 
// getstudent() 