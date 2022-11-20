const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

console.log((Math.PI * input ** 2).toFixed(6));
console.log((2 * input ** 2).toFixed(6));
