console.log('Exercise 4')

// create a class library and implement the following 
// constructor must take the book list as an argument
// getBooklist()
// issueBook(bookname , user)
// returnBook(bookname)




class library {
    constructor(givenBookList) {
        localStorage.setItem('bList', JSON.stringify(givenBookList));
        this.bookList = givenBookList;
    }

    getBooklist() {
        return this.bookList;

    }

    issueBook(bookName, user) {
        let bList = localStorage.getItem('bList');
        if (bList.includes(bookName)) {
            let issue = localStorage.getItem('issue');
            let issueObj;
            if (issue == null) {
                issueObj = [];
            }
            else {
                issueObj = JSON.parse(issue);
            }

            if (issue == null || !issue.includes(bookName)) {
                let MyObj = 
                {
                    "bName" : bookName ,
                    "Uid" : user 
                }

                issueObj.push(MyObj)
                localStorage.setItem('issue', JSON.stringify(issueObj))

                issue = localStorage.getItem('issue');
                // console.log(issueObj)
                return `Book '${bookName}' is Successfully issued to user ${user}`;
            }
            else {
                return `Book '${bookName}' is already issued to another user`;
            }
        }
        else {
            return `Book '${bookName}' is not present in the library`;
        }
    }

    returnBook(booknName , user) {
        let issue = localStorage.getItem('issue');
        let issueObj = JSON.parse(issue);
        issueObj.forEach((element)=>
        {            
            if(element.bName == booknName)
            {
                issueObj.splice(element,1);
            }
        })
        localStorage.setItem('issue' , JSON.stringify(issueObj));
        return `Book '${booknName}' is returned SucessFully......`
    }
}

let HansaMehtaLibrary = new library(['learning c++ by andrew boardman', 'computer Network by Andrew s. Tanenbaum', 'Operating system by Milan Milencovic', 'C by balaguruswami'])

console.log(HansaMehtaLibrary.getBooklist());



console.log(HansaMehtaLibrary.issueBook('learning c++ by andrew boardman', 6350));
// console.log(HansaMehtaLibrary.issueBook('learning c++ by andrew boardman', 6350));
console.log(HansaMehtaLibrary.issueBook('Operating system by Milan Milencovic' , 6350));

console.log(HansaMehtaLibrary.returnBook('Operating system by Milan Milencovic') , 6350)