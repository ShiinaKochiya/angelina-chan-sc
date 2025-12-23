const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const { getWallet } = require("../walletStore.js");

function formatBigInt(n){
    const s = n.toString()
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

module.exports = new Command({
    name: "wallet",
    description: "xin 50k",

    async run(message, args, client) {
        const userId = message.author.id;
        const wallet = getWallet(userId);
        message.reply(`Ví của bạn đang có: ${formatBigInt(wallet)} VND`)
    }
});
