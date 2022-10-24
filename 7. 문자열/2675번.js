const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let answer = [];
  const tc = input[i].trim().split(" ");
  for (let j = 0; j < tc[1].length; j++) {
    for (let k = 0; k < Number(tc[0]); k++) {
      answer.push(tc[1][j]);
    }
  }
  console.log(answer.join(""));
}
