const fs = require("fs");
let [T, ...testcase] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
testcase = testcase.map((item) => item.split(" ").map(Number));
const answer = [];

for (let i = 0; i < Number(T); i++) {
  const [x1, y1, r1, x2, y2, r2] = testcase[i];
  const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  const sumR = r1 + r2;
  const diffR = Math.abs(r1 - r2);

  if (d === 0 && r1 === r2) answer.push(-1);
  else if (sumR === d || diffR === d) answer.push(1);
  else if (diffR < d && d < sumR) answer.push(2);
  else answer.push(0);
}

console.log(answer.join("\n"));
