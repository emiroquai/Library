const wrapper = document.getElementsByClassName("wrapper")
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

function addBookToLibrary(book) {
    myLibrary.push(book);
}