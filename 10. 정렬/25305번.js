const fs = require("fs");
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, k] = input[0].split(" ").map(Number);
const x = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(x[k - 1]);
