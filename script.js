const wrapper = document.getElementById("wrapper")
const main = document.getElementById('main')
const newBookButton = document.getElementById('newBook')
const bookFormBar = document.getElementById('bookFormBar')
const bookForm = document.getElementById('book-form')

const myLibrary = [
    {
        "title": "Cero Baby",
        "author": "Emiro",
        "pages": "999",
        "read": "Not read"
    }
]


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function()  {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
    }
    console.log(this.info());
}

updateDisplay();

function displayBooks() {

    wrapper.innerHTML = "";
    myLibrary.forEach((book, index, read) => {
        // Create a card for each book
        const bookCard = document.createElement(`div`);
        bookCard.classList.add('card');

        const bookTitle = document.createElement(`h2`);
        bookTitle.classList.add('title');
        bookTitle.textContent = book.title;
        
        const bookAuthor = document.createElement(`p`);
        bookAuthor.classList.add('author');
        bookAuthor.textContent = "by " + book.author;
        
        const bookPages = document.createElement(`p`);
        bookPages.classList.add('pages');
        bookPages.textContent = book.pages + " pages"

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const readButton = document.createElement("button");
        readButton.classList.add("readButton");
        readButton.textContent = book.read;
        if (book.read === "Read") {
            readButton.classList.add("read");
        }
        readButton.dataset.index = index;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.textContent = "X";
        deleteButton.dataset.index = index;

        buttonContainer.appendChild(readButton);
        buttonContainer.appendChild(deleteButton);
        
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(buttonContainer);
  

        wrapper.appendChild(bookCard);

    });
}

newBookButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent button default behavior (form submission)

    // Toggle the form's visibility
    if (bookFormBar.style.display === "none" || bookFormBar.style.display === "") {
        bookFormBar.style.display = "block"; // Show the form
    } else {
        bookFormBar.style.display = "none"; // Hide the form
    }
});

bookForm.onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values from the form and push it to the array
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.querySelector('input[name="read"]:checked').value;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    // Clear the form inputs after submission
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.querySelector('input[name="read"]:checked').checked = false;


    // Update the display after adding a new book
    wrapper.innerHTML = ''; // Clear the existing content
    bookFormBar.style.display = "none"; // Hide the form
    updateDisplay();
};

function deleteBook() {
    const deleteButtons = document.querySelectorAll('button.deleteButton');
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            const index = parseInt(deleteButton.dataset.index);
            myLibrary.splice(index, 1);
            console.log(myLibrary);
            updateDisplay();
        });
    });
}

function readButton() {
    const readButtons = document.querySelectorAll('button.readButton');
    readButtons.forEach((readButton) => {
        readButton.addEventListener('click', () => {
            const index = parseInt(readButton.dataset.index);
            if (myLibrary[index].read === "Read") {
                myLibrary[index].read = "Not read";
                readButton.classList.remove('read');
            } else {
                myLibrary[index].read = "Read";
                readButton.classList.add('read');
            }
            updateDisplay();
            
        });
    });
}

function updateDisplay() {
    displayBooks();
    deleteBook();
    readButton();
}