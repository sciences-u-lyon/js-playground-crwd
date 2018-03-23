export class Polygon {
  constructor(width, height) {
    this.name = 'Polygon';
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  toString() {
    return `The area of this ${this.name} is ${this.area()}`;
  }
}
