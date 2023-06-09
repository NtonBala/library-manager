import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';

function GetAllBooks(): Book[] {
  let books = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
    {
      id: 3,
      title: 'I Know Why the Caged Bird Sings',
      author: 'Maya Angelou',
      available: true,
      category: Category.Poetry,
    },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction },
  ];

  return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';

  for (let currentBook of books) {
    if (currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log(`Total Books: ${numberOfBooks}`);
  console.log(`First Available: ${firstAvailable}`);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
  console.log(`Getting books in category: ${Category[categoryFilter]}`);

  const allBooks = GetAllBooks();
  const filteredTitles: string[] = [];

  for (let currentBook of allBooks) {
    if (currentBook.category === categoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }

  return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
  for (let title of titles) {
    console.log(title);
  }
}

function GetBookById(id: number): Book {
  const allBooks = GetAllBooks();

  return allBooks.filter((book) => book.id === id)[0];
}

function CreateCustomerId(name: string, id: number): string {
  return `${name}${id}`;
}

function CreateCustomer(name: string, age?: number, city?: string) {
  console.log(`Creating customer ${name}`);

  if (age) {
    console.log(`Age: ${age}`);
  }

  if (city) {
    console.log('City: ', city);
  }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Checking out books for ${customer}`);

  let booksCheckedOut: string[] = [];

  for (let id of bookIDs) {
    let book = GetBookById(id);

    if (book.available) {
      booksCheckedOut.push(book.title);
    }
  }

  return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(author: string, available: boolean): string[];
function GetTitles(author: string, available?: boolean): string[] {
  const allBooks = GetAllBooks();
  const searchResults: string[] = [];

  if (available !== undefined) {
    for (let book of allBooks) {
      if (book.author === author && book.available === available) {
        searchResults.push(book.title);
      }
    }
  } else {
    for (let book of allBooks) {
      if (book.author === author) {
        searchResults.push(book.title);
      }
    }
  }

  return searchResults;
}

function PrintBook(currentBook: Book) {
  console.log(`${currentBook.title} by ${currentBook.author}`);
}

// * Program code:
let ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2023);

ref.printItem();
ref.publisher = 'Random Data Publishing';
console.log(ref.publisher);
