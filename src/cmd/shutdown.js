const Command = require("../structures/Command.js");
const config = require ("../data/config.json");
const { Permissions } = require('discord.js');

module.exports = new Command({
    name: "shutdown",
    description: "shutdown the bot",

    async run(message, args, client) {
        if (message.author.bot) return;
        var check = new Boolean (false);
        for (let i = 0; i < config.adminRoles; i++) {
          if (message.member.roles.cache.has(config.adminRoles[i])) {check = true}
}
        var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                 hour: "numeric",
                                                 minute: "numeric",
                                                 second: "numeric"})
        if (check == true){
            message.reply(`See ya next time`).then(() => {
             console.log("[",time,"]",`Shutdown requested by ${message.author.tag}, cya later`)
             client.destroy();
             process.exit();

        })
        } else {
            message.reply(`boi u're not a mod`)
        }
    }

});
