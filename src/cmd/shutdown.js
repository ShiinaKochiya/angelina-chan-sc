const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "shutdown",
    description: "shutdown the bot",

    async run(message, args, client) {
        if (message.author.bot) return;

        if (message.member.roles.cache.has(`834426705250746389`)){
            message.reply(`See ya next time`).then(() => {
             console.log(`Angie was shutted down using !shutdown`)   
             client.destroy();
        })   
        } else {
            message.reply(`boi u're not a mod`)
        }
    }
});
