const fs = require("fs");
const [T, ...tc] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let primeArr = [];

for (let i = 2; i <= 10000; i++) {
  primeArr[i] = i;
}

for (let i = 2; i <= 10000; i++) {
  if (primeArr[i] === 0) {
    continue;
  }
  for (let j = i * 2; j <= 10000; j += i) {
    primeArr[j] = 0;
  }
}

primeArr = primeArr.filter((num) => num !== 0);

for (const n of tc) {
  let answerCase = [];
  for (let i = 0; primeArr[i] < n / 2 + 1; i++) {
    const index = primeArr.indexOf(n - primeArr[i]);
    if (index !== -1) {
      answerCase.push([primeArr[i], primeArr[index]]);
    }
  }
  if (answerCase.length !== 0) {
    const answer = answerCase.pop();
    console.log(`${answer[0]} ${answer[1]}`);
  }
}
