const fs = require("fs");
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const A = [];
const B = [];

for (let i = 1; i < input.length; i++) {
  const row = input[i].split(" ").map(Number);
  if (i <= N) {
    A.push(row);
  } else {
    B.push(row);
  }
}

for (let i = 0; i < N; i++) {
  const answer = [];
  for (let j = 0; j < M; j++) {
    const sum = A[i][j] + B[i][j];
    answer.push(sum);
  }
  console.log(answer.join(" "));
}
