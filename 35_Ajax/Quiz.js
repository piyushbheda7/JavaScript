document.getElementById('fruitbtn').addEventListener('click',func1);
document.getElementById('vegetablebtn').addEventListener('click',func2);


function func1()
{
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , 'fruits.json' , true) 

    xhr.onload = function()
    {
        if(this.status == 200) 
        {
            let obj = JSON.parse(this.responseText)
            let list = document.getElementById('list');
            str = "<h1>Fruits Data</h1>";
            for (const key in obj.Fruits) {
                str += `<li>${obj.Fruits[key]}</li>`
            }
            list.innerHTML = str ;
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
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , 'vegetable.json' , true) 

    xhr.onload = function()
    {
        if(this.status == 200) 
        {
            let obj = JSON.parse(this.responseText)
            let list = document.getElementById('list');
            str = "<h1>Vegetables Data</h1>";
            for (const key in obj.vegetable) {
                str += `<li>${obj.vegetable[key]}</li>`
            }
            list.innerHTML = str ;
        }
        else
        {
            console.log('some error')
        }
    }

    xhr.send()
}