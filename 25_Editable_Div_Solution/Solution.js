// you have to create a div and inject it into the page which contains a heading
// whenever someone clicks on the div , it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage

let body = document.querySelector('body')
let div = document.createElement('div')

div.className = 'newDiv'
div.id = 'newDiv'
div.style.border = '2px solid black'
div.style.height = '250px'
div.style.width = '250px'
div.style.margin = '23px'
div.style.padding = '23px'

let val = localStorage.getItem('text');
let text ;
if(val==null)
{
    text = document.createTextNode('this is my element , click to edit it')
}
else
{
   text = document.createTextNode(val)
}

div.appendChild(text)
body.appendChild(div)

document.getElementById('newDiv').addEventListener('click' , func1)

function func1(e)
{
    let count = document.getElementsByClassName('textarea').length
    // if(count == 0)
    // {

    //     let html =  div.innerHTML;
    //     div.innerHTML = `<textarea class="form-control textarea" id="textare" rows=15 >${html}</textarea>` ;
    // }

    let html = document.createElement('textarea')
    html.id = 'textarea'
    html.className = 'textarea'
    html.rows = 15 
    if(count == 0 )
    {
        html.innerHTML = div.innerText
        div.innerText = '';
        div.appendChild(html)
    }

    html.addEventListener('blur',function()
    {
        console.log('this become blur')
        div.innerText = html.value
        localStorage.setItem('text',div.innerText)
    })
}
