const Command = require("../structures/Command.js");
const fs = require('fs');
const path = require('path');
const config = require('../data/config.json');
const opListPath = path.join(__dirname, '../data/op_list.json');

module.exports = new Command({
    name: "removeOperator",
    description: "remove an operator from op_list.json",
    alias: ["rmOp"],

    async run(message, args, client) {

        if (!message.member.roles.cache.some(role => config.adminRoles.includes(role.id))) {
            return message.reply('You do not have permission to use this command.');
        }

        if (args.length < 3) {
            return message.channel.send('Usage: a!removeOperator <rarity> <id|name>\nExample: a!removeOperator 6 3  (removes star6 entry with id 3)\nOr: a!removeOperator 5 Whisperblade (removes first matching name)');
        }

        const rarity = args[1];
        const query = args.slice(2).join(' ');
        let rarityKey;

        switch (rarity) {
            case '6':
                rarityKey = 'star6';
                break;
            case '5':
                rarityKey = 'star5';
                break;
            case '4':
                rarityKey = 'star4';
                break;
            case '3':
                rarityKey = 'star3';
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

        const bucket = opList[rarityKey];
        if (!bucket) return message.channel.send('No operators found for that rarity.');

        // If query is an integer id, delete by key directly
        if (/^\d+$/.test(query)) {
            const id = query.toString();
            if (bucket.hasOwnProperty(id)) {
                const removed = bucket[id];
                delete bucket[id];
                try {
                    fs.writeFileSync(opListPath, JSON.stringify(opList, null, 4), 'utf8');
                } catch (err) {
                    return message.channel.send('Failed to write to op_list.json.');
                }
                return message.channel.send(`Operator removed: ${removed.opName} (id ${id})`);
            } else {
                return message.channel.send(`No operator with id ${id} in ${rarityKey}.`);
            }
        }

        // Otherwise, treat query as name fragment and remove first matching entry
        const entries = Object.entries(bucket);
        const match = entries.find(([key, val]) => {
            if (!val || !val.opName) return false;
            return val.opName.toLowerCase().includes(query.toLowerCase());
        });

        if (!match) {
            return message.channel.send('No operator matching that name was found.');
        }

        const [matchKey, matchVal] = match;
        delete bucket[matchKey];

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
        console.log(`[${time} Database] Operator ${matchVal.opName} (id ${matchKey}) removed from op_list.json`);
        return message.channel.send(`Operator removed: ${matchVal.opName} (id ${matchKey})`);
    }
});
