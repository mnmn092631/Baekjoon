const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const Array = input.map((item) => item % 42);
const answer = {};

for (const item of Array) {
  if (answer[item]) {
    answer[item] = answer[item] + 1;
  } else {
    answer[item] = 0 + 1;
  }
}

console.log(Object.keys(answer).length);
