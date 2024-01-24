let fs = require("fs");
let input = +fs.readFileSync("/dev/stdin").toString().trim();

const queue = Array.from({ length: input }, (_, i) => i + 1);
const answer = [];

for (let i = 0; i < input; i++) {
	answer.push(queue.shift());
	let moveItem = queue.shift();
	queue.push(moveItem);
}

console.log(answer.join(" "));
