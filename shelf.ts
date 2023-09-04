// * The idea behind Shelf class is that there are lots of shelves in a library
// * and they may contain different types of library materials: books, magazines, movies etc.
// * By making Shelf class generic we can pass the type of thing the particular shelf will be hold
// * as a type parameter when particular instance is created.

// * Constraint containing all the properties we expect to be present on items stored on the shelf:
interface ShelfItem {
  title: string;
}

export default class Shelf<T extends ShelfItem> {
  private _items: Array<T> = new Array<T>();

  add(item: T): void {
    this._items.push(item);
  }

  getFirst(): T {
    return this._items[0];
  }

  find(title: string): T {
    return this._items.filter((item) => item.title === title)[0];
  }

  printTitles(): void {
    this._items.forEach((item) => console.log(item.title));
  }
}
