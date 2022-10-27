const fs = require("fs");
const [N, ...tc] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sorted = tc.sort((a, b) => a - b);
console.log(sorted.join("\n"));
