const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = "";

for (let i = 0; i < n; i++) {
  if (arr[i] < x) {
    answer += arr[i];
    answer += " ";
  }
}

console.log(answer);
