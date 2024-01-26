let fs = require("fs");
let N = +fs.readFileSync("/dev/stdin").toString().trim();

for (let i = 0; i < N; i++) {
	console.log(" ".repeat(i) + "*".repeat((N - i) * 2 - 1));
}

for (let i = N - 2; i >= 0; i--) {
	console.log(" ".repeat(i) + "*".repeat((N - i) * 2 - 1));
}
