const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "info",
    description: "show bot info",

    async run(message, args, client) {
        console.log(message.author.tag,"used a!info")
        message.channel.send(`Developed by Sakura Kaslana#5414, code yeeted from Angelina-chan, another Sakura bot\nSource code(Please read the README.md and LICENSE.ms before using this code): https://github.com/SakuraKaslana/angelina-chan-sc`)

    }
});
