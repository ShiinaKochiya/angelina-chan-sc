const Command = require("../structures/Command.js");

const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "avatar",
    description: "the avatar of the command executor",

    async run(message, args, client) {
        if (message.author.bot) return;
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                 hour: "numeric",
                                                 minute: "numeric",
                                                 second: "numeric"})
        console.log("[",time,"]",message.author.tag,"launched embed");
        const embed = new MessageEmbed()
    .setDescription(`ur avatar`)
    .setImage(message.author.displayAvatarURL())
    .setTimestamp()
        message.channel.send({embeds: [embed]})


    }
});
