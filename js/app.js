// const bookTitle = document.getElementById('booktitle')
// const bookAuthor = document.getElementById('author')
// const bookPages = document.getElementById('numpages')
// const isBookRead = document.getElementById('readbook')
let newbooktitleTest = "alex's Awesome Book"
const BookContainer = document.getElementsByClassName('books-container')


let myLibrary = [1,2,3,4]



function Book(title,author,pages,isRead){
    this.title = title
    this.author = author
    this.numberOfPages = pages
    this.isRead = isRead
}

const firstBook = new Book("old book", "alex robinett", 69, true)

function addBookToLibrary(){
    
}



function SetupBook(){
    const Booktemplate = document.createElement("div")
    Booktemplate.classList.add("card")
    Booktemplate.classList.add("book")
    Booktemplate.innerHTML = `<h2>Book Title:<span class="answer">${firstBook.title}</span></h2><span>Author:<span class="answer">${firstBook.author}</span></span><span class="pages">Number of pages:<span class="answer">${firstBook.numberOfPages}</span></span><button class="read-button">Read</button>`;
    BookContainer[0].appendChild(Booktemplate)
}

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
       SetupBook()
    }
}

displayBooks()