const sum = require('../');
const assert = require('assert');

describe('Sum', () => {
  it('Prueba de números positivos', () => {
    assert.equal(sum(3, 5), 8);
  });
  it('Prueba de números negativos', () => {
    assert.equal(sum(3, -5), -2);
  });
  it('Prueba de decimales', () => {
    assert.equal(sum(3.5, 7.1), 10.6);
  });
});
