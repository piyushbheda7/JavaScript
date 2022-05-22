
// ********* This is for already containing notes which are stored in local storage ******
shownotes();

// *********** this is for adding the content of textarea into local storage *********
let addNote = document.getElementById('addbtn');
addNote.addEventListener('click', function () {
    let addTxt = document.querySelector('#addTxt');
    let addTitle = document.querySelector('#addTitle');
    let noteData = addTxt.value;
    let TitleData = addTitle.value;
    let notes = localStorage.getItem('notes');
    let titles = localStorage.getItem('titles');
    if (notes == null && titles == null) {
        notesObj = [];
        titlesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        titlesObj = JSON.parse(titles);
    }

    // let myObj = {
    //     title : addTitle.value,
    //     text : addTxt.value
    // }

    if (noteData != "" && TitleData != "") {
        notesObj.push(noteData);
        titlesObj.push(TitleData);
        // notesObj.push(myObj)
        localStorage.setItem('notes', JSON.stringify(notesObj))
        localStorage.setItem('titles', JSON.stringify(titlesObj))
        addTxt.value = '';

        shownotes();
    }
})

// ********* this is for showing the card which are added latestly **********
function shownotes() {
    let notes = localStorage.getItem('notes');
    let titles = localStorage.getItem('titles');
    if (notes == null && titles == null) {
        notesObj = [];
        titlesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        titlesObj = JSON.parse(titles);
    }
    let html = '';
    // titlesObj.forEach(function (element1) {
        notesObj.forEach(function (element, index) {

            html += `
        <div class="card mx-2 my-2 noteCard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${titlesObj[index]}</h5> <!-- can use element.title -->
                <p class="card-text">${element}</p> <!-- can use element.text -->
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `

        })
    // })
    let addTxt = document.getElementById('notes');
    addTxt.innerHTML = html;
    addTitle.value = '';
}

// ************ This is for delete Note using delete note button ******* 
function deleteNote(id) {
    let notes = localStorage.getItem('notes');
    let titles = localStorage.getItem('titles');
    if (notes == null && titles == null) {
        notesObj = [];
        titlesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        titlesObj = JSON.parse(titles);
    }

    notesObj.splice(id, 1); // position id remove 1 element
    titlesObj.splice(id, 1); // position id remove 1 element
    localStorage.setItem('notes', JSON.stringify(notesObj))
    localStorage.setItem('titles', JSON.stringify(titlesObj))
    shownotes();
}

// ********** This is for Searching the Text ******
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
    let searchTxt = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function (element) {
        let h5 = element.getElementsByTagName('h5')[0].innerText.toLowerCase();
        let p = element.getElementsByTagName('p')[0].innerText.toLowerCase();
        if (p.includes(searchTxt) || h5.includes(searchTxt)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})