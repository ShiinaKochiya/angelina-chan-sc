const Command = require("../structures/Command.js");
const osu = require("nodesu")

module.exports = new Command({
    name: "progress",
    description: "progress go STINK",
    

    async run(message, args, client) {
        if (message.author.bot) return;
        var d1 = new Date();
        var d2 = new Date("2022/03/10"); 
        var msMinute = 60*1000;
        var diff = Math.round(Math.abs((d1-d2)/msMinute*10))/10;
        message.reply(`its been ${diff} minutes since the last progress was made, somehow...`)

    }
});

var d1 = new Date(); //"now"
var d2 = new Date("2011/02/01");  // some date
var diff = Math.abs(d1-d2);