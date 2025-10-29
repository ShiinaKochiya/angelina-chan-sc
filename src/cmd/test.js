const Command = require("../structures/Command.js");
const charlist = require("../data/charlist_wuwa.json")

module.exports = new Command({
    name: "test",
    description: "show bot info",

    async run(message, args, client) {

        message.channel.send(charlist.star5[5].res)
        message.channel.send("https://tenor.com/view/touhou-fumo-reimu-hakurei-spin-sit-gif-18089362")

    }
});
