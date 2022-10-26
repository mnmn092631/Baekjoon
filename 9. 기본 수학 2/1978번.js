const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);
let count = 0;

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

for (const num of arr) {
  isPrime(num) && count++;
}

console.log(count);
