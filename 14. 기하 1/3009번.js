const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const x = input.map((v) => v[0]).sort((a, b) => a - b);
const y = input.map((v) => v[1]).sort((a, b) => a - b);

const x4 = x[0] === x[1] ? x[2] : x[0];
const y4 = y[0] === y[1] ? y[2] : y[0];

console.log(x4, y4);
