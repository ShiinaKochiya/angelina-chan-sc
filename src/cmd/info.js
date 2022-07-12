const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "info",
    description: "show bot info",

    async run(message, args, client) {
        if (message.author.bot) return;
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                 hour: "numeric",
                                                 minute: "numeric",
                                                 second: "numeric"})
        console.log("[",time,"]", message.author.tag,"used info")
        message.channel.send(`Developed by Sakana Kochiya,Giabao06 and Seyun Sky, code yeeted from Angelina-chan, another Sakura bot\nSource code(Please read the README.md and LICENSE.ms before using this code): https://github.com/SakuraKaslana/angelina-chan-sc`)

    }
});
