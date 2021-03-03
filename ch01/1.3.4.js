const a = [1, 2, 3, 4, 5];

console.log(a); // [1, 2, 3, 4, 5]
console.log(a.length); // 5
console.log(a[0]); // 1
console.log(a[4]); // 5

a[4] = 99;
console.log(a); // [1, 2, 3, 4, 99]

console.log(a.slice(0, 2)); // [1, 2]
console.log(a.slice(1)); // [2, 3, 4, 99]
console.log(a.slice(0, 3)); // [1, 2, 3]
console.log(a.slice(0, -1)); // [1, 2, 3, 4]
console.log(a.slice(0, -2)); // [1, 2, 3]