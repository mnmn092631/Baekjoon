const fs = require("fs");
let [N, arr1, M, arr2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cards = new Set(arr1.split(" "));
const answer = [];

arr2.split(" ").forEach((num) => {
  cards.has(num) ? answer.push(1) : answer.push(0);
});

console.log(answer.join(" "));
