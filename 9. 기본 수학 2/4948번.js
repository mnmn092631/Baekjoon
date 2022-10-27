const fs = require("fs");
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (const n of input) {
  if (n === 0) {
    break;
  }

  let primeArr = new Array(2 * n + 1).fill(true);
  primeArr[1] = false;

  for (let i = 2; i <= Math.floor(Math.sqrt(2 * n)); i++) {
    if (!primeArr[i]) {
      continue;
    }

    for (let j = i * 2; j <= 2 * n; j += i) {
      primeArr[j] = false;
    }
  }

  let count = 0;
  for (let i = n + 1; i <= 2 * n; i++) {
    primeArr[i] && count++;
  }
  console.log(count);
}
