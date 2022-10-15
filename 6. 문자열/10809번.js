const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const abc = "abcdefghijklmnopqrstuvwxyz";

let answer = [];

for (let i = 0; i < abc.length; i++) {
  answer.push(input.indexOf(abc[i]));
}

console.log(answer.join(" "));
