const Command = require("../structures/Command.js");
const market = require('../data/market.json');
const fs = require('fs');
const path = require('path');
const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const { getMoney, updateMoneyCache } = require('../moneySchema.js');
const marketPath = path.join(__dirname, '../data/market.json');
const inventoryPath = path.join(__dirname, '../marketInventory.json');
const allowedRole = "939851547590934613"

module.exports = new Command({
    name: "market",
    description: "its le advent of code",

    async run(message, args, client) {
        const marketData = market;

        if (args.length <= 1) {
            const description = Object.keys(marketData).length
                ? Object.entries(marketData)
                      .sort((a, b) => Number(b[1]) - Number(a[1]))
                      .map(([k, v]) => `${k}: ${Number(v).toLocaleString('en-US')} VND`)
                      .join('\n')
                : 'No market data available.';

            const embed = new MessageEmbed()
                .setColor('#8F8F8F')
                .setTitle('Bảng giá thị trường Phoenix Frontiers')
                .setURL('')
                .setDescription(description);

            return message.channel.send({ embeds: [embed] });
        }

        const action = args[1].toLowerCase();

        // Show last interval fluctuations: a!market last
        if (action === 'last' || action === 'fluct' || action === 'fluctuate' || action === 'fluctuations') {
            const lastPath = path.join(__dirname, '../data/market_last_hour.json');
            if (!fs.existsSync(lastPath)) return message.channel.send('Market chưa đổi đâu, chill');
            const last = JSON.parse(fs.readFileSync(lastPath, 'utf8'));
            const lines = Object.keys(last).map(k => {
                const entry = last[k];
                const p = Number(entry.percent);
                const delta = Number(entry.delta);
                if (p > 0) return `${k} đã tăng ${p}% (+${delta.toLocaleString('en-US')} VND)`;
                if (p < 0) return `${k} bị giảm ${Math.abs(p)}% (-${Math.abs(delta).toLocaleString('en-US')} VND)`;
                return `${k} không thay đổi`;
            });
            return message.channel.send( `Trong 5 phút vừa qua:\n` + lines.join('\n'));
        }

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
            return message.channel.send(`Added **${name}**: ${price.toLocaleString('en-US')}VND`);
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
            return message.channel.send(`Updated **${name}**: ${price.toLocaleString('en-US')}VND`);
        }

        if (action === 'remove' || action === 'rm' || action === 'delete') {
            if (!message.member || !message.member.roles || !message.member.roles.cache.has(allowedRole)) {
                return message.channel.send('You do not have permission to use this action.');
            }
            if (args.length < 3) return message.channel.send('Usage: `a!market remove <name>`');

            const name = args.slice(2).join(' ').trim();
            if (!name) return message.channel.send('?');

            if (!Object.prototype.hasOwnProperty.call(marketData, name)) {
                return message.channel.send(`Làm gì có **${name}** đâu bro`);
            }

            const old = marketData[name];
            delete marketData[name];
            fs.writeFileSync(marketPath, JSON.stringify(marketData, null, 4), 'utf8');

            const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            return message.channel.send(`**${name}** đã bị chim cút`);
        }

        if (action === 'buy') {
            if (args.length < 4) return message.channel.send('Usage: `a!market buy <name> <quantity>`');
            const qtyToken = args[args.length - 1];
            if (!/^[0-9]+$/.test(qtyToken)) return message.channel.send('Quantity must be a positive integer.');
            const qty = Number(qtyToken);
            const name = args.slice(2, args.length - 1).join(' ').trim();

            if (!Object.prototype.hasOwnProperty.call(marketData, name)) return message.channel.send(`**${name}** có trên thị trường đâu?`);

            const price = BigInt(marketData[name]);
            const total = price * BigInt(qty);

            const userId = message.author.id;
            const money = await getMoney(userId);
            const wallet = typeof money.wallet === 'bigint' ? money.wallet : BigInt(money.wallet || 0);

            if (wallet < total) return message.channel.send('Nghèo rồi ông cháu ei');

            const newWallet = wallet - total;
            updateMoneyCache(userId, { wallet: newWallet });

            // update inventory
            let inventory = {};
            if (fs.existsSync(inventoryPath)) inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
            if (!inventory[userId]) inventory[userId] = {};
            inventory[userId][name] = (inventory[userId][name] || 0) + qty;
            fs.writeFileSync(inventoryPath, JSON.stringify(inventory, null, 4), 'utf8');

            const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            return message.channel.send(`Mua thành công: **${qty}x ${name}** - Tổng: ${total.toLocaleString('en-US')} VND. Ví hiện tại: ${newWallet.toLocaleString('en-US')} VND`);
        }

        // sell: a!market sell <name> <quantity>
        if (action === 'sell') {
            if (args.length < 4) return message.channel.send('Usage: `a!market sell <name> <quantity>`');
            const qtyToken = args[args.length - 1];
            if (!/^[0-9]+$/.test(qtyToken)) return message.channel.send('Quantity must be a positive integer.');
            const qty = Number(qtyToken);
            const name = args.slice(2, args.length - 1).join(' ').trim();

            // load inventory
            let inventory = {};
            if (fs.existsSync(inventoryPath)) inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
            const userInv = inventory[message.author.id] || {};
            const have = userInv[name] || 0;
            if (have < qty) return message.channel.send(`Bạn không có đủ **${name}** để bán.`);

            if (!Object.prototype.hasOwnProperty.call(marketData, name)) return message.channel.send(`**${name}** not found in market.`);
            const price = BigInt(marketData[name]);
            const total = price * BigInt(qty);

            // add money
            const userId = message.author.id;
            const money = await getMoney(userId);
            const wallet = typeof money.wallet === 'bigint' ? money.wallet : BigInt(money.wallet || 0);
            const newWallet = wallet + total;
            updateMoneyCache(userId, { wallet: newWallet });

            // deduct inventory
            inventory[userId][name] = have - qty;
            if (inventory[userId][name] <= 0) delete inventory[userId][name];
            fs.writeFileSync(inventoryPath, JSON.stringify(inventory, null, 4), 'utf8');

            const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            return message.channel.send(`Bán thành công: **${qty}x ${name}** - Tổng: ${total.toLocaleString('en-US')} VND. Ví hiện tại: ${newWallet.toLocaleString('en-US')} VND`);
        }

        // a!market inventory [@user|userId]
        if (action === 'inventory' || action === 'inv') {
            const targetArg = args[2];
            let targetId = message.author.id;
            if (targetArg) {
                const mentionMatch = targetArg.match(/^<@!?(\d+)>$/);
                if (mentionMatch) targetId = mentionMatch[1];
                else if (/^\d+$/.test(targetArg)) targetId = targetArg;
            }

            let inventory = {};
            if (fs.existsSync(inventoryPath)) inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
            const userInv = inventory[targetId] || {};

            if (Object.keys(userInv).length === 0) {
                if (targetId === message.author.id) return message.channel.send('Bạn chưa có món hàng nào trong kho.');
                // try to fetch username
                const member = await message.guild?.members.fetch(targetId).catch(() => null);
                const name = member ? member.user.tag : targetId;
                return message.channel.send(`${name} chưa có món hàng nào trong kho.`);
            }

            const lines = Object.entries(userInv)
                .sort((a, b) => Number(b[1]) - Number(a[1]))
                .map(([k, v]) => `${k}: ${v}`);

            const member = await message.guild?.members.fetch(targetId).catch(() => null);
            const title = member ? `${member.user.tag} inventory` : (targetId === message.author.id ? 'Your inventory' : `Inventory of ${targetId}`);

            const embed = new MessageEmbed()
                .setColor('#8F8F8F')
                .setTitle(title)
                .setDescription(lines.join('\n'));

            return message.channel.send({ embeds: [embed] });
        }

        return message.channel.send('Invalid action. Use `add`, `change`, `remove`, `buy`, `sell` or `inventory`.');
    }
});
