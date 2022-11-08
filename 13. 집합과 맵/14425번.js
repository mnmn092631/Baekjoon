const fs = require("fs");
const [NM, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const S = new Set(arr.slice(0, N));
const arr2 = arr.slice(-M);
let count = 0;

arr2.forEach((word) => {
  S.has(word) && count++;
});

console.log(count);
