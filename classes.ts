import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string) {
    console.log(`${this.name} is assisting ${custName}`);
  }
}

class ReferenceItem {
  private _publisher: string;
  static department: string = 'Research';

  get publisher() {
    return this._publisher;
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher.toUpperCase();
  }

  constructor(public title: string, private year: number) {
    console.log('Creating a new ReferenceItem...');
  }

  printItem() {
    console.log(`${this.title} was published in ${this.year}.`);
    console.log(`Department: ${ReferenceItem.department}`);
  }
}

class Encyclopedia extends ReferenceItem {
  edition: number;
}

export { UniversityLibrarian, ReferenceItem, Encyclopedia };
