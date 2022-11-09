const BookFormBtn = document.getElementById('Addbook')
const cancelButton = document.querySelector(".cancel")
const AddBookBtn = document.querySelector(".add-book")
const BookInput = document.querySelector(".book-input")


let myLibrary = []


// constructor function
function Book(bookTitle, bookAuthor, bookPages, isBookRead){
    this.title = bookTitle
    this.author = bookAuthor
    this.numberOfPages = bookPages
    this.isRead = isBookRead
}


// get Radio button answer 
function displayRadioValue() {
    let ele = document.getElementsByName('read-unread');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            return ele[i].value
        }
}

function resetCards(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
}

function clearInputs(){
    const inputs = document.querySelectorAll('#booktitle, #author, #numpages');

    inputs.forEach(input => {
      input.value = '';
    })
}

function toggleinputCard(){
    document.querySelector(".book-form").classList.toggle("hidden")
}
        
function addBookToLibrary(event){
    // Add book to myLibrary array
    const bookTitle = document.getElementById("booktitle").value
    const bookAuthor = document.getElementById('author').value
    const bookPages = document.getElementById("numpages").value
    const isBookRead = displayRadioValue()
    myLibrary.push(new Book(bookTitle,bookAuthor,bookPages,isBookRead))
    console.log(myLibrary)
    event.preventDefault()
    resetCards(document.querySelector(".books-container"))
    displayBooks()
    BookInput.reset()
    toggleinputCard()


}



function displayBooks(){
    const BookContainer = document.getElementsByClassName("books-container")
    for(let i = 0; i < myLibrary.length; i++){
       const Booktemplate = document.createElement("div")
       Booktemplate.dataset.num = i
       Booktemplate.classList.add("card")
       Booktemplate.classList.add("book")
       Booktemplate.innerHTML = `<h2>Book Title:<span class="answer">${myLibrary[i].title}</span></h2><span>Author:<span class="answer">${myLibrary[i].author}</span></span><span class="pages">Number of pages:<span class="answer">${myLibrary[i].numberOfPages}</span></span><div><button class="${myLibrary[i].isRead}">Read</button><button class="remove-book">remove</button></div>`;
       BookContainer[0].appendChild(Booktemplate)
    }
}

function DeleteBook(id){
    let bookToRemove = document.querySelector("id")
}


BookFormBtn.addEventListener("click", toggleinputCard)

cancelButton.addEventListener("click", toggleinputCard)

AddBookBtn.addEventListener("click", addBookToLibrary, false)

