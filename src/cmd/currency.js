const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const { getMoney } = require("../moneySchema.js");

module.exports = new Command({
    name: "currency",
    alias: ["balance"],
    description: "check ur current balance",

    async run(message, args, client) {
        const userId = message.author.id;
        const money = await getMoney(userId);
        const chips = typeof money.chips === 'bigint' ? money.chips : BigInt(money.chips || 0);
        message.reply(`Your current bits balance: ${chips.toString()}`)
    }
});
