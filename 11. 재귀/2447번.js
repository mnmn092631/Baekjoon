const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();
let answer = "";

function star(i, j, num) {
  if (parseInt(i / num) % 3 === 1 && parseInt(j / num) % 3 === 1)
    return (answer += " ");
  else {
    if (parseInt(num / 3) === 0) return (answer += "*");
    else return star(i, j, num / 3);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    star(i, j, N);
  }
  answer += "\n";
}

console.log(answer);
