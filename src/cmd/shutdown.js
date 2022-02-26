const Command = require("../structures/Command.js");

const { Permissions } = require('discord.js');

module.exports = new Command({
    name: "shutdown",
    description: "shutdown the bot",

    async run(message, args, client) {
        if (message.author.bot) return;

        if (message.member.permissions.has(Permissions.ADMINISTRATOR)){
            message.reply(`See ya next time`).then(() => {
             console.log(`Angie was shutted down using !shutdown`)
             client.destroy();
        })
        } else {
            message.reply(`boi u're not a mod`)
        }
    }
});
