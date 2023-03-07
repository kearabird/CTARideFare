const assert = require('assert');
const { exactChange } = require('./app');

describe('calculateChange', () => {
  it('should return the correct combination of denominations for a valid fare', () => {
    assert.deepStrictEqual(exactChange([1, 4, 6], 7), [1, 6]);
    assert.deepStrictEqual(exactChange([4,7],11),[4,7]);
    assert.deepStrictEqual(exactChange([6, 13, 13, 21, 23, 24, 23], 57), [13, 21, 23]);
    assert.deepStrictEqual(exactChange([2, 5, 8], 10), [2, 8]);
  });

  it('should return null for an invalid fare', () => {
    assert.deepStrictEqual(exactChange([1, 4, 6], 8), null);
    assert.deepStrictEqual(exactChange( [5, 10], 16), null);
    assert.deepStrictEqual(exactChange([1, 2, 3], 11), null);
  });

  it('should handle edge cases', () => {
    assert.deepStrictEqual(exactChange([1, 4, 6], 0), []);
    assert.deepStrictEqual(exactChange([], 7), null);
    assert.deepStrictEqual(exactChange([1, 2, 3, 4, 5], 100), null);
    assert.deepStrictEqual(exactChange([23], 23), [23]);
  });
});
