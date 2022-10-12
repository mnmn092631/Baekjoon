const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let max = Number.MIN_SAFE_INTEGER;
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
    count = i + 1;
  }
}

console.log(`${max}\n${count}`);
