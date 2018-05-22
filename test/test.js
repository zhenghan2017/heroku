const should = require('should');
const fibonacci = require('./fibonacci');

describe('fiboncacci.js test', function() {
  it('should equal 55 when n === 10', function() {
    fibonacci(10).should.equal(55);
  });
  it('should equal 0 when n === 0', function () {
    fibonacci(0).should.equal(0);
  });
  it('should equal 1 when n === 1', function () {
    fibonacci(1).should.equal(1);
  });
  it('should throw when n > 10', function () {
    (function () {
      fibonacci(11);
    }).should.throw('n should <= 10');
  });

  it('should throw when n < 0', function () {
    (function () {
      fibonacci(-1);
    }).should.throw('n should >= 0');
  });

  it('should throw when n isnt Number', function () {
    (function () {
      fibonacci('haha');
    }).should.throw('n should be a Number');
  });
});