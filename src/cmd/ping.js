const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "ping",
    description: "show bot ping",

    async run(message, args, client) {
        if (message.author.bot) return;
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                 hour: "numeric",
                                                 minute: "numeric",
                                                 second: "numeric"})
        console.log("[",time,"]", message.author.tag,`checked the ping (was ${client.ws.ping} ms)`)
        const msg =  await message.reply(`Ping: ${client.ws.ping} ms`);

        msg.edit(`Ping: ${client.ws.ping} ms\nAPI ping: ${msg.createdTimestamp - message.createdTimestamp} ms`)

    }
});
