const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

function fibonacci(N) {
  if (N === 0) return 0;
  if (N === 1) return 1;
  return fibonacci(N - 1) + fibonacci(N - 2);
}

console.log(fibonacci(N));
