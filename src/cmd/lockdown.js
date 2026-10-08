const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "lockdown",
    description: "setting pity for the headhunt cmd",
    alias: ["ld"],

    async run(message, args, client) {
    var arg = args.slice(1).join(" ").toLowerCase();
    if (global.lockdown == false && arg == "enabled"){
        global.lockdown = true;
        message.reply("Bot lockdown'ed, stop listening to cmds now")
    }

    var time = new Date().toLocaleTimeString('en-US', { hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"})
    console.log("[",time,"]", message.author.tag,"modified the matrix of chances")
    }
});
