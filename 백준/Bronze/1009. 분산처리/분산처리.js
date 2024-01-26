let fs = require("fs");
let [T, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < T; i++) {
	const [a, b] = arr[i].split(" ");
	let last = 1;

	for (let j = 0; j < b; j++) {
		last *= a;
		if (last > 10) last %= 10;
		if (last === 0) last = 10;
	}

	console.log(last);
}
