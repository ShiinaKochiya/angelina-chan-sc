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
global.userCost = [0];
global.userPity.fill(0,0,4294967295);
global.userCost.fill(200,0,4294967295);
global.lockdown = false;

/*hello my dear friend,
You might wonder "wtf is this line doing here?"
Well, nothing much. Anyway, if you wanna distribute the code somewhere else, just remember to credit me and my friend
and for any hour wasted on this code place, increase the interger below to warn the other :)
Time_wasted_couting_in_hour: 763*/


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
	console.log(`[${time} INFO] Angie is on`);
	var cachexkcd = cron.CronJob('0 23 * * * 1,3,5', async function(){
	console.log(`[${time} INFO] Caching latest xkcd data...`);
	var latestxkcd =  await axios.get(`https://xkcd.com/info.0.json`);
	var lateststr = JSON.stringify(latestxkcd.data);
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
client.snipes = new Map()
client.on('messageDelete', function(message, channel){
	client.snipes.set(message.channel.id, {
		content: message.content,
		author: message.author,
		image: message.attachments.first() ? message.attachments.first().proxyURL : null 
	})
})

client.on("messageCreate", message => {
	//console.log(message.author.tag,"in ",message.channel.name,`: `, message.content);

	if (message.author.bot) return;
	
	if (message.content == "b!kho"){
		message.reply(`<@${message.author.id}> thấy ca này khó`)
	}

	//if (!start === config.prefix) return;

	//if (!message.content.toLowerCase().startsWith(config.prefix)) return;

	if(message.content.slice(0, config.prefix.length).toLowerCase() !== config.prefix) return;

	if (message.author.bot) return;

	const args = message.content.substring(config.prefix.length).split(/ +/);

	var command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) var command = client.commands.find(cmd => cmd.alias == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	if(global.lockdown == false){command.run(message, args, client);} else {
		if (message.content == "a!lockdown disabled"){
			message.reply("Bot lockdown disabled, have fun")
			global.lockdown = false
		}
	}
});

// let scheduledMessage = new cron.CronJob('* * * 14 4 *', () => {
//	client.channels.cache.get('A_channel_ID_go_here').send('Its my birthday today UwU')
// });

// scheduledMessage.start()


client.login(config.token);


