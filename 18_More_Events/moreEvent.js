let btn = document.getElementById('btn')
btn.addEventListener('click' , func1);
btn.addEventListener('dblclick' , func2);
btn.addEventListener('mousedown' , func3);
btn.addEventListener('mouseenter' , func4);
btn.addEventListener('mouseleave' , func5);
btn.addEventListener('mousemove' , func6);

function func1(e)
{
    console.log("it is clicked");
    e.preventDefault();
}
function func2(e)
{
    console.log("it is double clicked");
    e.preventDefault();
}
function func3(e)
{
    console.log("it is mouse down");
    e.preventDefault();
}
function func4(e)
{
    console.log("it is mouse enter");
    e.preventDefault();
}
function func5(e)
{
    console.log("it is mouse leave",e.target.id);
    e.preventDefault();
}
function func6(e)
{
    console.log("it is triggered mouse");
    e.preventDefault();
}

let btn1 = document.getElementById('btn1')
btn1.addEventListener(
    'click' , function(e){
        console.log('you clicked ok button')
        e.preventDefault(); // for not submit the form we use e.preventDefault function
    }
)

// button tag in html by default it submit the form on it is clicked

let child = document.querySelector('.child')
child.addEventListener('mouseenter',function()
{
    console.log('you entered in list')
})

document.querySelector('.container').addEventListener('mousemove' , function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY} , ${e.offsetX})`
})