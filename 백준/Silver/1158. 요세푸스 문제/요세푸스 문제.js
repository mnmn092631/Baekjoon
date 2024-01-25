let fs = require("fs");
let [n, k] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const queue = Array.from({ length: n }, (_, i) => i + 1);
const answer = [];

let count = 1;
while (queue.length !== 0) {
	let shiftItem = queue.shift();
	if (count === k) {
		answer.push(shiftItem);
		count = 1;
	} else {
		queue.push(shiftItem);
		count++;
	}
}

console.log(`<${answer.join(", ")}>`);
