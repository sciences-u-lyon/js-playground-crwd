const main = require('./main');

describe('2-control-structures', () => {
  describe('greaterNum', () => {
    it('should return 2', () => {
      expect(main.greaterNum(1, 2)).toBe(2);
    });

    it('should return 10', () => {
      expect(main.greaterNum(10, 5)).toBe(10);
    });
  });

  describe('helloWorld', () => {
    it('should return "Bonjour le monde"', () => {
      expect(main.helloWorld('fr')).toBe('Bonjour le monde');
    });

    it('should return "Hola Mundo"', () => {
      expect(main.helloWorld('es')).toBe('Hola Mundo');
    });

    it('should return "Hello World"', () => {
      expect(main.helloWorld('en')).toBe('Hello World');
      expect(main.helloWorld()).toBe('Hello World');
    });
  });

  describe('grade', () => {
    it('should return A', () => {
      expect(main.grade(20)).toBe('A');
      expect(main.grade(17)).toBe('A');
    });

    it('should return B', () => {
      expect(main.grade(16)).toBe('B');
      expect(main.grade(13)).toBe('B');
    });

    it('should return C', () => {
      expect(main.grade(12)).toBe('C');
      expect(main.grade(9)).toBe('C');
    });

    it('should return D', () => {
      expect(main.grade(8)).toBe('D');
      expect(main.grade(4)).toBe('D');
    });

    it('should return E', () => {
      expect(main.grade(3)).toBe('E');
      expect(main.grade(0)).toBe('E');
    });
  });

  describe('sort', () => {
    it('should return 0, 1, 2', () => {
      expect(main.sort(0, 1, 2)).toBe('0, 1, 2');
      expect(main.sort(0, 2, 1)).toBe('0, 1, 2');

      expect(main.sort(1, 0, 2)).toBe('0, 1, 2');
      expect(main.sort(1, 2, 0)).toBe('0, 1, 2');

      expect(main.sort(2, 0, 1)).toBe('0, 1, 2');
      expect(main.sort(2, 1, 0)).toBe('0, 1, 2');
    });
  });

  describe('sum', () => {
    it('should return 10', () => {
      expect(main.sum([1, 2, 3, 4])).toBe(10);
    });

    it('should return 5', () => {
      expect(main.sum([-5, -2, 4, 8])).toBe(5);
    });
  });

  describe('filterNames', () => {
    it('should return "Alice, John"', () => {
      expect(main.filterNames(['Alice', 'Bob', 'John'])).toBe('Alice, John');
    });
  });
});
