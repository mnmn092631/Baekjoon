const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const [a, b, c] = input;
let answer;

if (a === b && b === c) {
  answer = 10000 + a * 1000;
  console.log(answer);
} else if (a === b || a === c || b === c) {
  a === b
    ? (answer = 1000 + a * 100)
    : a === c
    ? (answer = 1000 + a * 100)
    : (answer = 1000 + b * 100);
  console.log(answer);
} else {
  a > b ? (answer = a) : (answer = b);
  answer > c ? (answer *= 100) : (answer = c * 100);
  console.log(answer);
}
