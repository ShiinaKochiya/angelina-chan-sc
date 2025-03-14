const Command = require("../structures/Command.js");
const config = require("../data/config.json")

module.exports = new Command({
    name: "balance",
    alias: ["balance"],
    description: "check ur current balance",

    async run(message, args, client) {
        userIndex = message.author.id % 1000000000;
        if (global.userCost[userIndex] == undefined){global.userCost[userIndex] = 200};
        message.reply(`Your current bits balance: ${global.userCost[userIndex]}`)
    }
});
