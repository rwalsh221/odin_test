const reverseString = require('./reverseString');

test('Reverse String', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('test')).toBe('tset');
});
