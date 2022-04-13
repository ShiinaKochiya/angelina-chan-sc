/** @format */

//console.clear();

const { Permissions } = require('discord.js');

const Client = require("./structures/Client.js");

const Command = require("./structures/Command.js");

const config = require("./data/config.json");

const client = new Client();

const cron = require('cron');

const fs = require("fs");

/*hello my dear friend,
You might wonder "wtf is this line doing here?"
Well, nothing much. Anyway, if you wanna distribute the code somewhere else, just remember to credit me and my friend
and for any hour wasted on this code place, increase the interger below to warn the other :)
Time_wasted_couting_in_hour: 124*/


fs.readdirSync("./src/cmd")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		/**
		 * @type {Command}
		 */
		const command = require(`./cmd/${file}`);
		var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                             hour: "numeric",
                                             minute: "numeric",
																					   second: "numeric"})
		console.log("[", time, "]", `Command ${command.name} lock and loaded`);
		client.commands.set(command.name, command);
	});

client.on("ready", () => {
	var time = new Date().toLocaleTimeString('en-US', { hour12: false,
																					 hour: "numeric",
																					 minute: "numeric",
																					 second: "numeric"})
	console.log("[", time, "]", "Angie is on")
	client.user.setStatus('idle');
    client.user.setActivity({type: `WATCHING`, name:`for someone's return`})

});

/*client.on('guildMemberAdd', member => {
	const mn = member.user.username;
    client.channels.cache.get('907265493600206950').send(`Welcome ${mn}`);
});*/

client.on("messageCreate", message => {
	//console.log(message.author.tag,"in ",message.channel.name,`: `, message.content);

	if (message.author.bot) return;

	//if (!start === config.prefix) return;

	//if (!message.content.toLowerCase().startsWith(config.prefix)) return;

	if(message.content.slice(0, config.prefix.length).toLowerCase() !== config.prefix) return;

	if (message.author.bot) return;

	const args = message.content.substring(config.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	command.run(message, args, client);
});

let scheduledMessage = new cron.CronJob('* * * 14 4 *', () => {
	client.channels.cache.get('A_channel_ID_go_here').send('Its my birthday today UwU')
  });

 scheduledMessage.start()


client.login(config.token);
