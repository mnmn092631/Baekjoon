const fs = require("fs");
const [N, ...nums] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const diffs = [];
nums.sort((a, b) => b - a);

for (let i = 0; i < nums.length - 1; i++) {
  diffs.push(nums[i] - nums[i + 1]);
}

function getGDC(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

let GDC = diffs[0];
for (let i = 1; i < diffs.length; i++) {
  GDC = getGDC(GDC, diffs[i]);
}

let answer = [];
for (let i = 1; i <= Math.sqrt(GDC); i++) {
  if (GDC % i === 0) {
    if (i !== 1) answer.push(i);
    if (GDC / i !== i) answer.push(GDC / i);
  }
}
console.log(answer.sort((a, b) => a - b).join(" "));
