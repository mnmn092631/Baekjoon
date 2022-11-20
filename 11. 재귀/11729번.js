const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();
const answer = [];

function hanoi(N, start, to, via) {
  if (N === 1) {
    answer.push(`${start} ${to}`);
  } else {
    hanoi(N - 1, start, via, to);
    answer.push(`${start} ${to}`);
    hanoi(N - 1, via, to, start);
  }
}

console.log(2 ** input - 1);
hanoi(input, "1", "3", "2");
console.log(answer.join("\n"));
