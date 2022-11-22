const fs = require("fs");
let [T, ...testcase] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

testcase = testcase.map((item) => item.split(" ").map(Number));
const answer = [];

for (let i = 0; i < Number(T); i++) {
  let [a, b] = testcase[i];
  const mul = a * b;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  answer.push(mul / a);
}

console.log(answer.join("\n"));
