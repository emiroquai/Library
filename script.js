const wrapper = document.getElementById("wrapper")
const main = document.getElementById('main')
const newBookButton = document.getElementById('newBook')
const bookFormBar = document.getElementById('bookFormBar')
const bookForm = document.getElementById('book-form')

const myLibrary = []


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

// constructer test
// const LOL = new Book("LOL", "Mr. Me", 120, "read")
// const book1 = new Book("Nabion", "Dayigil", 86, "not read")
// addBookToLibrary(LOL);
// addBookToLibrary(book1);

function displayBooks() {
    myLibrary.forEach(book => {
        const bookCard = document.createElement(`div`);
        bookCard.classList.add('card');

        const bookTitle = document.createElement(`div`);
        bookTitle.classList.add('title');
        bookTitle.textContent = book.title;
        
        const bookAuthor = document.createElement(`div`);
        bookAuthor.classList.add('author');
        bookAuthor.textContent = "by " + book.author;
        
        const bookPages = document.createElement(`div`);
        bookPages.classList.add('pages');
        bookPages.textContent = book.pages + " pages"
        
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);

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
    displayBooks(); // Re-render the book cards
};




