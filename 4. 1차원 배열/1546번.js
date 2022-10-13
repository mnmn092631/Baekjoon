const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const score = input[1].split(" ").map(Number);
let max = Math.max(...score);
let answer = 0;

const newScore = score.map((el) => (el / max) * 100);

for (let i = 0; i < newScore.length; i++) {
  answer += newScore[i] / N;
}
console.log(answer);
