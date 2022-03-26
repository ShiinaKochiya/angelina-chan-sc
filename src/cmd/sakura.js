const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "sakura",
    description: "uh, smth ig",

    async run(message, args, client) {
        message.channel.send(`I have seen this dumbass crash the other me (Angie-beta) 192 times`);

    }
});
