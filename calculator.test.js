const calculator = require('./calculator');

test('Calculator Plus', () => {
  expect(calculator(2, 2).add()).toBe(4);
});
