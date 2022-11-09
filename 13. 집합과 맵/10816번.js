const fs = require("fs");
let [N, arr1, M, arr2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const answer = [];
const card = new Map();

arr1
  .split(" ")
  .map(Number)
  .forEach((num) => {
    if (card.has(num)) {
      card.set(num, card.get(num) + 1);
    } else card.set(num, 1);
  });

arr2
  .split(" ")
  .map(Number)
  .forEach((num) => {
    if (card.has(num)) {
      answer.push(card.get(num));
    } else answer.push(0);
  });

console.log(answer.join(" "));
