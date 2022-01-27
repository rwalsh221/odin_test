const capitalize = require('./tests');

test('Capitalize String', () => {
  expect(capitalize('prague')).toBe('Prague');
});
