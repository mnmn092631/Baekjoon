const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const word = new Set();

for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j + i <= input.length; j++) {
    const item = input.slice(j, j + i);
    word.add(item);
  }
}

console.log(word.size);
