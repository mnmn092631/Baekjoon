const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

for (let i = 1; i < input; i++) {
  let sum = i;
  let num = i;

  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }

  if (input === sum) return console.log(i);
}

console.log(0);
