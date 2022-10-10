const fs = require("fs");
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

let answer = "";

for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    answer += " ";
  }
  for (let k = 0; k < i; k++) {
    answer += "*";
  }
  answer += "\n";
}

console.log(answer);
