const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const x = Number(input[0]);
const n = Number(input[1]);
let sum = 0;

for (let i = 2; i < n + 2; i++) {
  const item = input[i].split(" ").map(Number);
  sum += item[0] * item[1];
}

if (x === sum) {
  console.log("Yes");
} else {
  console.log("No");
}
