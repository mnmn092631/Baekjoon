const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = Number(input[0]);
let answer = "";

for (let i = 1; i <= T; i++) {
  const testcase = input[i].split(" ").map(Number);
  answer += testcase[0] + testcase[1] + "\n";
}

console.log(answer);
