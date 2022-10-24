const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

let endNum = 1,
  count = 1;

while (endNum < N) {
  endNum += 6 * count;
  count++;
}

console.log(count);
