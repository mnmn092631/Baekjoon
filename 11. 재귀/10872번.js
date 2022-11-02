const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(input));
