let hungry = true;
if (hungry) console.log("I'm hungry"); // I'm hungry


hungry = false;

/**
 * I'm not hungry
 * I'm sleepy
 */
if (hungry) {
	console.log("I'm hungry");
} else {
	console.log("I'm not hungry");
	console.log("I'm sleepy");
}