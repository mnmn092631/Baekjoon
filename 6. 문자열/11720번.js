const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1];
let sum = 0;

for (let i = 0; i < N; i++) {
  const num = arr.split("").map(Number);
  sum += num[i];
}

console.log(sum);
