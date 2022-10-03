const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const [h, m] = input;

if (m >= 45) {
  console.log(`${h} ${m - 45}`);
} else {
  if (h > 0) {
    console.log(`${h - 1} ${m + 15}`);
  } else {
    console.log(`${h + 23} ${m + 15}`);
  }
}
