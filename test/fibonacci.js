const n = process.argv[2];

const fibonacci = function (n) {
  if(n === 0 || n === 1) {
    return n
  }
  if(n > 1 && n <= 10) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  if (typeof n !== 'number') {
    throw new Error('n should be a Number');
  }
  if (n < 0) {
    throw new Error('n should >= 0');
  }
  if (n > 10) {
    throw new Error('n should <= 10');
  }
}

module.exports = fibonacci;