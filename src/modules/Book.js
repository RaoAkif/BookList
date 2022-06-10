export const BooksData = [
  { title1: "this is title 1", author: "My Author 1", isbn: 12345 },
  { title2: "this is title 2", author: "My Author 2", isbn: 22345 },
];

console.log(BooksData[0].title1);

const bookList = document.querySelector("#book-list");
const row = document.createElement("tr");
row.innerHTML = `<td>${BooksData[0].title1}</td><td>${BooksData[0].author}</td><td>${BooksData[0].isbn}</td><td>Delete</td>`;
bookList.appendChild(row);

class Book {
  constructor() {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  // UI
  // display {

  // }

  // Storage

  // Events

  // CRUD
}
