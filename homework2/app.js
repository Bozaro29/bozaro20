function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;

  this.displayReadingStatus = function () {
    if (this.readingStatus) {
      console.log(`Already read '${this.title}' by ${this.author}.`);
    } else {
      console.log(`You still need to read '${this.title}' by ${this.author}.`);
    }
  };
}
 
let title = prompt("Enter the book title:");
let author = prompt("Enter the author:");
const readingStatus = confirm("Have you already read this book?");

const book1 = new Book("The Robots of Dawn", "Isaac Asimov", true);
const book2 = new Book(
  "Mockingjay: The Final Book of The Hunger Games",
  "Suzanne Collins",
  false
);

book1.displayReadingStatus();
book2.displayReadingStatus();
