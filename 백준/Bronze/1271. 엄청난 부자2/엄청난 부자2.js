let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const n = BigInt(input[0]);
const m = BigInt(input[1]);

console.log(`${n / m}
${n % m}`);
