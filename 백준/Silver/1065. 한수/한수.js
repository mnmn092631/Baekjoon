const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

let count = 0;

for (let i = 1; i <= N; i++) {
  let strN = String(i);

  if (i <= 99) {
    count++;
  } else {
    let A = Number(strN[0]) - Number(strN[1]);
    let B = Number(strN[1]) - Number(strN[2]);
    A === B && count++;
  }
}

console.log(count);
