const fs = require("fs");
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((acc, cur) => {
  return acc + cur;
}, 0);

const mid = input.sort((a, b) => a - b)[2];

console.log(sum / 5 + "\n" + mid);
