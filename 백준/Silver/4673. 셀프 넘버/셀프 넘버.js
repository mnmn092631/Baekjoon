let arr = [];
let answer = [];

for (let i = 1; i <= 10000; i++) {
  let N = i;
  let strN = String(i);
  for (let j = 0; j < strN.length; j++) {
    N += Number(strN[j]);
  }
  arr.push(N);
}

for (let i = 1; i <= 10000; i++) {
  if (arr.indexOf(i) === -1) {
    answer += `${i}\n`;
  }
}

console.log(answer);
