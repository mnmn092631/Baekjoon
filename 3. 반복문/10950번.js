const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = +input[0];

for (let i = 1; i <= T; i++) {
  const testcase = input[i].split(" ").map(Number);
  console.log(testcase[0] + testcase[1]);
}
