const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const { getMoney, updateMoneyCache } = require("../moneySchema.js");

module.exports = new Command({
    name: "anxin",
    alias: ["50k"],
    description: "xin 50k",

    async run(message, args, client) {
        const userId = message.author.id;
        const money = await getMoney(userId);
        const wallet = typeof money.wallet === 'bigint' ? money.wallet : BigInt(money.wallet || 0);

        const bonus = BigInt(500000);
        const newWallet = wallet + bonus;

        updateMoneyCache(userId, { wallet: newWallet });

        message.reply(`Đại đế Kamito thấy bạn thật đáng thương, nên Đại đế đã drop cho bạn ${bonus.toLocaleString('en-US')}\nHiện tại bạn có: ${newWallet.toLocaleString('en-US')} VND`);
    }
});
