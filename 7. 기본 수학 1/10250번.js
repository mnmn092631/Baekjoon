const fs = require("fs");

const [T, ...tc] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (i = 0; i < Number(T); i++) {
  const [H, W, N] = tc[i].split(" ").map(Number);
  let X = parseInt(N / H) + 1;
  let Y = N % H;

  if (Y === 0) {
    X -= 1;
    Y = H;
  }

  X < 10 && (X = `0${X}`);
  console.log(`${Y}${X}`);
}
