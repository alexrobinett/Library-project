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


// gets Radio button answer 
function displayRadioValue() {
    let ele = document.getElementsByName('read-unread');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            return ele[i].value
        }
}

// Resets all books in DOM Before a Rerender
function resetCards(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
}

// Clears form Data
function clearInputs(){
    const inputs = document.querySelectorAll('#booktitle, #author, #numpages');

    inputs.forEach(input => {
      input.value = '';
    })
}

// Hides form input
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


//loops through myLibrary Array and puts books in DOM

function displayBooks(){
    const BookContainer = document.getElementsByClassName("books-container")
    resetCards(document.querySelector(".books-container"))
    for(let i = 0; i < myLibrary.length; i++){
       const Booktemplate = document.createElement("div")
       Booktemplate.dataset.num = i
       Booktemplate.classList.add("card")
       Booktemplate.classList.add("book")
       Booktemplate.innerHTML = `<h2>Book Title:<span class="answer">${myLibrary[i].title}</span></h2><span>Author:<span class="answer">${myLibrary[i].author}</span></span><span class="pages">Number of pages:<span class="answer">${myLibrary[i].numberOfPages}</span></span><div><button data-id="${i}" data-read="${myLibrary[i].isRead}" class="${myLibrary[i].isRead} book-status">${myLibrary[i].isRead}</button><button id="${i}" class="remove-book">remove</button></div>`;
       BookContainer[0].appendChild(Booktemplate)
      
    }
    addDeleteBtn()
    toggleBookReadStatus()
}


// Event Listeners

BookFormBtn.addEventListener("click", toggleinputCard)

cancelButton.addEventListener("click", toggleinputCard)

AddBookBtn.addEventListener("click", addBookToLibrary, false)

// Adds Delete button and updates myLibrary Array
function addDeleteBtn(){
    const deleteBookButton = document.querySelectorAll(".remove-book");

    deleteBookButton.forEach((card)=> card.addEventListener("click",function(e){
        myLibrary.splice(e.target.id,1)
        displayBooks()
    } ))
}

function toggleBookReadStatus(){
    let booksStatusButton = document.querySelectorAll(".book-status")

    booksStatusButton.forEach((card)=> card.addEventListener("click", function(e){
        console.log("status button is working")
        console.log(e.target.dataset.id)
        if(e.target.dataset.read === "read"){
            console.log("button is still read")
            e.target.dataset.read = "unread"
            e.target.classList.remove("read")
            e.target.classList.add("unread")
            e.target.textContent = "unread"
            myLibrary[e.target.dataset.id].isRead = "unread"
        }else if (e.target.dataset.read === "unread"){
            console.log("button is still unread")
            e.target.dataset.read = "read"
            e.target.classList.remove("unread")
            e.target.classList.add("read")
            e.target.textContent = "read"
            myLibrary[e.target.dataset.id].isRead = "read"
        }else console.log("something went wrong")
    }))
}
