const fs = require("fs");
const [NM, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = NM.split(" ").map(Number);

const list = new Map();
const answer = [];

arr.slice(0, N).forEach((name) => {
  list.set(name, name);
});

arr
  .slice(-M)
  .sort()
  .forEach((name) => {
    if (list.has(name)) {
      answer.push(list.get(name));
    }
  });

console.log(`${answer.length}\n${answer.join("\n")}`);
