const caesarCipher = require('./caesarCipher');

test('Caesar Cipher lowercase', () => {
  expect(caesarCipher('hello')).toBe('ifmmp');
});

test('Caesar Cipher uppercase', () => {
  expect(caesarCipher('HELLO')).toBe('IFMMP');
});

test('Caesar Cipher uppercase and lowercase', () => {
  expect(caesarCipher('HeLlO')).toBe('IfMmP');
});

test('Caesar Cipher z - a', () => {
  expect(caesarCipher('zebra')).toBe('afcsb');
});

test('Caesar Cipher Z - A', () => {
  expect(caesarCipher('Zebra')).toBe('Afcsb');
});

test('Caesar Cipher punctuation', () => {
  expect(caesarCipher('Zebra&')).toBe("Afcsb'");
});
