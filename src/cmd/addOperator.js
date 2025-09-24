const Command = require("../structures/Command.js");        
const fs = require('fs');
const path = require('path');
const config = require('../data/config.json');
const opListPath = path.join(__dirname, '../data/op_list.json');

module.exports = new Command({
    name: "addOperator",
    description: "add Operators to op_list.json",

    async run(message, args, client) {

        if (!message.member.roles.cache.some(role => config.adminRoles.includes(role.id))) {
            return message.reply('You do not have permission to use this command.');
        }

        if (args.length < 2) {
            return message.channel.send('Usage: a!addOperator <rarity> <operator name>');
        }

        const rarity = args[1];
        const name = args.slice(2).join(' ');
        let rarityKey;
        let stars;
        console.log(rarity)
        switch (rarity) {
            case '6':
                rarityKey = 'star6';
                stars = '★★★★★★';
                break;
            case '5':
                rarityKey = 'star5';
                stars = '★★★★★';
                break;
            case '4':
                rarityKey = 'star4';
                stars = '★★★★';
                break;
            case '3':
                rarityKey = 'star3';
                stars = '★★★';
                break;
            default:
                return message.channel.send('Rarity must be 3, 4, 5, or 6.');
        }

        let opList;
        try {
            opList = JSON.parse(fs.readFileSync(opListPath, 'utf8'));
        } catch (err) {
            return message.channel.send('Failed to read op_list.json.');
        }

        const keys = Object.keys(opList[rarityKey]).map(Number);
        const nextKey = (Math.max(...keys) + 1).toString();

        let opName;
        if (rarity === '6') {
            opName = `**[${stars}]   ${name}**`;
        } else {
            opName = `[${stars}]       ${name}`;
        }

        opList[rarityKey][nextKey] = { opName };

        try {
            fs.writeFileSync(opListPath, JSON.stringify(opList, null, 4), 'utf8');
        } catch (err) {
            return message.channel.send('Failed to write to op_list.json.');
        }
        const time = new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        });
        console.log(`[${time} Database] Operator ${opName} added to op_list.json`);
        message.channel.send(`Operator added: ${opName}`);
    }
});
