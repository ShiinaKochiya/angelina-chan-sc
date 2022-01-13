const Command = require("../structures/Command.js");
const config = require("../data/config.json")

module.exports = new Command({
    name: "shutdown",
    description: "shutdown the bot",

    async run(message, args, client) {
        if (message.author.bot) return;

        if (message.member.roles.cache.has(config.adminRoles)){
            message.reply(`See ya next time`).then(() => {
             console.log(`Angie was shutted down using !shutdown`)   
             client.destroy();
             return(0);
        })   
        } else {
            message.reply(`boi u're not a mod`)
        }
    }

});
