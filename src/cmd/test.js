const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const Twitter = require('twit');

module.exports = new Command({
    name: "test",
    description: "show bot info",

    async run(message, args, client) {

        message.channel.send("Hi this is a test command")
        message.channel.send("https://tenor.com/view/touhou-fumo-reimu-hakurei-spin-sit-gif-18089362")

    }
});
