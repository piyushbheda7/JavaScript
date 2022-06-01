let Iname = document.getElementById('inputName')
let email = document.getElementById('inputEmail')
let no = document.getElementById('inputNumber')
let zip = document.getElementById('inputZip')

Iname.addEventListener('blur' , ()=>{
    let inputname = document.getElementById('inputnamemessage')
    let reg = /^[a-zA-Z]{1}[a-zA-Z]{0,14}$/
    if(!reg.test(Iname.value))
    {
        // document.getElementById('Name').classList.add('is-valid') - u can also do like this using bootstrap class
        let str = `<small style="color : red ;">* Enter a Valid Name........</small>`;
        inputname.innerHTML = str ;
    }
    else
    {
        inputname.innerHTML = '';
    }
})

email.addEventListener('blur' , ()=>{
    let inputemail = document.getElementById('inputemailmessage')
    let reg = /^[a-z]{1}[a-z0-9\.]{0,17}@[a-z\.]{3,10}\.[a-z]{2,5}$/ ;
    // let reg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.[a-zA-Z]{2,7}$/ ;
    if(!reg.test(email.value))
    {
        let str = `<small style="color : red ;">* Enter a Valid Email Address........</small>`;
        inputemail.innerHTML = str ;
    } 
    else
    {
        inputemail.innerHTML = '';
    }
})

no.addEventListener('blur' , ()=>{
    let inputmobilenumber = document.getElementById('inputmobilenumber');
    let reg = /^[6-9][0-9]{9}$/;
    if(!reg.test(no.value))
    {
        let str = `<small style="color : red ;">* Mobile Number Must be 10 digit and should be start with 6 , 7 , 8 , 9........</small>`;
        inputmobilenumber.innerHTML = str ;
    } 
    else
    {
        inputmobilenumber.innerHTML = '';
    }
})

zip.addEventListener('blur' , ()=>{
    let inputzip = document.getElementById('inputzip');
    let reg = /^3[0-9]{5}$/ ;
    if(!reg.test(zip.value))
    {
        let str = `<small style="color : red ;">* Zip code Must be 6 digit and start with 3........</small>`;
        inputzip.innerHTML = str ;
    } 
    else
    {
        inputzip.innerHTML = '';
    }
})

let signin = document.getElementById('signin') 

signin.addEventListener('click' ,(e)=>{

    let gridCheck = document.getElementById('gridCheck');
    let checkout = document.getElementById('checkout');

    if(!gridCheck.checked)
    {
        str = `<small style="color : red ;">* Please Accept term & conditions........</small>`;
        // checkout.innerHTML = str ;
    }
    else
    {
        checkout.innerHTML = '';
        let message = document.getElementById('message');
        let str = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Submitted : </strong> Your form has been submitted Successfully....
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        message.innerHTML = str ;
        setTimeout(() => {
            message.innerHTML = '';
        }, 3000);
        console.log("submit this form");
    }

//     // e.preventDefault();
})