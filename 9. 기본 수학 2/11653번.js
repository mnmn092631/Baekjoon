const fs = require("fs");
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let N = Number(input);

for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    console.log(i);
    N /= i;
  }
}
