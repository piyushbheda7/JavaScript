console.log('object');

// this is using the Object Prototype
// function Book(bname, author, type) {
//     this.bname = bname;
//     this.author = author;
//     this.type = type;
// }

// function Display() {

// }

// Display.prototype.add = (book) => {
//     let data = document.getElementById('tableBody')
//     str  = `<tr>
//     <td scope="col">${book.bname}</td>
//     <td scope="col">${book.author}</td>
//     <td scope="col">${book.type}</td>
// </tr>`;
//     data.innerHTML += str ;
// }

// Display.prototype.validate = (book) => {
//     if (book.bname.length < 2 || book.author.length < 2) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

// Display.prototype.show = (type , displayMessage) => {
//     let message = document.getElementById('message');
//     message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
//     <strong>Messge:</strong> ${displayMessage}
//     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">×</span>
//     </button>
// </div>`;

// setTimeout(() => {
//     message.innerHTML = '';
// }, 4000);
// }

// Display.prototype.clear = () => {
//     document.getElementById('libraryForm').reset();
// }

// let addbtn = document.getElementById('addbtn')
// addbtn.addEventListener('click', func1)

// function func1(e) {
//     console.log('button is clicked');

//     let bname = document.getElementById('bookName').value;
//     let Author = document.getElementById('author').value;
//     let type;
//     let fiction = document.getElementById('fiction')
//     let programming = document.getElementById('programming')
//     let cooking = document.getElementById('cooking')

//     if (fiction.checked) {
//         type = 'fiction';
//     }
//     if (programming.checked) {
//         type = 'Programming';
//     }
//     if (cooking.checked) {
//         type = 'cooking';
//     }

//     let book = new Book(bname, Author, type)
//     console.log(book);

//     let display = new Display();

//     if (display.validate(book)) {
//         display.add(book)
//         display.clear()
//         display.show('success', 'Your book has been successfully added')
//     }
//     else {
//         display.show('danger', 'Please Enter valid BookName Or Author Name')
//     }
//     e.preventDefault();
// }


// this is using the class objects

class Book {
    constructor(bname, author, type) {
        this.bname = bname;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        let data = document.getElementById('tableBody')
        let str = `<tr>
                <td scope="col">${book.bname}</td>
                <td scope="col">${book.author}</td>
                <td scope="col">${book.type}</td>
              </tr>`;
        data.innerHTML += str ;
    }

    clear() {
        document.getElementById('libraryForm').reset();
    }

    validate(book) {
        if (book.bname.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type , displayMessage) {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Messge:</strong> ${displayMessage}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button>
        </div>`;

        setTimeout(() => {
            message.innerHTML = '';
        }, 4000);
    }

}

let addbtn = document.getElementById('addbtn')
addbtn.addEventListener('click', func1)

function func1(e) {
    console.log('button is clicked');

    let bname = document.getElementById('bookName').value;
    let Author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')

    if (fiction.checked) {
        type = 'fiction';
    }
    if (programming.checked) {
        type = 'Programming';
    }
    if (cooking.checked) {
        type = 'cooking';
    }

    let book = new Book(bname, Author, type)
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book)
        display.clear()
        display.show('success', 'Your book has been successfully added')
    }
    else {
        display.show('danger', 'Please Enter valid BookName Or Author Name')
    }
    e.preventDefault();
}