const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

for (i = 1; i <= N; i++) {
  let count = 0;
  let sum = 0;

  const testcase = input[i];

  for (j = 0; j < testcase.length; j++) {
    if (testcase[j] === "O") {
      count++;
    } else {
      count = 0;
    }

    sum += count;
  }
  console.log(sum);
}
