console.log('This is a Solution of Implementing Library class Exercise 4')

class library {

    constructor(booklist) {
        this.booklist = booklist;
        this.issuedbook = {};
    }

    getbooklist() {
        this.booklist.forEach(element => {
            console.log(element);
        });
    }

    issuebook(bookname, user) {
        if (this.issuedbook[bookname] == undefined) {
            this.issuedbook[bookname] = user
        }
        else { console.log('this book is already assigned to another user') }
    }

    returnbook(bookname) {
        delete this.issuebook[bookname];
    }
}

let HML = new library(['the alchemist', 'think and grow rich', 'psychology of money']);
console.log(HML);
console.log(HML.getbooklist);