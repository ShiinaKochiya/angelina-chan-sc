const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const redeemed = new Set();
const { getWallet, addWallet } = require("../walletStore.js");

module.exports = new Command({
    name: "anxin",
    alias: ["50k"],
    description: "xin 50k",

    async run(message, args, client) {

        if (redeemed.has(message.author.id)) {
            message.channel.send("Ăn xin ít thôi ní, 12 tiếng nữa quay lại");
        } else {

            const userId = message.author.id;
            const wallet = getWallet(userId);

            const bonus = 500000n;
            const newWallet = addWallet(userId, bonus);

            function formatBigInt(n){
                const s = n.toString();
                return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            message.reply(`Đại đế Kamito thấy bạn thật đáng thương, nên Đại đế đã drop cho bạn ${formatBigInt(bonus)}\nHiện tại bạn có: ${formatBigInt(newWallet)} VND`);

        redeemed.add(message.author.id);
        setTimeout(() => {
          redeemed.delete(message.author.id);
        }, 43200000);
        }

        
    }
});
