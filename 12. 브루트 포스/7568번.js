const fs = require("fs");
let [N, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
N = Number(N);
arr = arr.map((row) => row.split(" ").map(Number));

const rankArr = new Array(N);

for (let i = 0; i < N; i++) {
  const [x, y] = arr[i];
  let count = 1;

  for (let j = 0; j < N; j++) {
    const [p, q] = arr[j];

    if (x < p && y < q) count++;
  }
  rankArr[i] = count;
}

console.log(rankArr.join(" "));
