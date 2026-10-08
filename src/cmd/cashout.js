const Command = require("../structures/Command.js");
const { getWallet, addWallet } = require("../walletStore.js");

module.exports = new Command({
    name: "cashout",
    aliases: ["withdraw"],
    description: "Withdraw funds from wallet",

    async run(message, args, client) {
        if (message.author.bot) return;

        function formatBigInt(n){
            const s = n.toString();
            return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        let cycle = 0;
        let bankName = null;
        let accountNumber = null;

        const filter = (m) => m.author && m.author.id === message.author.id && m.id !== message.id && !m.author.bot;
        const collector = message.channel.createMessageCollector({ filter, time: 60000 });

        message.reply("Nhập tên ngân hàng");

        for await (const msg of collector) {
            const contentRaw = (msg.content || "").trim();
            if (!contentRaw){
                // ignore empty messages, only advance when receiving non-empty messages
                message.reply("Hãy thử lại");
                continue;
            }
            const content = contentRaw; 
            switch (cycle){
            case 0:
                bankName = content;
                message.reply("Nhập số tài khoản");
                cycle++;
                break;
            case 1:
                accountNumber = content;
                message.reply("Số tiền muốn rút?");
                cycle++;
                break;
            case 2:
                const raw = String(content).replace(/[^0-9-]/g, '');
                if (!/^\d+$/.test(raw)){
                    message.reply("Số tiền không hợp lệ. Hãy nhập một số dương. Hãy thử lại sau");
                    collector.stop();
                    break;
                }
                const amount = BigInt(raw);

                const userId = message.author.id;
                const wallet = getWallet(userId);

                if (amount <= 0n){
                    message.reply("Số tiền phải lớn hơn 0. Hãy thử lại sau.");
                    collector.stop();
                    break;
                }

                if (wallet < amount){
                    message.reply(`Ví của bạn không đủ. Hiện có: ${formatBigInt(wallet)} VND`);
                    collector.stop();
                    break;
                }

                const newWallet = addWallet(userId, -amount);
                const year = Math.ceil(Math.random() * 100 + 50)
                message.reply(`Hệ thống ngân hàng đang bị lỗi vì trục trặc từ AWS và CNS. Dự kiến thời gian rút tiền thành công: ${year} năm`);
                collector.stop();
                break;
            default:
                collector.stop();
            }
        }
    }
});
