const fs = require("fs");

const [M, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const prime = [];

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = M; i <= N; i++) {
  isPrime(i) && prime.push(i);
}

if (prime.length === 0) {
  console.log(-1);
} else {
  const sum = prime.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(sum + "\n" + prime[0]);
}
