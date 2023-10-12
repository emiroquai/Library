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
        "read": "not read"
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

function displayBooks() {

    wrapper.innerHTML = "";
    myLibrary.forEach((book, index) => {
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

        const deleteButton = document.createElement(`button`);
        deleteButton.classList.add("deleteButton");
        deleteButton.textContent = "X";
        deleteButton.dataset.index = index;
        
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(deleteButton);

        wrapper.appendChild(bookCard);

    });
}

displayBooks();

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
    displayBooks(); // Re-render the book cards
    deleteBook();
};

function deleteBook() {
    const deleteButtons = document.querySelectorAll('button.deleteButton');
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            const index = parseInt(deleteButton.dataset.index);
            myLibrary.splice(index, 1);
            console.log(myLibrary);
            displayBooks(); 
            deleteBook();
        });
    });
}

deleteBook();
