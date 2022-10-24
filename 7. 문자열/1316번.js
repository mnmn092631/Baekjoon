const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, ...arr] = input;
let count = arr.length;

for (let i = 0; i < Number(N); i++) {
  const word = arr[i];
  const letter = [];

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else if (letter.indexOf(word[j]) !== letter.length - 1) {
      count--;
      break;
    }
  }
}
console.log(count);
