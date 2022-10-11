const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  if (A + B === 0) {
    break;
  } else {
    console.log(A + B);
  }
}
