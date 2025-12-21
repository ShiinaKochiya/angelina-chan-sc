const Command = require("../structures/Command.js");
const market = require('../data/market.json');
const fs = require('fs');
const path = require('path');
const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const marketPath = path.join(__dirname, '../data/market.json');
const allowedRole = "939851547590934613"
module.exports = new Command({
    name: "market",
    description: "its le advent of code",

    async run(message, args, client) {
        const marketData = market;

        if (args.length <= 1) {
            const description = Object.keys(marketData).length
                ? Object.entries(marketData).map(([k, v]) => `${k}: ${Number(v).toLocaleString('en-US')} VND`).join('\n')
                : 'No market data available.';

            const embed = new MessageEmbed()
                .setColor('#8F8F8F')
                .setTitle('Bảng giá thị trường Phoenix Frontiers')
                .setURL('')
                .setDescription(description);

            return message.channel.send({ embeds: [embed] });
        }

        const action = args[1].toLowerCase();

        if (action === 'add') {
            if (!message.member || !message.member.roles || !message.member.roles.cache.has(allowedRole)) {
                return message.channel.send('You do not have permission to use this action.');
            }
            if (args.length < 3) return message.channel.send('Usage: `a!market add <name> [price]`');

            let tokens = args.slice(2);
            let price = 0;
            const last = tokens[tokens.length - 1];
            if (!isNaN(last)) {
                price = Number(last);
                tokens.pop();
            }
            const name = tokens.join(' ').trim();
            if (!name) return message.channel.send('Invalid name.');

            if (Object.prototype.hasOwnProperty.call(marketData, name)) {
                return message.channel.send(`**${name}** already exists in market.`);
            }

            marketData[name] = price;

            fs.writeFileSync(marketPath, JSON.stringify(marketData, null, 4), 'utf8');

            const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            console.log(`[${time} Database] Market added ${name}: ${price}`);
            return message.channel.send(`Added **${name}**: $${price.toLocaleString('en-US')}`);
        }

        if (action === 'change' || action === 'set' || action === 'update') {
            if (!message.member || !message.member.roles || !message.member.roles.cache.has(allowedRole)) {
                return message.channel.send('You do not have permission to use this action.');
            }
            if (args.length < 4) return message.channel.send('Usage: `a!market change <name> <price>`');

            const priceToken = args[args.length - 1];
            if (isNaN(priceToken)) return message.channel.send('Price must be a number.');
            const price = Number(priceToken);
            const name = args.slice(2, args.length - 1).join(' ').trim();

            if (!Object.prototype.hasOwnProperty.call(marketData, name)) {
                return message.channel.send(`**${name}** not found in market.`);
            }

            marketData[name] = price;

            fs.writeFileSync(marketPath, JSON.stringify(marketData, null, 4), 'utf8');

            const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            console.log(`[${time} Database] Market changed ${name}: ${price}`);
            return message.channel.send(`Updated **${name}**: $${price.toLocaleString('en-US')}`);
        }

        return message.channel.send('Invalid action. Use `add` or `change`.');
    }
});
