/** @format */

//console.clear();

const { Permissions } = require('discord.js');

const Client = require("./structures/Client.js");

const Command = require("./structures/Command.js");

const config = require("./data/config.json");

const client = new Client();

const cron = require('cron');

const fs = require("fs");

const axios = require('axios');

global.ratePity = 0;
global.userPity = [0];
global.userPity.fill(0,0,4294967295);

/*hello my dear friend,
You might wonder "wtf is this line doing here?"
Well, nothing much. Anyway, if you wanna distribute the code somewhere else, just remember to credit me and my friend
and for any hour wasted on this code place, increase the interger below to warn the other :)
Time_wasted_couting_in_hour: 125*/


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
		console.log(`[${time} INFO] Command ${command.name} lock and loaded`);
		client.commands.set(command.name, command);
	});

client.on("ready", async () => {
	var time = new Date().toLocaleTimeString('en-US', { hour12: false,
																					 hour: "numeric",
																					 minute: "numeric",
																					 second: "numeric"})
	var latestxkcd =  await axios.get(`https://xkcd.com/info.0.json`);
	fs.writeFile('./src/data/xkcd.json',JSON.stringify(latestxkcd.data), err => {
		if (err) {
			console.log("[", time, "]", "ERROR: Cannot write to file! Throwing error below");
			throw(err);
		}
	})
	console.log(`[${time} INFO] Angie is on`);
	var cachexkcd = cron.CronJob('0 23 * * * 1,3,5', async function(){
	console.log(`[${time} INFO] Caching latest xkcd data...`);
	latestxkcd =  await axios.get(`https://xkcd.com/info.0.json`);
	lateststr = JSON.stringify(latestxkcd.data);
	fs.writeFile('./src/data/xkcd.json', lateststr, err => {
		if (err) {
			console.log("[", time, "]", "ERROR: Cannot write to file! Throwing error below");
			throw(err);
		}
	})
	console.log(`[${time} INFO] Caching complete. Latest is #${latestxkcd.data.num}`);
});
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

	var command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) var command = client.commands.find(cmd => cmd.alias == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	command.run(message, args, client);
});

// let scheduledMessage = new cron.CronJob('* * * 14 4 *', () => {
//	client.channels.cache.get('A_channel_ID_go_here').send('Its my birthday today UwU')
// });

// scheduledMessage.start()


client.login(config.token);


