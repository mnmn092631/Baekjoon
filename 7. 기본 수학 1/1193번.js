const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
let line = 1;
let sum = 0;

while (true) {
  sum += line;

  if (N <= sum) {
    let a = line - (sum - N);
    let b = line + 1 - a;

    if (line % 2 === 0) {
      console.log(`${a}/${b}`);
    } else {
      console.log(`${b}/${a}`);
    }

    break;
  }

  line++;
}
