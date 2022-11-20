const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();
let count = 0;
let num = 666;

while (count < input) {
  if (String(num).includes("666")) {
    count++;
  }
  num++;
}

console.log(num - 1);
