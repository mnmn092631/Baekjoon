const fs = require("fs");

const [N, ...arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const set = new Set();
let answer = "";

arr
  .sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  })
  .forEach((word) => set.add(word));

set.forEach((word) => (answer += `${word}\n`));

console.log(answer);
