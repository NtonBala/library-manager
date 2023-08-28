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

class Encyclopedia extends ReferenceItem {
  constructor(newTitle: string, newYear: number, public edition: number) {
    super(newTitle, newYear);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`);
  }

  printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }
}

export { UniversityLibrarian, ReferenceItem, Encyclopedia };
