class Man {
	constructor (name) {
		this.name = name;
		console.log("Initialized!");
	}

	hello () {
		console.log("Hello " + this.name + "!");
	}

	goodbye () {
		console.log("Good-bye " + this.name + "!");
	}
}

const m = new Man("David"); // Initialized!
m.hello(); // Hello David!
m.goodbye(); // Good-bye David!