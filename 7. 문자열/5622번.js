const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const dial = {
  ABC: 2,
  DEF: 3,
  GHI: 4,
  JKL: 5,
  MNO: 6,
  PQRS: 7,
  TUV: 8,
  WXYZ: 9,
};

const answer = input.reduce((acc, cur) => {
  for (const key in dial) {
    if (key.indexOf(cur) !== -1) {
      acc += dial[key] + 1;
    }
  }
  return acc;
}, 0);

console.log(answer);
