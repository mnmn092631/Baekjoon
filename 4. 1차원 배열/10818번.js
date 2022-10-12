const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const Array = input[1].split(" ").map(Number);

console.log(`${Math.min(...Array)} ${Math.max(...Array)}`);
