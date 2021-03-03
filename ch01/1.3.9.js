let hello = function () {
	console.log("Hello World!");
}

hello(); // Hello World!


// 巻き上げ回避
hello = function (obj) {
	console.log("Hello " + obj + "!");
}

hello("cat"); // Hello cat!