const Command = require("../structures/Command.js");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "changelog",
    description: "changelog",

    async run(message, args, client) {
        if (message.author.bot) return;
        const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle('Changelog for Angie-chan')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .addFields(
            { name: 'Prefix is now non case-sensitive', value: 'For ya mobile users' }
            
        )
        .setFooter(`Current version: Alpha-build 0.0.4 | Commit no.78 (Commit no.3 counting from the lastest tag)`)
        

message.reply({embeds: [embed]})
    }
});
