const sum = require('../sum');
const assert = require('assert');

describe('Sum', () => {
  it('Prueba de numeros positivos', () => {
    assert.equal(sum(3, 5), 8);
  });
  it('Prueba de numeros negativos', () => {
    assert.equal(sum(3, -5), -2);
  });
  it('Prueba de decimales', () => {
    assert.equal(sum(3.5, 7.1), 10.6);
  });
});
