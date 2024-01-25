let fs = require("fs");
let [n, k] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const queue = Array.from({ length: n }, (_, i) => i + 1);
const answer = [];

let idx = 0;
let count = 1;
while (queue.length !== 0) {
	if (count === k) {
		answer.push(queue.splice(idx, 1));
		count = 1;
	} else {
		idx = (idx + 1) % queue.length;
		count++;
	}
}

console.log(`<${answer.join(", ")}>`);
