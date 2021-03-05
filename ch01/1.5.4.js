const math = require("mathjs");

const A = [
	[1, 2],
	[3, 4]
];

console.log(math.matrix(A).size()); // [2, 2]
console.log(math.matrix(A).datatype()); // undefined (Expected in Python: dtype('int64'))


const B = [
	[3, 0],
	[0, 6]
];

console.log(math.add(A, B)); // [[4, 2], [3, 10]]
console.log(math.dotMultiply(A, B)); // [[3, 0], [0, 24]]