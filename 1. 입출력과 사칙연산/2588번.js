const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num2 = input[1].split("").reverse();

console.log(input[0] * num2[0]);
console.log(input[0] * num2[1]);
console.log(input[0] * num2[2]);
console.log(input[0] * input[1]);
