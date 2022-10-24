const fs = require("fs");

let [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

A = BigInt(A);
B = BigInt(B);
console.log((A + B).toString());
