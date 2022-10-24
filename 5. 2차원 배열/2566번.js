const fs = require("fs");
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input.map((item) => item.split(" ").map(Number));

let max = Number.MIN_SAFE_INTEGER;
let num = [0, 0];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      num[0] = i + 1;
      num[1] = j + 1;
    }
  }
}

console.log(max);
console.log(num.join(" "));
