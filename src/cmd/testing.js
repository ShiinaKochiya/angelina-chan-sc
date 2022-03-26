const Command = require("../structures/Command.js");
const config = require("../data/config.json");

module.exports = new Command({
    name: "test",
    description: "test",

    async run(message, args, client) {
        if (message.author.bot) return;
        ///if (message.member.roles.cache.some(role => role.id === config.adminRoles)) {return message.reply("You have the admin role")} else {message.reply("No")}
        if (message.member.roles.cache.some(role => config.adminRoles.includes(role.id))) {
            message.reply("You are an admin")
        } else {
            message.reply("no")
        }
    }
});
