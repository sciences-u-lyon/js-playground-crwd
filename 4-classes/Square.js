import { Polygon } from './Polygon.js';

export class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}
