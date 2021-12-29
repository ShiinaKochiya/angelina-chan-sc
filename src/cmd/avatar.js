const Command = require("../structures/Command.js");

const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "avatar",
    description: "the avatar of the command executor",

    async run(message, args, client) {
        if (message.author.bot) return;
        console.log(message.author.tag,"embed launched");
        const embed = new MessageEmbed()
    .setDescription(`ur avatar`)
    .setImage(message.author.displayAvatarURL())
        message.channel.send({embeds: [embed]})


    }   
});
