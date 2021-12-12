/** @format */

console.clear();

const Client = require("./structures/Client.js");

const Command = require("./structures/Command.js");

const config = require("./data/config.json");

const client = new Client();
	
const fs = require("fs");

fs.readdirSync("./src/cmd")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		/**
		 * @type {Command}
		 */
		const command = require(`./cmd/${file}`);
		console.log(`Command ${command.name} lock and loaded`);
		client.commands.set(command.name, command);
	});

client.on("ready", () => {
	console.log("Angie is on")
	client.user.setStatus('idle');
    client.user.setActivity({type: `WATCHING`, name:`film with Sakura`})
	
});

client.on("messageCreate", message => {
	//console.log(message.author.tag,"in ",message.channel.name,`: `, message.content);
	
	//if (message.author.bot) return;

	if (!message.content.startsWith(config.prefix)) return;

	const args = message.content.substring(config.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	command.run(message, args, client);
});

client.login(config.token);