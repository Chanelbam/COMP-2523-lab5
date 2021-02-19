import { ISortable } from './ISortable';

export class CharacterGroup implements ISortable {
  constructor(data: string) {
    this.data = data;``
  }

  data: string;

  get length(): number {
    return this.data.length;
  }

  compare(leftPos: number, rightPos: number): boolean {
    // logic here
    if (this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  swap(left: number, right: number): void {
    // logic here
    let array = this.data.split('');
    array[left] = this.data[right];
    array[right] = this.data[left];
    this.data = array.join('');
  }
}