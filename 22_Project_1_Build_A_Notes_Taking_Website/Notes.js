
// ********* This is for already containing notes which are stored in local storage ******
shownotes();

// *********** this is for adding the content of textarea into local storage *********
let addNote = document.getElementById('addbtn');
addNote.addEventListener('click', function () {
    let addTxt = document.querySelector('#addTxt');
    let noteData = addTxt.value;
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    if (noteData != "") {
        notesObj.push(noteData);
        localStorage.setItem('notes', JSON.stringify(notesObj))
        addTxt.value = '';

        shownotes();
    }
})

// ********* this is for showing the card which are added latestly **********
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {

        html += `
        <div class="card mx-2 my-2 noteCard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `

    })
    let addTxt = document.getElementById('notes');
    addTxt.innerHTML = html;
}

// ************ This is for delete Note using delete note button ******* 
function deleteNote(id)
{
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    
    notesObj.splice(id , 1); // position id remove 1 element
    localStorage.setItem('notes', JSON.stringify(notesObj))
    shownotes();
}

// ********** This is for Searching the Text ******
let search = document.getElementById('searchTxt');
search.addEventListener('input',function()
{
    let searchTxt = search.value.toLowerCase() ;
    // console.log('input is fired',)
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element)
    {
        let p = element.getElementsByTagName('p')[0];
        // console.log(p.innerText)
        if(p.innerText.includes(searchTxt))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none" ;
        }
    })
})