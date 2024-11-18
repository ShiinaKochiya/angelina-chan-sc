const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "setpity",
    description: "setting pity for the headhunt cmd",

    async run(message, args, client) {
    var numPity = args.slice(1).join(" ");
    pityIndex = message.author.id % 1000000000;
    if( parseInt(numPity, 10) < 101 && parseInt(numPity, 10) > -1 && parseInt(numPity, 10) !== NaN) {global.userPity[pityIndex] = parseInt(numPity, 10);
    message.reply(`Your headhunt pity has been set to ${numPity}!`)} else {message.reply("No")}

    var time = new Date().toLocaleTimeString('en-US', { hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"})
    console.log("[",time,"]", message.author.tag,"modified the matrix of chances")
    }
});
