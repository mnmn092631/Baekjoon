const fs = require("fs");
let [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = "";

arr = arr
  .map((item) => item.split(" "))
  .sort((a, b) => {
    return Number(a[0]) - Number(b[0]);
  })
  .forEach((item) => (answer += `${item.join(" ")}\n`));

console.log(answer);
