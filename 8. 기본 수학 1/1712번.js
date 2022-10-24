const fs = require("fs");

const [fc, vc, p] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const q = Math.floor(fc / (p - vc)) + 1;

console.log(p - vc <= 0 ? -1 : q);
