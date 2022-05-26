showBooks();
showIssueBooks();

let addBtn = document.getElementById('AddBtn')
addBtn.addEventListener('click', func1)

function func1(e) {
    let inputBookId = document.getElementById('inputBookId');
    let inputBookName = document.getElementById('inputBookName');
    let inputBookAuthor = document.getElementById('inputBookAuthor');
    let BookData = localStorage.getItem('BookData');
    let BookDataObj;
    if (BookData == null || !BookData.includes(inputBookId.value) && (inputBookName.value != '') && (inputBookAuthor.value != '')) {
        if (BookData == null) {
            BookDataObj = [];
        }
        else {
            BookDataObj = JSON.parse(BookData);
        }
        let MyObj =
        {
            BookId: inputBookId.value,
            BookName: inputBookName.value,
            BookAuthor: inputBookAuthor.value

        }
        BookDataObj.push(MyObj);
        localStorage.setItem('BookData', JSON.stringify(BookDataObj));

        showBooks();
    }
    inputBookId.value = '';
    inputBookName.value = '';
    inputBookAuthor.value = '';
    e.preventDefault();

}

function showBooks() {
    let tbody = document.getElementById('booktbody');
    let BookData = localStorage.getItem('BookData');
    let BookDataObj;
    if (BookData == null) {
        BookDataObj = [];
    }
    else {
        BookDataObj = JSON.parse(BookData);
    }
    let html = '';
    BookDataObj.forEach(function (element, index) {
        html += `<tr>
        <th scope="row">${element.BookId}</th>
        <td>${element.BookName}</td>
        <td>${element.BookAuthor}</td>
        <td><button type="submit" class="btn btn-primary" id="${index}" onclick="deleteBook(this.id)">Delete Book</button></td>
        </tr>`
    })
    tbody.innerHTML = html;
}

function deleteBook(id) {
    let BookData = localStorage.getItem('BookData');
    let BookDataObj = JSON.parse(BookData);
    BookDataObj.splice(id, 1);
    // let html = '';
    // BookDataObj.forEach(function (element, index) {
    //     html += `<tr>
    //     <th scope="row">${element.BookId}</th>
    //     <td>${element.BookName}</td>
    //     <td>${element.BookAuthor}</td>
    //     <td><button type="submit" class="btn btn-primary" id="${index}" onclick="deleteBook(this.id)">Delete Book</button></td>
    //     </tr>`
    // })
    // let tbody = document.getElementById('booktbody');
    // tbody.innerHTML = html;
    localStorage.setItem('BookData', JSON.stringify(BookDataObj));
    showBooks();

}

let issueBtn = document.getElementById('IssueBtn')
issueBtn.addEventListener('click', func2)

function func2(e) {
    let inputBookName1 = document.getElementById('inputBookName1');
    let inputIssuerId = document.getElementById('inputIssuerId');
    let yearI = document.getElementById('gridRadios1')
    let yearII = document.getElementById('gridRadios2')
    let yearIII = document.getElementById('gridRadios3')
    let yearIV = document.getElementById('gridRadios4')
    let inputyear ;
    if(yearI.checked)
    {
        inputyear = 'BE-I';
    }
    else if(yearII.checked)
    {
        inputyear = 'BE-II';
    }
    else if(yearIII.checked)
    {
        inputyear = 'BE-III';
    }
    else if(yearIV.checked)
    {
        inputyear = 'BE-IV';
    }
    let IssueBookData = localStorage.getItem('IssueBookData');
    let IssueBookDataObj;
    if ((inputBookName1.value != '') && (inputIssuerId.value != '')){
        if (IssueBookData == null) {
            IssueBookDataObj = [];
        }
        else {
            IssueBookDataObj = JSON.parse(IssueBookData);
        }
        let MyObj =
        {
            IssueBookName: inputBookName1.value,
            IssuerId: inputIssuerId.value ,
            Year : inputyear 
        }
        IssueBookDataObj.push(MyObj);
        localStorage.setItem('IssueBookData', JSON.stringify(IssueBookDataObj));

        showIssueBooks();
    }
    inputBookName1.value = '';
    inputIssuerId.value = '';
    yearI.checked = '' ;
    yearII.checked = '' ;
    yearIII.checked = '' ;
    yearIV.checked = '' ;
    e.preventDefault();
}

function showIssueBooks() {
    let Issuetbody = document.getElementById('issuetbody');
    let IssueBookData = localStorage.getItem('IssueBookData');
    let IssueBookDataObj;
    if (IssueBookData == null) {
        IssueBookDataObj = [];
    }
    else {
        IssueBookDataObj = JSON.parse(IssueBookData);
    }
    let html = '';
    IssueBookDataObj.forEach(function (element, index) {
        html += `<tr id="${index}">
        <th scope="row">${index+1}</th>
        <td>${element.IssueBookName}</td>
        <td>${element.IssuerId}</td>
        <td>${element.Year}</td>
        <td><button type="submit" class="btn btn-primary" id="${index}" onclick="returnBook(this.id)">Return Book</button></td>
        </tr>`
    })
    Issuetbody.innerHTML = html;
}

function returnBook(id) {
    let IssueBookData = localStorage.getItem('IssueBookData');
    let IssueBookDataObj = JSON.parse(IssueBookData);
    IssueBookDataObj.splice(id, 1);
    // let html = '';
    // IssueBookDataObj.forEach(function (element, index) {
    //     html += `<tr>
    //     <th scope="row">${index+1}</th>
    //     <td>${element.BookName}</td>
    //     <td>${element.IssuerId}</td>
    //     <td>${element.year}</td>
    //     <td><button type="submit" class="btn btn-primary" id="${index}" onclick="returnBook(this.id)">Return Book</button></td>
    //     </tr>`
    // })
    // let Issuetbody = document.getElementById('issuetbody');
    // Issuetbody.innerHTML = html;
    localStorage.setItem('IssueBookData', JSON.stringify(IssueBookDataObj));
    showIssueBooks();

}

let Searchbtn = document.getElementById('searchTxt');
Searchbtn.addEventListener('input',func3);
Searchbtn.addEventListener('blur',func4);

function func3(e)
{
    document.getElementById('AddBook').style.display = 'none';
    document.getElementById('IssueBook').style.display = 'none';
    // console.log('input is fired',e.target.value);
    
    let searchtxt = Searchbtn.value.toLowerCase();
    console.log(searchtxt);

    if(searchtxt == '')
    {
        func4();
    }
    let data = document.getElementsByTagName('tr');
    console.log(data);
    Array.from(data).forEach((element)=>
    {
        let elem = element.innerText.toLowerCase();
        if(!elem.includes(searchtxt))
        {
            
            element.style.display = 'none' ;
            if(element.innerText.includes('BookName'))
            {
                element.style.display = '';
            }
        }
        
    })
    e.preventDefault();
}

function func4()
{
    showBooks();
    showIssueBooks();
    document.getElementById('AddBook').style.display = 'block';
    document.getElementById('IssueBook').style.display = 'block';
}