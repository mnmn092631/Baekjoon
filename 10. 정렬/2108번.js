const fs = require("fs");
const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const avg = Math.round(arr.reduce((acc, cur) => acc + cur) / N);

const count = arr.reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 1;
  } else {
    acc[cur]++;
  }
  return acc;
}, {});

let maxCount = Math.max(...Object.values(count));
let maxCountArr = [];
let mode = 0;

for (let numKey in count) {
  if (count[numKey] === maxCount) {
    maxCountArr.push(numKey);
  }
}

if (maxCountArr.length > 1) {
  maxCountArr.sort((a, b) => a - b);
  mode = maxCountArr[1];
} else {
  mode = maxCountArr[0];
}

console.log(avg === -0 ? 0 : avg);
console.log(arr.sort((a, b) => a - b)[(N - 1) / 2]);
console.log(mode);
console.log(arr[N - 1] - arr[0]);
