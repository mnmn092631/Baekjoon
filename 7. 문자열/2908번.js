const fs = require("fs");

const [num1, num2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const reverseNum1 = num1.split("").reverse().join("");
const reverseNum2 = num2.split("").reverse().join("");

reverseNum1 > reverseNum2 ? console.log(reverseNum1) : console.log(reverseNum2);
