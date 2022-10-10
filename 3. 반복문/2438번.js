const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = Number(input);

let answer = "";

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    answer += "*";
  }
  answer += "\n";
}

console.log(answer);
