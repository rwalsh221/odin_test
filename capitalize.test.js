const capitalize = require('./tests');

test('Capitalize first character', () => {
  expect(capitalize('prague')).toBe('Prague');
});
