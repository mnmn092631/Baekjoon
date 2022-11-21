const fs = require("fs");
let [num, testcase] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
testcase = testcase.split(" ").map(Number);

const max = Math.max(...testcase);
const min = Math.min(...testcase);
console.log(max * min);
