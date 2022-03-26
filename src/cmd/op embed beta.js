const Command = require("../structures/Command.js");

const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "embed",
    description: "show bot help",

    async run(message, args, client) {
        if (message.author.bot) return;
        console.log(message.author.tag,"embed launched");

        var smth = message.author.displayAvatarURL();
        var us = message.author.username
        const embed = new MessageEmbed()
        .setColor('AQUA')
        
        
        .setTitle('Angelina-chan help page')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setDescription(`Here's a list of commands`)
        .setImage('https://cdn.discordapp.com/emojis/839892689637998612.webp?size=48')
        .setFields(
            { name: 'a!ping', value: 'Check my connection' },
		    { name: '\u200B', value: '\u200B' },
            { name: 'Bottom field', value: 'Did I just leave a blank space above this?', inline: true },
		    { name: 'Bottom field', value: 'Did I just leave a blank space above this?', inline: true } 
        )


message.channel.send({embeds: [embed]})


    }   
});
