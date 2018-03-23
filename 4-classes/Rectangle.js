import { Polygon } from './Polygon.js';

export class Rectangle extends Polygon {
  constructor(width, height) {
    super(width, height);
    this.name = 'Rectangle';
  }
}
