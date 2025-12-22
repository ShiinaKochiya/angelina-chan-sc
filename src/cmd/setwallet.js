const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const { getMoney, updateMoneyCache } = require("../moneySchema.js");

module.exports = new Command({
    name: "setwallet",
    alias: ["sw"],
    description: "Set a user's wallet amount (admin only)",

    async run(message, args, client) {
        // role check using config.adminRoles
        if (!message.member || !message.member.roles || !message.member.roles.cache.some(role => config.adminRoles.includes(role.id))) {
            return message.channel.send('You do not have permission to use this action.');
        }

        if (args.length < 3) return message.channel.send('Usage: `a!setwallet <amount> <userId|@user>`');

        const amountRaw = String(args[1]).replace(/[^0-9-]/g, '');
        if (!/^-?\d+$/.test(amountRaw)) return message.channel.send('Amount must be an integer (no commas or symbols).');
        const amount = BigInt(amountRaw);

        const targetArg = args[2];
        let targetId = null;
        const mentionMatch = targetArg.match(/^<@!?(\d+)>$/);
        if (mentionMatch) targetId = mentionMatch[1];
        else if (/^\d+$/.test(targetArg)) targetId = targetArg;
        else return message.channel.send('Invalid user id or mention.');

        updateMoneyCache(targetId, { wallet: amount });

        const member = await message.guild?.members.fetch(targetId).catch(() => null);
        const name = member ? member.user.tag : targetId;

        return message.channel.send(`Set wallet of **${name}** to ${amount.toLocaleString('en-US')} VND`);
    }
});
