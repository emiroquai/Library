const wrapper = document.getElementById("wrapper")
const main = document.getElementById('main')
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

let bookFormVisible = false



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

function addBookToLibrary(book) {
    myLibrary.push(book);
}

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

function displayForm() {
    if (bookFormVisible) {
        const bookFormBar = document.getElementById("bookFormBar")
        main.removeChild(bookFormBar);
        bookFormVisible = false;
    } else {
        const br = document.createElement("br");

        const bookFormBar = document.createElement(`div`);
        bookFormBar.setAttribute('id', 'bookFormBar');
        main.appendChild(bookFormBar);
    
        const bookForm = document.createElement(`form`)
        bookForm.setAttribute("id", "addBook");
        bookFormBar.appendChild(bookForm);

        const title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("name", "title");
        title.setAttribute("placeholder", "Title")
        title.value = "title";
        bookForm.appendChild(title);

        const author = document.createElement("input");
        author.setAttribute("type", "text");
        author.setAttribute("name", "author");
        author.setAttribute("placeholder", "Author")
        author.value = "author";
        bookForm.appendChild(author);

        const pages = document.createElement("input");
        pages.setAttribute("type", "number");
        pages.setAttribute("name", "pages");
        pages.setAttribute("placeholder", "Number of pages")
        pages.value = "pages";
        bookForm.appendChild(pages);
        
        const radioContainer = document.createElement("div");

        const radio1 = document.createElement("input");
        radio1.type = "radio";
        radio1.name = "read";
        radio1.value = "read";
        radio1.id = "read";

        // Create a label for the first radio button
        const label1 = document.createElement("label");
        label1.innerHTML = "Read";
        label1.setAttribute("for", "read");

        // Create the second radio button
        const radio2 = document.createElement("input");
        radio2.type = "radio";
        radio2.name = "read";
        radio2.value = "not read";
        radio2.id = "notread";

        // Create a label for the second radio button
        const label2 = document.createElement("label");
        label2.innerHTML = "Not read";
        label2.setAttribute("for", "notread");

        // Append radio buttons and labels to the container
        bookForm.appendChild(radioContainer);
        radioContainer.appendChild(radio1);
        radioContainer.appendChild(label1);
        radioContainer.appendChild(radio2);
        radioContainer.appendChild(label2);

        const submit = document.createElement("button");
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Submit");
        submit.textContent = "Submit";
        submit.setAttribute("id", "submit");
        submit.setAttribute("onclick", "addBookToLibrary()");
        bookForm.appendChild(submit);

        bookFormVisible = true;
    }
}



// stop form submission

const form  = document.getElementById('addBook');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

// 