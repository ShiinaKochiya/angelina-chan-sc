const { Guild } = require("discord.js");
const Command = require("../structures/Command.js");
const { Permissions } = require('discord.js');
const config = require("../data/config.json")
module.exports = new Command({
    name: "unlock",
    description: "unlock the channel that the command is exucuted",

    async run(message, args, client) {
        if (message.author.bot) return;
        var id = args.slice(1).join(" ")
        if (id === ``){var id = message.channelId}
        if (message.member.roles.cache.has(config.adminRoles)){
            client.channels.cache.get(id).permissionOverwrites.edit(message.guild.roles.everyone.id, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                READ_MESSAGE_HISTORY: true,
                ATTACH_FILES: true
            });          
        } else message.reply(`why do you want to use a mod command when you're not a mod`)

    }
});
