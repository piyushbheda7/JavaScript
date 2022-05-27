// you have to pretend a word api which will contain an object and you have to print definition from all the results of that word api.
// you have to take input from an input tag 
// you have to print it in the dom


let searchtxt = document.getElementById('inputword');
console.log(searchtxt);
let btn = document.getElementById('search')
let message = document.getElementById('message')

btn.addEventListener('click' , func1)

function func1(e){
    console.log(searchtxt.value);
    const xhr = new XMLHttpRequest();

    xhr.open('GET',"\DictionaryAPI.json",true);

    xhr.onload = function(){
        if(this.status == 200)
        {
            // let obj = JSON.parse(this.responseText);
            // console.log(obj.products[0].id);
            // let list = document.getElementById('defination');
            // str = "";
            // for(key in obj.products)
            // {
            //     console.log(obj.products[key].brand);
            //     str += `<li>${obj.products[key].brand} </li>`
                
            // }
            let list = document.getElementById('defination');
            let obj = JSON.parse(this.responseText);
            let str = `<h5>Definations of word '${searchtxt.value}'</h5>`;
            for(let key of obj.Word)
            {
                if(key.word == searchtxt.value)
                {
                    for(let def of key.definitions)
                    {
                        str += `<li>${def.definition}</li>`;
                        console.log(def.definition);
                    }
                }
            }
            list.innerHTML = str ;
            message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Messge:</strong> Data Is Successfully Loaded
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                 </div>`;
            setTimeout(() => {
                message.innerHTML = '';
            }, 3000);
        }
        else
        {
            message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Messge:</strong> Some Error Is Occured
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                 </div>`;
            setTimeout(() => {
                message.innerHTML = '';
            }, 3000);
        }
    }

    xhr.send();
    e.preventDefault();
}