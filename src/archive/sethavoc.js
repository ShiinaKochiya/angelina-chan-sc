const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "sethavoc",
    description: "",
    alias: [""],

    async run(message, args, client) {
    var arg = args.slice(1).join(" ").toLowerCase();
    
    if(message.author.id == 689364440600412195){
        if (global.havoc == false && arg == "enabled"){
                global.havoc = true;
                message.reply("Lance PTSD scenario: Enabled");
        } else {
                global.havoc = false;
                message.reply("Lance PTSD scenario: Disabled")
        }
    }

    var time = new Date().toLocaleTimeString('en-US', { hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"})
    console.log("[",time,"]", message.author.tag,"recreated Lance PTSD scenario")
    }
});
