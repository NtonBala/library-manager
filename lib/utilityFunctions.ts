function CalculateLateFee(daysLate: number): number {
  return daysLate * 0.25;
}

function MaxBooksAllowed(age: number): number {
  if (age < 12) {
    return 3;
  } else {
    return 10;
  }
}

function privateFunc(): void {
  console.log('This is private...');
}

function Purge<T>(inventory: Array<T>): Array<T> {
  // * Emulate the extraction of old items from inventory array and returning them as an array of purged items
  return inventory.splice(2, inventory.length);
}

export { CalculateLateFee, MaxBooksAllowed, Purge };
