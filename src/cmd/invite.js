const Command = require("../structures/Command.js");
const charlist = require("../data/charlist_wuwa.json")

module.exports = new Command({
    name: "invite",
    alias: ["inv"],
    description: "inviting the bot",
    async run(message, args, client) {
    
    message.reply("Inviting Angelina? Use this [link](https://discord.com/oauth2/authorize?client_id=907804509466673152&permissions=8&integration_type=0&scope=bot) to add her!")

    }
});
