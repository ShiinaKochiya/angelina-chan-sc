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
global.lockdown = false;
global.havoc = false;
global.chk = false;

/*hello my dear friend,
You might wonder "wtf is this line doing here?"
Well, nothing much. Anyway, if you wanna distribute the code somewhere else, just remember to credit me and my friend
and for any hour wasted on this code place, increase the interger below to warn the other :)
Time_wasted_couting_in_hour: 758*/


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

//for assignment
client.on("presenceUpdate", (oldPresence, newPresence) => {
	if(newPresence.userId == "689364440600412195"){ // check if its me or not
		var time = new Date().toLocaleTimeString('en-US', { hour12: false,
			hour: "numeric",
			minute: "numeric",
			second: "numeric"});
			const newActivities = newPresence.activities.filter(a => a.type === "PLAYING");
			
			if (newActivities.some(n => work(n.name)) && global.chk == false) {
				client.channels.cache.get('944835286226051113').send(`<@${newPresence.userId}> is doing assignment at ${time}`);
				global.chk = true;
			}

			if (!newActivities.some(n => work(n.name)) && global.chk == true){
				global.chk = false;
				client.channels.cache.get('944835286226051113').send(`<@${newPresence.userId}> stopped doing assignment at ${time}`);
			}


			function work(s){return s == "Visual Studio Code"}
	
	
	}
});

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

	//if (!start === config.prefix) return;

	//if (!message.content.toLowerCase().startsWith(config.prefix)) return;
	if (global.havoc == true && message.guild.id == 829400192142409838){message.reply("Then start a conversation smh")}

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




client.login(config.token);


