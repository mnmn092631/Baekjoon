const fs = require("fs");
const [T, ...arrS] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let count = 0;

function recursion(s, l, r) {
  count++;
  if (l >= r) return 1;
  else if (s[l] != s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  count = 0;
  return recursion(s, 0, s.length - 1);
}

for (let i = 0; i < T; i++) {
  console.log(isPalindrome(arrS[i]), count);
}
