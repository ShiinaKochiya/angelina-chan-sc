const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const { getMoney } = require("../moneySchema.js");

module.exports = new Command({
    name: "wallet",
    description: "xin 50k",

    async run(message, args, client) {
        const userId = message.author.id;
        const money = await getMoney(userId);
        const wallet = typeof money.wallet === 'bigint' ? money.wallet : BigInt(money.chips || 0);
        message.reply(`Ví của bạn đang có: ${wallet.toLocaleString('en-US')} VND`)
    }
});
