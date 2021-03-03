const math = require("mathjs");

const x = [1.0, 2.0, 3.0];
const y = [2.0, 4.0, 6.0];

console.log(math.add(x, y)); // [3, 6, 9]
console.log(math.subtract(x, y)); // [-1, -2, -3]
console.log(math.dotMultiply(x, y)); // [2, 8, 18]
console.log(math.dotDivide(x, y)); // [0.5, 0.5, 0.5]

console.log(math.dotDivide(x, 2.0)); // [0.5, 1, 1.5]