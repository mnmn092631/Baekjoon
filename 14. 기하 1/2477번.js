const fs = require("fs");
const [K, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = new Array(4).fill(0);
const testcase = arr.map((row) => row.split(" ").map(Number));
testcase.forEach((row) => count[row[0] - 1]++);

let big = 1;
let small = 1;

for (let i = 0; i < testcase.length; i++) {
  if (count[testcase[i][0] - 1] == 1) {
    big *= testcase[i][1];
    continue;
  }

  if (testcase[i][0] === testcase[(i + 2) % 6][0]) {
    small *= testcase[(i + 1) % 6][1];
  }
}

console.log(K * (big - small));
