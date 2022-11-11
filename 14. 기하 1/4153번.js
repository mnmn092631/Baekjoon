const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const testcase = input
  .splice(0, input.length - 1)
  .map((row) => row.split(" ").map((num) => num * num));

const answer = [];

testcase.forEach((row) => {
  const max = Math.max(...row);
  const sum = row.reduce((acc, cur) => acc + cur, 0);

  if (max === sum - max) answer.push("right");
  else answer.push("wrong");
});

console.log(answer.join("\n"));
