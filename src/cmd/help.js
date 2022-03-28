const Command = require("../structures/Command.js");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "help",
    description: "show bot help",

    async run(message, args, client) {
        if (message.author.bot) return;
        console.log(message.author.tag,"used a!help")
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
            { name: 'a!operator', value: `show a breif guide for an Operator\nCommand usage: a!operator <list | operator_name>`, inline: false },
            { name: 'a!countdown', value: `countdown a specfic amount of time (in second)\nCommand usage: a!countdown <time>`, inline: false },
            { name: 'a!wtf', value: `BTMC wtf are you doing here?\nCommand usage: a!wtf`, inline: true },
            { name: 'a!seggs', value: `YAMERO TAKESHI\nCommand usage: a!seggs`, inline: true },
            { name: 'a!challenge', value: `Create a randomized roster and a random stage\nCommand usage: a!challenge <number_of_operators/optional>`, inline: false },
            { name: 'a!sakura', value: `a command\nCommand usage: a!sakura`, inline: false },
            { name: 'a!changelog', value: `View Angelina-chan changelog\nCommand usage: a!changelog`, inline: false },
            {name: '\u200B', value: '\u200B' },
            { name: 'a!kick', value: `Kick a member (mods only)\nCommand usage: a!kick <mention_the_member>`, inline: false },
            { name: 'a!ban', value: `Do I even need to say?\nCommand usage: a!ban <mention_the_member>`, inline: false },
            { name: 'a!lock/a!unlock', value: `Lock/unlock a specific channel (mods only)\nCommand usage: a!lock/a!unlock <channel_ID/optional>`, inline: false },
            { name: 'a!shutdown', value: `A force shutdown command (mods only)\nCommand usage: a!shutdown`, inline: false }

        )
        


message.channel.send({embeds: [embed]})
        // this is what the old help command looks like smh
        //message.reply(`**Commands for Angie-chan**\n-------------------------------------------------------------------\na!info - show the info about the bot\na!roll - generate a random number between 0 and 100\na!ping - check the bot latency\na!shutdown - Temporary shut down the bot\na!hentai - sending a random hentai picture from Sakura Vault(Only usable in NSFW channel)\na!ship - ship to see how much you fit with the other\na!operator - show a breif guide for an Operator (to see all available operator, do a!operator list)\na!countdown - countdown a specfic amount of time, expect smth more?\na!wtf - Send BeasttrollMC screaming "WHAT THE FUCK"\na!seggs - SEGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG\na!avatar - get ur avatar pic\na!challenge: Create a randomized roster and a random stage (The command form is a!challenge <number of operators, less than 12>, by default it is 12)\n-------------------------------------------------------------------\nYe that's all, it's just a beta version, not much commands have been added`)

    }   
});
