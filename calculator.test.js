const calculator = require('./calculator');

test('Calculator Plus', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('Calculator subtract', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('Calculator multiply', () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test('Calculator divide', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
