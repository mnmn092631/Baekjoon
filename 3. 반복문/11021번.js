const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = Number(input[0]);

for (i = 1; i <= T; i++) {
  const testcase = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${testcase[0] + testcase[1]}`);
}
