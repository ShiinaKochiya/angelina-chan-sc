const Command = require("../structures/Command.js");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "help",
    description: "show bot help",
    aliases:["commands"],

    async run(message, args, client) {
        if (message.author.bot) return;
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
            hour: "numeric",
            minute: "numeric",
            second: "numeric"})
    console.log("[",time,"]", message.author.tag,"needed to remember what commands to use")
        const embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Angelina-chan help page')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setDescription(`Here's a list of commands`)
        .setImage('https://cdn.discordapp.com/emojis/839892689637998612.webp?size=48')
        .setFields(
            { name: 'a!ping', value: 'Check my connection\nCommand usage: a!ping' },
            { name: 'a!roll', value: `Generate a random number (Default is 100)\nCommand usage: a!roll <number/optional>`, inline: false },
		    { name: 'a!ship', value: `Lets see how you fit with the other\nCommand usage: a!ship <name_1> <name_2/optional> or a!ship <name_1_with_space> - <name_2>`, inline: false },
            { name: 'a!blackjack', value: `Play a quick game of Black Jack\nCommand usage: a!blackjack`, inline: false },
            { name: 'a!countdown', value: `countdown a specfic amount of time (in second)\nCommand usage: a!countdown <time>`, inline: false },
            { name: 'a!sauce', value: `Finding sauce for images/links\nCommand usage: a!sauce <attachments/image links>`, inline:false },
            { name: 'a!xkcd', value: `Gets an xkcd comic. \n Command usage: a!xkcd [random | latest | number] (default latest)`, inline:false},
            { name: 'a!xmas', value:`When will christmas arrive? \n Command usage: a!xmas`, inline:false},
            { name: 'a!rps', value: `Play a game of rock paper scissors \n Command usage: a!rps [rocks | papers | scissors]`,inline:false},
            { name: 'a!info', value: 'Information about the bot', inline:false},
            { name: 'a!trivia', value: 'How about a quiz game?\n"It aint gonna work" - Shiina', inline:false},
            { name: 'a!help', value: 'Shows this help message', inline:false},
            { name: '\u200B', value: '\u200B' },
            { name: 'a!timeout', value: 'Discord timeout \n Command usage: a!timeout @member time ',inline:false},
            { name: 'a!kick', value: `Kick a member (mods only)\nCommand usage: a!kick <mention_the_member>`, inline: false },
            { name: 'a!ban', value: `Do I even need to say?\nCommand usage: a!ban <mention_the_member>`, inline: false },
            { name: 'a!lock/a!unlock', value: `Lock/unlock a specific channel (mods only)\nCommand usage: a!lock/a!unlock <channel_ID/optional>`, inline: false },
            { name: 'a!shutdown', value: `A force shutdown command (mods only)\nCommand usage: a!shutdown`, inline: false },
            


        )
        


message.channel.send({embeds: [embed]})
        // this is what the old help command looks like smh
        //message.reply(`**Commands for Angie-chan**\n-------------------------------------------------------------------\na!info - show the info about the bot\na!roll - generate a random number between 0 and 100\na!ping - check the bot latency\na!shutdown - Temporary shut down the bot\na!hentai - sending a random hentai picture from Sakura Vault(Only usable in NSFW channel)\na!ship - ship to see how much you fit with the other\na!operator - show a breif guide for an Operator (to see all available operator, do a!operator list)\na!countdown - countdown a specfic amount of time, expect smth more?\na!wtf - Send BeasttrollMC screaming "WHAT THE FUCK"\na!seggs - SEGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG\na!avatar - get ur avatar pic\na!challenge: Create a randomized roster and a random stage (The command form is a!challenge <number of operators, less than 12>, by default it is 12)\n-------------------------------------------------------------------\nYe that's all, it's just a beta version, not much commands have been added`)

    }   
});
