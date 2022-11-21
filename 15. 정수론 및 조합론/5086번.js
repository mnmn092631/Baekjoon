const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));
const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const [num1, num2] = input[i];
  if (num2 % num1 === 0) {
    answer.push("factor");
  } else if (num1 % num2 === 0) {
    answer.push("multiple");
  } else {
    answer.push("neither");
  }
}

console.log(answer.join("\n"));
