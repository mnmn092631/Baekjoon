const fs = require("fs");
const [NM, A, B] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = new Set(A.split(" ").map(Number));

B.split(" ")
  .map(Number)
  .forEach((num) => {
    if (answer.has(num)) answer.delete(num);
    else answer.add(num);
  });

console.log(answer.size);
