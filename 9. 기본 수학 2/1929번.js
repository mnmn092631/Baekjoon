const fs = require("fs");
const [M, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const primeArr = new Array(N + 1).fill(true);
primeArr[1] = false;

for (let i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
  if (!primeArr[i]) {
    continue;
  }

  for (let j = i * 2; j <= N; j += i) {
    primeArr[j] = false;
  }
}

const answer = [];
for (let i = M; i <= N; i++) {
  if (primeArr[i]) {
    answer.push(i);
  }
}

console.log(answer.join("\n"));
