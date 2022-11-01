const fs = require("fs");

let [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

arr = arr.map((item) => item.split(" ").map(Number));

let answer = "";
arr
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })
  .forEach((item) => (answer += `${item[0]} ${item[1]}\n`));

console.log(answer);
