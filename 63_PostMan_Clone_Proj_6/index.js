function addElement(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstChild;
}

let parameterBox = document.getElementById('parameterBox');
parameterBox.style.display = 'none';

let jsonradio = document.getElementById('jsonradio');
let customradio = document.getElementById('customradio');


let requestjson = document.getElementById('requestjson');

jsonradio.addEventListener('click', () => {
    requestjson.style.display = 'block';
    parameterBox.style.display = 'none';
})

customradio.addEventListener('click', () => {
    requestjson.style.display = 'none';
    parameterBox.style.display = 'block';
})

let addParam = document.getElementById('addParam');
let paramcount = 0;
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');

    let str = `<div class="form-row my-3">
                <label for="parameterkey${paramcount + 2}" class="col-md-2 col-form-label">Parameter ${paramcount + 2}</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterkey${paramcount + 2}" placeholder="Enter Parameter ${paramcount + 2} key">
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parametervalue${paramcount + 2}" placeholder="Enter Parameter ${paramcount + 2} value">
                </div>
                <button class="deleteparam btn btn-primary">-</button>
               </div>`;

    paramcount++;
    let div = addElement(str);
    params.appendChild(div);

    let deleteparam = document.getElementsByClassName('deleteparam')

    for (const para of deleteparam) {
        para.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        })
    }
})

let submit = document.getElementById('submit');

submit.addEventListener('click', () => {
let url = document.getElementById('url').value;
    let requesttype = document.querySelector("input[name='Request']:checked").value;
    let contenttype = document.querySelector("input[name='content']:checked").value;


    console.log(url);
    console.log(requesttype);
    console.log(contenttype);

    if (contenttype == 'JSON') {
        let data = document.getElementById('requestJSON').value;
    }

    if (contenttype == 'Custom') {
        let data = {};
        for (let i = 0; i < paramcount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterkey' + (i + 1)).value;
                let value = document.getElementById('parametervalue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }

    if (requesttype == 'GET') {
        fetch(url, {
            method: 'GET'
        }).then(response => response.text()).then((text) => {
            document.getElementById('response').innerHTML = text;
        }
        );
    }

    if (requesttype == 'POST') {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        }).then(response => response.text()).then((text) => {
            document.getElementById('response').innerHTML = text;
        }
        );
    }
})