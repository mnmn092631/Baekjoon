const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const piece = [1, 1, 2, 2, 2, 8];

const answer = input.map((e, i) => {
  return piece[i] - e;
});

console.log(...answer);
