const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const C = Number(input[0]);

for (let i = 1; i <= C; i++) {
  const score = input[i].split(" ").map(Number);
  const num = Number(score[0]);
  let sum = 0;
  let count = 0;

  for (let j = 1; j <= num; j++) {
    sum += score[j];
  }

  const avg = sum / num;

  for (let k = 1; k <= num; k++) {
    if (score[k] > avg) {
      count++;
    }
  }

  let answer = (count / num) * 100;

  console.log(`${answer.toFixed(3)}%`);
}
