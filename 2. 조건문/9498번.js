const fs = require("fs");

let num = require("fs").readFileSync("/dev/stdin").toString();
num = Number(num);

num >= 90
  ? console.log("A")
  : num >= 80
  ? console.log("B")
  : num >= 70
  ? console.log("C")
  : num >= 60
  ? console.log("D")
  : console.log("F");
