const fs = require("fs");
let [NM, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    for (let w = 0; w < 2; w++) {
      const start = w === 0 ? "W" : "B";
      let count = 0;

      for (let a = i; a < i + 8; a++) {
        for (let b = j; b < j + 8; b++) {
          if (a % 2 === i % 2) {
            if (b % 2 === j % 2) {
              if (arr[a][b] !== start) count++;
            } else {
              if (arr[a][b] === start) count++;
            }
          } else {
            if (b % 2 === j % 2) {
              if (arr[a][b] === start) count++;
            } else {
              if (arr[a][b] !== start) count++;
            }
          }
        }
      }
      min = Math.min(min, count);
    }
  }
}

console.log(min);
