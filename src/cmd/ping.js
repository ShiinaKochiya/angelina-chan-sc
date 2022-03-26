const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "ping",
    description: "show bot ping",

    async run(message, args, client) {
        if (message.author.bot) return;
        console.log(message.author.tag,"used a!ping")
        const msg =  await message.reply(`Ping: ${client.ws.ping} ms`);

        msg.edit(`Ping: ${client.ws.ping} ms\nAPI ping: ${msg.createdTimestamp - message.createdTimestamp} ms`)

    }
});

