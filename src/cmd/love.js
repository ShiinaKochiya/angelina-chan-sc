const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "love",
    description: ":AngeLove:",

    async run(message, args, client) {

        message.channel.send({stickers: ["1489474099410632745"]})

    }
});
