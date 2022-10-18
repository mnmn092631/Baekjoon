const fs = require("fs");

let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const alphabet of croatia) {
  while (input !== input.replace(alphabet, "")) {
    input = input.replace(alphabet, " ");
  }
}

console.log(input.length);
