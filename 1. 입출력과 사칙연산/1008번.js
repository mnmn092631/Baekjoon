const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = +input[0];
const B = +input[1];

console.log(A / B);
