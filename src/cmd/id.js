const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "id",
    description: "show bot info",

    async run(message, args, client) {
        if (message.author.bot) return;
        let server = message.channelId;
        message.reply(`channel ID is `+ server);

    }
});
