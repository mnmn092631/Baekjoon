let fs = require("fs");
let [T, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const multipleUnitsArr = [[10], [1], [2, 4, 8, 6], [3, 9, 7, 1], [4, 6], [5], [6], [7, 9, 3, 1], [8, 4, 2, 6], [9, 1]];

for (let i = 0; i < T; i++) {
	const [a, b] = arr[i].split(" ");
	const multipleUnits = multipleUnitsArr[a % 10];

	if (multipleUnits.length === 1) console.log(multipleUnits[0]);
	else console.log(multipleUnits[(b - 1) % multipleUnits.length]);
}
