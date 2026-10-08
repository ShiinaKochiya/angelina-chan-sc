const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const redeemed = new Set();
const { getMoney, updateMoneyCache } = require("../moneySchema.js");

module.exports = new Command({
    name: "redeem",
    description: "show bot info",

    async run(message, args, client) {

        if (redeemed.has(message.author.id)) {
            message.channel.send("Bits drop can only be redeemed once per 12 hours! ");
        } else {

            const userId = message.author.id;
            const money = await getMoney(userId);
            const curr = typeof money.chips === 'bigint' ? money.chips : BigInt(money.chips || 0);
            updateMoneyCache(userId, { chips: curr + 350n });

            message.channel.send("Successfully redeemed 350 bits!");

        redeemed.add(message.author.id);
        setTimeout(() => {
          redeemed.delete(message.author.id);
        }, 43200000);
        }

    }
});
