const Command = require("../structures/Command.js");
const config = require("../data/config.json")
const redeemed = new Set();

module.exports = new Command({
    name: "redeem",
    description: "show bot info",

    async run(message, args, client) {

        if (redeemed.has(message.author.id)) {
            message.channel.send("Bits drop can only be redeemed once per 12 hours! ");
        } else {

            userTemp = message.author.id % 1000000000;

            if (global.userCost[userIndex] == undefined){global.userCost[userIndex] = 200};
        
            global.userCost[userTemp] = global.userCost[userTemp]  + 350;

            message.channel.send("Successfully redeemed 350 bits!");

        redeemed.add(message.author.id);
        setTimeout(() => {
          redeemed.delete(message.author.id);
        }, 43200000);
        }

    }
});
