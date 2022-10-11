const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = Number(input);
let sum;
let count = 0;

while (true) {
  count++;

  sum = parseInt(N / 10) + (N % 10);
  N = (N % 10) * 10 + (sum % 10);

  if (Number(input) === N) {
    break;
  }
}

console.log(count);
