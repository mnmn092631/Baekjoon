const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = Number(input);
let answer = 0;

while (true) {
  if (N % 5 === 0) {
    console.log(N / 5 + answer);
    break;
  }

  if (0 > N) {
    console.log(-1);
    break;
  }

  N -= 3;
  answer++;
}
