const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const mul = a * b;

while (b !== 0) {
  r = a % b;
  a = b;
  b = r;
}

console.log(a + "\n" + mul / a);
