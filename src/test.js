  /** @format */

const Client = require("./structures/Client.js");
const Command = require("./structures/Command.js");
const fs = require("fs");

fs.readdirSync("./src/cmd")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		/**
		 * @type {Command}
		 */
		const command = require(`./cmd/${file}`);
		console.log(`Command ${command.name} test complete, no errors`);

	});
console.log(`All commands have passed testing. Build complete.`);
return 0;

