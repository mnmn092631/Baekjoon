const fs = require("fs");
let [N, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
arr = arr.split(" ").map(Number);
let rank = 0;
const rankMap = new Map();

arr
  .slice()
  .sort((a, b) => a - b)
  .forEach((num) => {
    if (!rankMap.has(num)) {
      rankMap.set(num, rank++);
    }
  });

console.log(arr.map((num) => rankMap.get(num)).join(" "));
