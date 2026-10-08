const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "heart",
    description: ":AngeLove:",

    async run(message, args, client) {

        message.channel.send({stickers: ["1489473424664559646"]})

    }
});
