const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ");

console.log(arr.filter((item) => item === input[2]).length);
