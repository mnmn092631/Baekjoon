const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = new Array(30).fill(0);

for (const num of input) {
  arr[num - 1] = 1;
}

console.log(`${arr.indexOf(0) + 1}
${arr.lastIndexOf(0) + 1}`);
