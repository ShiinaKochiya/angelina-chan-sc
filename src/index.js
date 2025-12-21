/** @format */

//console.clear();

const { Permissions } = require('discord.js');

const Client = require("./structures/Client.js");

const Command = require("./structures/Command.js");

const config = require("./data/config.json");

const client = new Client();

const cron = require('cron');

const fs = require("fs");
const path = require('path');

const axios = require('axios');

require('dotenv').config();
//testing with mongo


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
	var cachexkcd = new cron.CronJob('0 23 * * * 1,3,5', async function(){
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
	cachexkcd.start();

	// Hourly market updater: randomly increase or decrease each entry by up to 10%
	var marketUpdater = new cron.CronJob('0 */15 * * * *', function(){
		const marketModulePath = path.join(__dirname, 'data', 'market.json');
		// Read fresh disk state
		const diskRaw = fs.readFileSync(marketModulePath, 'utf8');
		const diskData = JSON.parse(diskRaw);
		// Try to sync disk state into the cached module exports so other modules see changes
		let marketData;
		const cacheEntry = require.cache[require.resolve(marketModulePath)];
		if (cacheEntry && cacheEntry.exports && typeof cacheEntry.exports === 'object') {
			// remove keys present in cache but removed on disk
			Object.keys(cacheEntry.exports).forEach(k => { if (!Object.prototype.hasOwnProperty.call(diskData, k)) delete cacheEntry.exports[k]; });
			// copy disk values into cached object
			Object.keys(diskData).forEach(k => { cacheEntry.exports[k] = diskData[k]; });
			marketData = cacheEntry.exports;
		} else {
			// populate cache (if it wasn't loaded yet)
			marketData = diskData;
			require(marketModulePath);
			const e = require.cache[require.resolve(marketModulePath)];
			if (e) e.exports = marketData;
		}
		const changes = [];
		const lastPercent = {};
		Object.keys(marketData).forEach(key => {
			const old = Number(marketData[key]) || 0;
			const changeFactor = Math.random();
			const sign = Math.random() < 0.5 ? -1 : 1;
			const newVal = Math.round(old * (1 + sign * changeFactor));
			marketData[key] = newVal; // mutate cached object in-place
			const change = newVal - old;
			const percent = old === 0 ? (newVal === 0 ? 0 : 100) : ((change / old) * 100);
			lastPercent[key] = Number(percent.toFixed(2));
			changes.push({ key, old, new: newVal, change, percent: lastPercent[key] });
		});
		// persist
		fs.writeFileSync(marketModulePath, JSON.stringify(marketData, null, 4), 'utf8');
		// ensure cache exports references updated object
		const entry = require.cache[require.resolve(marketModulePath)];
		if (entry) entry.exports = marketData;
		const lastPath = path.join(__dirname, 'data', 'market_last_hour.json');
		fs.writeFileSync(lastPath, JSON.stringify(lastPercent, null, 4), 'utf8');
	});
	marketUpdater.start();

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
		message.channel.send(`<@${message.author.id}> thấy ca này khó`)
	}

	if (message.content == "b!qt"){
		message.channel.send(`<@${message.author.id}> đã quan tâm`)
	}

	if (message.content == "b!kqt"){
		message.channel.send(`<@${message.author.id}> đã đéo hỏi`)
	}

	if (message.content == "b!uoc"){
		message.channel.send(`<@${message.author.id}> chỉ biết ước`)
	}

	if(message.content.toLowerCase().includes("t1") && message.guild.id == "939851547590934610"){
		message.channel.send(`"Đế vương phải có long ngai"\nMấy con gà thì biết cái gì`);
	}

	/*if(message.content.toLowerCase().includes("haidilao") && message.guild.id == "939851547590934610"){
		message.channel.send(`<@740939041675149444> Haidilao when`);
	}*/

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


