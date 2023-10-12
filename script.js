const wrapper = document.getElementById("wrapper")
const main = document.getElementById('main')
const newBookButton = document.getElementById('newBook')
const bookFormBar = document.getElementById('bookFormBar')

const myLibrary = [
    {
        "title": "LOL",
        "author": "Mr. Me",
        "pages": 120,
        "read": "read"
    },               
    {
        "title": "Nabion",
        "author": "Dayigil",
        "pages": 86,
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

// constructer test
// const LOL = new Book("LOL", "Mr. Me", 120, "read")
// const book1 = new Book("Nabion", "Dayigil", 86, "not read")
// addBookToLibrary(LOL);
// addBookToLibrary(book1);

function displayBooks() {
    myLibrary.forEach(book => {
        const bookCard = document.createElement(`div`);
        wrapper.appendChild(bookCard);
        bookCard.classList.add('card');

        const bookPages = document.createElement(`div`);
        bookPages.classList.add('pages');
        bookCard.appendChild(bookPages)
        bookPages.textContent = book.pages + " pages"

        const bookAuthor = document.createElement(`div`);
        bookAuthor.classList.add('author');
        bookCard.insertBefore(bookAuthor, bookPages);
        bookAuthor.textContent = "by " + book.author;

        const bookTitle = document.createElement(`div`);
        bookTitle.classList.add('title');
        bookCard.insertBefore(bookTitle, bookAuthor);
        bookTitle.textContent = book.title;
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

document.getElementById('book-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

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




