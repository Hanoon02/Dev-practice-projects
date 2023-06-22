class Books{
    constructor(
        title = "blank",
        author = "blank",
        pages = 0,
    ){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }
}

const library = new Library();
const printButton = document.getElementById("print");
const bookForm = document.getElementById("bookForm");
const reset = document.getElementById("reset");
const add = document.getElementById("addBook");
const addBook = () =>{
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    var book = new Books(title, author, pages);
    library.addBook(book);
}

const printBooks = () =>{
    console.log(library.books);
}

const resetForm = () =>{
    bookForm.reset();
}

if(add){
    add.addEventListener("click", addBook);
}
if(printButton){
    printButton.addEventListener("click", printBooks);
}
if(reset){
    reset.addEventListener("click", resetForm);
}



