const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toLowerCase()
  .split("");

const count = input.reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 0;
  }
  acc[cur]++;
  return acc;
}, {});

let result = "";
let max = Number.MIN_SAFE_INTEGER;

for (const i in count) {
  if (count[i] > max) {
    max = count[i];
    result = i.toUpperCase();
  } else if (count[i] === max) {
    result = "?";
  }
}

console.log(result);
