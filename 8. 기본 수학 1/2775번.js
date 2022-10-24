const fs = require("fs");

const [T, ...tc] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const apart = Array.from(Array(15), () => new Array(15));

for (let i = 0; i <= 14; i++) {
  apart[0][i] = i;
}

for (let i = 1; i <= 14; i++) {
  for (let j = 1; j <= 14; j++) {
    if (j === 1) {
      apart[i][j] = 1;
    } else {
      apart[i][j] = apart[i - 1][j] + apart[i][j - 1];
    }
  }
}

for (let i = 0; i < Number(T); i++) {
  const k = tc.shift();
  const n = tc.shift();
  console.log(apart[k][n]);
}
