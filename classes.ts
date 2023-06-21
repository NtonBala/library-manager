import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string) {
    console.log(this.name + ' is assisting ' + custName);
  }
}

class ReferenceItem {
  title: string;
  year: number;

  constructor() {
    console.log('Creating a new ReferenceItem...');
  }

  printItem() {
    console.log(`${this.title} was published in ${this.year}.`);
  }
}

export { UniversityLibrarian, ReferenceItem };
