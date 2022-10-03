const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const now = input[0].split(" ").map(Number);
let [h, m] = now;
const time = Number(input[1]);

m += time;

if (m >= 60) {
  h += parseInt(m / 60);
  m = m % 60;

  if (h >= 24) {
    h = h % 24;
  }

  console.log(`${h} ${m}`);
} else {
  console.log(`${h} ${m}`);
}
