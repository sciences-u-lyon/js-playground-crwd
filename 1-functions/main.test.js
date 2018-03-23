const main = require('./main');

describe('1-functions', () => {
  describe('uppercase', () => {
    it('should return "HELLO, WORLD!"', () => {
      expect(main.uppercase('Hello, World!')).toBe('HELLO, WORLD!');
    });
  });

  describe('charCount', () => {
    it('should return `"Hello, World!" has 13 characters`', () => {
      expect(main.charCount('Hello, World!')).toBe('"Hello, World!" has 13 characters');
    });
  });

  describe('greetings', () => {
    it('should return "Hello Alice!"', () => {
      expect(main.greetings('Alice')).toBe('Hello Alice!');
    });

    it('should return "Hello John!"', () => {
      expect(main.greetings()).toBe('Hello John!');
    });
  });

  describe('rectangleArea', () => {
    it('should return 200', () => {
      expect(main.rectangleArea(10, 20)).toBe(200);
    });
  });

  describe('circleArea', () => {
    it('should return 79', () => {
      expect(main.circleArea(5)).toBe(79);
    });

    it('should return 315', () => {
      expect(main.circleArea(10)).toBe(315);
    })
  });

  describe('sphereVolume', () => {
    it('should return 113', () => {
      expect(main.sphereVolume(3)).toBe(113);
    });

    it('should return 523', () => {
      expect(main.sphereVolume(5)).toBe(523);
    });
  });
});
