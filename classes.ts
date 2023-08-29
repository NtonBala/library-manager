import * as Interfaces from './interfaces';

class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string) {
    console.log(`${this.name} is assisting ${custName}`);
  }
}

abstract class ReferenceItem {
  private _publisher: string;
  static department: string = 'Research';

  get publisher() {
    return this._publisher;
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher.toUpperCase();
  }

  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
  }

  printItem() {
    console.log(`${this.title} was published in ${this.year}.`);
    console.log(`Department: ${ReferenceItem.department}`);
  }

  abstract printCitation(): void;
}

export { UniversityLibrarian, ReferenceItem };
