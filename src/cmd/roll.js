const Command = require("../structures/Command.js");
const {MessageEmbed} = require('discord.js');

module.exports = new Command({
    name: "roll",
    alias: ["random"],
    description: "roll a random number from 1 to 100",

    async run(message, args, client) {
        if (message.author.bot) return;
        var temp = args.slice(1).join(" ")
        var acc = args.slice(2).join(" ");
        var l = temp.length;
        var l2 = acc.length
        var n = temp.substr(0, l-l2)
        var ch = 1
        //console.log(message.author.tag,"used a!roll",n)
        if (!isNaN(n)){
            if (n === "") {
                var n = 100;
                var ch = 0
            } else
            if (n < 1) {message.reply('You entered an invalid number!')} else {var ch = 0}
        var numba = (Math.random() * n)+1;
    var name = message.author.username;
    if (acc = "accurate") {
            var numble = numba
        } else {
            var numble = Math.floor(numba)
        }
    var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                             hour: "numeric",
                                             minute: "numeric",
                                             second: "numeric"})
    console.log("[",time,"]",message.author.tag,"rolled a random number");
    const embed = new MessageEmbed()
    .setColor(`#2EFFEE`)
    .setTitle(`${name} rolled ${numble}`)
    .setTimestamp()
    //.setFooter(`Rolled by ${name}`)

    if (ch === 0) {message.reply({embeds: [embed]})}} else message.reply(`you didn't provide a valid number!`)

    }
});
