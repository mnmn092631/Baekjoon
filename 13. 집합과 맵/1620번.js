const fs = require("fs");
const [NM, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = NM.split(" ").map(Number);
const arr1 = arr.slice(0, N);
const arr2 = arr.slice(-M);
const pokemon = new Map(arr1.map((val, idx) => [val, idx + 1]));
const answer = [];

arr2.forEach((val) => {
  if (pokemon.get(val)) answer.push(pokemon.get(val));
  else answer.push(arr1[val - 1]);
});

console.log(answer.join("\n"));
