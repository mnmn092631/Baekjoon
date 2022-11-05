const fs = require("fs");
const [NM, arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);
const nums = arr.split(" ").map(Number);

let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum <= M && answer < sum) answer = sum;
    }
  }
}

console.log(answer);
